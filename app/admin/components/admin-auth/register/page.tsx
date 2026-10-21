"use client";

import {Input, TextField, FieldError} from "@heroui/react"
import {NotRegister} from "../../../header/Navbar"
import { useActionState } from "react"
import HandleRegister from "@/app/admin/actions/register-handler"



export default function Register(){
 
 const [status,register,isPading] = useActionState(HandleRegister ,{errors:{}})

      
    return <> 

        <NotRegister />
        <div className="flex justify-center w-sreen h-auto bg-gradient-to-r from-gray-900 to-gray-700 ">

            <div className="flex flex-col gap-15 w-[40%] ml-40 mt-25 ">
            
                <div className="flex justify-center font-bold text-orange-300 text-[80px] mt-10 border-b pb-2 pl-3 w-[70%] ml-30 border-orange-300"  >Admin Register</div>    
    
                <form action={register} className="flex flex-col text-orange-300 ml-15 h-auto w-[100%]">

                    <TextField isInvalid={!!status.errors?.userID} className="flex flex-col gap-3 mb-5">

                        <label htmlFor="userID" className="text-orange-300">Email or ID</label>
                        <Input 
                            type="input"
                            name="userID"
                            className="border rounded-lg text-green-300 w-full lg:w-[80%] h-10"
                        />
                        <FieldError className="bg-red-300 border-2 text-gray-900 pl-3 border-red-600 p-1 rounded-md w-full lg:w-[80%] ">
                            {status.errors?.userID?.join(",")}
                        </FieldError>
                    </TextField>

                    <TextField isInvalid={!!status.errors?.password} className="flex flex-col gap-3">
                        <label htmlFor="userID" className="text-orange-300" >Password</label>
                        <Input 
                            type="password"
                            name="password"
                            className="border rounded-lg text-green-300 w-full lg:w-[80%] h-10"
                        />
                        <FieldError className="bg-red-300 border-2 text-gray-900 pl-3 border-red-600 p-1 rounded-md w-full lg:w-[80%] ">
                            {status.errors?.password?.join(",")}
                        </FieldError>

                    </TextField>

                    <TextField isInvalid={!!status.errors?.confirmPassword} className="flex flex-col gap-3">
                        <label htmlFor="userID" className="text-orange-300 mt-5" >Confirm Password</label>
                        <Input 
                            type="password"
                            name="confirmPassword"
                            className="border rounded-lg text-green-300 w-full lg:w-[80%] h-10"
                        />
                        <FieldError className="bg-red-300 border-2 text-gray-900 pl-3 border-red-600 p-1 rounded-md w-full lg:w-[80%] ">
                            {status.errors?.confirmPassword?.join(",")}
                        </FieldError>

                    </TextField>

                    <TextField isInvalid={!!status.errors?.adminID} className="flex flex-col gap-3 ">
                        <label htmlFor="userID" className="text-orange-300 mt-5" >Admim Key</label>
                        <Input 
                            type="password"
                            name="admin-id"
                            className="border rounded-lg text-green-300 w-full lg:w-[80%] h-10"
                        />
                        <FieldError className="bg-red-300 border-2 text-gray-900 pl-3 border-red-600 p-1 rounded-md w-full lg:w-[80%] ">
                            {status.errors?.adminID?.join(",")}
                        </FieldError>

                    </TextField>

                    <TextField isInvalid={!!status.errors?._form}>
                        <br/>
                        <FieldError className="bg-red-300 border-2 text-gray-900 pl-3 pr-[55%] border-red-600 p-1 rounded-md w-full lg:w-[80%] ">
                                {status.errors?._form?.join(",")}
                        </FieldError>

                    </TextField>
                    
                    <button className="flex justify-center ml-25 mt-10 mb-10 border  w-full lg:w-[50%] rounded-lg bg-green-300 text-[15px]  text-gray-900 font-bold p-3 hover:text-[16px]">{isPading? "Login.." : "Login"} </button>
                    

                </form>  
            </div>

            
        </div>

    </>
        
    
      
    
}
