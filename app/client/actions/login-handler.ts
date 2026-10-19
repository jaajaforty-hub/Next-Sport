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

        const getUser  = await db.query(
        `SELECT * FROM users
        WHERE userid=$1
         `,
         [userID]
        )

        const getPassword = getUser.rows

        if(getPassword.length < 1){
            return{
                errors:{_form:["user not found"]}
            }
        }

        const harshPassword = getPassword[0].password

        const decode = await bcryptjs.compare(password,harshPassword)
        if(!decode){
            return{
                errors:{_form:["wrong password"]}
            }
        }

        if(getUser.rows.length < 0){
            return {
                errors:{_form:["Invalid user"]}
            }
        }

    }catch(e){
        throw new Error('DB connection fail')
    }

    
    redirect("/client/components/main")
    
}

