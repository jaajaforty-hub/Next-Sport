"use server"
import { redirect } from "next/navigation"; 
import { z } from "zod"
import {db} from "@/db/db"
import bcryptjs from "bcryptjs";


const dataFormat = z.object({
    userID : z.string().email({message:"must be an email"}),
    password : z.string().min(5,{message:"must be longer than 5"})
})

interface forStatus {
    errors? : {
       userID?: string[];
       password?: string[];
       _form? : string[] 
    },
    success?: boolean
    
}


export default async  function HandleLogin(
    formStatus:forStatus ,formData:FormData    
):Promise<forStatus>{

    const results = dataFormat.safeParse({
        userID : formData.get("userID"),
        password: formData.get("password")
    })

    if(!results.success){
        return {
            errors: results.error.flatten().fieldErrors
        }
    }

    const {userID, password} = results.data

    try{
        const user = await db.query(`
            SELECT password
            FROM admin WHERE userid=$1 
        `,[userID])

        if(user.rows.length < 1){
            return{
                errors:{_form:['User not exist']}
            }
        }

        const userPassword = user.rows[0].password
        const decrypt = await bcryptjs.compare(password, userPassword)

        if(!decrypt){
            return{
                errors:{_form:["Invalid password"]}
            }
        }

    }catch(e){
        throw new Error(`DB error: ${e}`)
    }
    
    redirect("/admin/components/main/home")
    
}

