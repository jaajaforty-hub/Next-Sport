"use server"

import {z} from "zod"
import { redirect } from "next/navigation"
import {db} from "@/db/db"
import bcryptjs from "bcryptjs"

const dataFormat = z.object({
    userID : z.string().email({message:"should be an email"}),
    password : z.string().min(5,{message:"should be more than 5 charactors"}),
    confirmPassword : z.string().min(5,{message:"should be more than 5 charactors"})
})

interface FormStatus {
    errors? :{
        userID ? : string[],
        password ? : string[] 
        confirmPassword ? : string[]
        _form ? : string[]
    }
}

export default async function HandleRegister(

    formStatus:FormStatus, formData:FormData

):Promise<FormStatus>{

    const results = dataFormat.safeParse({
        userID : formData.get("userID"),
        password : formData.get("password"),
        confirmPassword : formData.get("confirmPassword")
    })

    if(!results.success){
        return {
            errors : results.error.flatten().fieldErrors
        }
    }

    const {userID, password, confirmPassword} = results.data

    if(password !== confirmPassword){
        return {
            errors : {_form:["passwords should much."]}
        }
    }

    try{
        const hashPassword = await bcryptjs.hash(password,10)
        
        const checkUser = await db.query(`
            SELECT * FROM users
            WHERE userid=$1
        `,[userID])

        const userId = checkUser.rows

        if(userId.length >= 1){
            return{
                errors:{_form:["The user id is already taken"]}
            }
        }

        await db.query(`
            INSERT INTO users(userid, password)
            VALUES($1,$2)
        `,[userID, hashPassword])

    }catch(e){
        throw new Error('DB connection error')
    }

    return {errors:{}}

    redirect("/")

  
} 