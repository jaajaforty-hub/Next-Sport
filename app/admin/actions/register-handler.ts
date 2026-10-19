"use server"

import {z} from "zod"
import { redirect } from "next/navigation"
import {db} from '@/db/db'
import bcryptjs from 'bcryptjs'


const dataFormat = z.object({
    userID : z.string().email({message:"should be an email"}),
    password : z.string().min(5,{message:"should be more than 5 charactors"}),
    confirmPassword : z.string().min(5,{message:"should be more than 5 charactors"}),
    adminID :  z.string().min(5,{message:"should be more than 5 charactors"}),
})

interface FormStatus {
    errors? :{
        userID ? : string[],
        password ? : string[] 
        confirmPassword ? : string[]
        adminID? : string[]
        _form ? : string[]
    }
}

export default async function HandleRegister(

    formStatus:FormStatus, formData:FormData

):Promise<FormStatus>{

    const results = dataFormat.safeParse({
        userID : formData.get("userID"),
        password : formData.get("password"),
        confirmPassword : formData.get("confirmPassword"),
        adminID : formData.get("admin-id")

    })

    if(!results.success){
        return {
            errors : results.error.flatten().fieldErrors
        }
    }

    const {userID, password, adminID, confirmPassword} = results.data

    if(password !== confirmPassword){
        return {
            errors : {_form:["passwords should much."]}
        }
    }

    if(adminID !== process.env.ADMIN_ID){
        return {
            errors:{_form:["wrong admin ID"]}
        }
    }

    try{
        const verifyUserID = await db.query(
            `SELECT * FROM admin
            WHERE userid=$1
            
        `,[userID])

        const user = verifyUserID.rows

        if(user.length >= 1){
            return{
                errors:{_form:['The userID is already taken']}
            }
        }

        const hashing = await bcryptjs.hash(password,10)

        await db.query(`INSERT INTO admin(userid,password)
            VALUES($1,$2)
        `,[userID,hashing])

    }catch(e){
        console.log(e)
        throw new Error("DB connection error")
    }

    return {errors:{}}

    redirect("/admin/components/admin-auth/login")

  
} 






