import Image from "next/image"
import Link from "next/link"

import {

    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent

} from "@heroui/react"


export function IsLogin(){

    return (
        <div className="flex justify-between bg-gray-900 text-gray-200 h-15 pl-5 p-2 pr-5"> 

            
            <div className="font-bold mt-3">
                <span  className="text-green-300">
                    FORTY 
                </span>
                <span className="text-orange-300" >
                    WINZ
                </span> 
            </div>
                
            <div className="flex gap-10">

                <div className="flex mt-2 gap-10" >
                    <Link href="performance" className="border rounded-lg  h-8 pl-2 pr-2 bg-orange-300 text-gray-900"> Performance </Link> 
                    <Link href="upcoming" className="border  rounded-lg h-8 pl-2 pr-2 bg-orange-300 text-gray-900"> upcoming </Link>
                </div>

            </div>
            

        </div>
    )
        
}

export function NotLogin(){

    return (
        <div className="flex justify-between bg-gray-900 text-gray-200 h-12 pl-5 pr-5"> 

            <div className="font-bold mt-3">
                <span  className="text-green-300">
                    FORTY 
                </span>
                <span className="text-orange-300" >
                    WINZ
                </span> 
            </div>  

            <div className="flex mt-2 " >
                <Link href="/admin/components/admin-auth/register" className="border mr-4 rounded-lg h-8 pl-2 pr-2 bg-green-300 text-gray-900"> Register </Link>
                 <Link href="/admin-client-login" className="border mr-4 rounded-lg h-8 pl-2 pr-2 bg-orange-600 text-gray-900"> Home </Link>
            </div>
        

        </div>
    )
}



export function IsLoginDays(){

    return (
        <div className="flex justify-between bg-gray-900 text-gray-200 h-15 pl-5 p-2 pr-5"> 

            
            <div className="font-bold mt-3">
                <span  className="text-green-300">
                    FORTY 
                </span>
                <span className="text-orange-300" >
                    WINZ
                </span> 
            </div>
                
            <div className="flex gap-10">

                <div className="flex mt-2 gap-10" >
                    <Link href="/admin/components/main/week-links" className="border rounded-lg  h-8 pl-2 pr-2 bg-green-300 font-bold text-gray-900"> UPDATE TABLES  </Link>
                     <Link href="/admin/components/admin-auth/login" className="border rounded-lg  h-8 pl-2 pr-2 bg-orange-600 text-gray-900"> Signout </Link> 
               
                </div>

            </div>
            

        </div>
    )
        
}

export function IsLoginGames(){

    return (
        <div className="flex justify-between bg-gray-900 text-gray-200 h-15 pl-5 p-2 pr-5"> 

            
            <div className="font-bold mt-3">
                <span  className="text-green-300">
                    FORTY 
                </span>
                <span className="text-orange-300" >
                    WINZ
                </span> 
            </div>
                
            <div className="flex gap-10">

                <div className="flex mt-2 gap-10 font-bold" >
                    <Link href="/admin/components/main/home" className="border rounded-lg  h-8 pl-2 pr-2 bg-green-300 text-gray-900"> All games </Link>
                     <Link href="/admin/components/admin-auth/login" className="border rounded-lg  h-8 pl-2 pr-2 bg-orange-600 text-gray-900"> Signout </Link>  
               
                </div>
            </div>
            

        </div>
    )
        
}

export function NotRegister(){

    return (
        <div className="flex justify-between bg-gray-900 text-gray-200 h-12 pl-5 pr-5"> 

            <div className="font-bold mt-3">
                <span  className="text-green-300">
                    FORTY 
                </span>
                <span className="text-orange-300" >
                    WINZ
                </span> 
            </div>  

            <div className="flex mt-2 " >
                <Link href="/admin/components/admin-auth/login" className="border mr-4 rounded-lg h-8 pl-2 pr-2 bg-green-300 text-gray-900"> Login </Link>
                 <Link href="/admin-client-login" className="border mr-4 rounded-lg h-8 pl-2 pr-2 bg-orange-600 text-gray-900"> Home </Link>
            </div>
        

        </div>
    )
}
  


    




    

