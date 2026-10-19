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
                    <Link href="/client/components/main/upcoming" className="border rounded-lg  h-8 pl-2 pr-2 bg-green-600 text-gray-900">upcoming </Link> 
                    <Link href="/client/components/user/login" className="border  rounded-lg h-8 pl-2 pr-2 bg-orange-500 text-gray-900"> logout </Link>
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
                <Link href="/client/components/user/register" className="border mr-4  rounded-lg h-8 pl-2 pr-2 bg-green-300 text-gray-900"> Register </Link>
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
                    <Link href="/admin/components/main/week-links" className="border rounded-lg  h-8 pl-2 pr-2 bg-orange-300 font-bold text-gray-900"> UPDATE TABLES  </Link> 
               
                </div>

                <Popover>
                    <PopoverTrigger>
                            <Avatar >
                                <Avatar.Image src="/myimage.png" className="h-10 w-10 rounded-full border-2 mt-1 border-green-500 "  /> 
                            </Avatar>
                    </PopoverTrigger>
                    <PopoverContent>
                            <div className="bg-gray-600  text-orange-300 border-1 border-white p-3 rounded-lg flex flex-col gap-2 shadow-lg shadow-gray-500" >
                                <Link href="/profile" className="hover:border-1 hover:p-1 hover:rounded-lg hover:bg-gray-800 hover:text-white"> view profile </Link>
                                <h2 className="ml-5"> or </h2>
                                <Link href="" className="hover:border-1 hover:p-1 hover:pl-5 hover:rounded-lg hover:bg-gray-800 hover:text-white ml-2"> sigout </Link>
                            </div>
                            
                    </PopoverContent>
            </Popover>
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
                    <Link href="/" className="border rounded-lg  h-8 pl-2 pr-2 bg-orange-300 text-gray-900"> All games </Link> 
               
                </div>

                <Popover>
                    <PopoverTrigger>
                            <Avatar >
                                <Avatar.Image src="/myimage.png" className="h-10 w-10 rounded-full border-2 mt-1 border-green-500 "  /> 
                            </Avatar>
                    </PopoverTrigger>
                    <PopoverContent>
                            <div className="bg-gray-600  text-orange-300 border-1 border-white p-3 rounded-lg flex flex-col gap-2 shadow-lg shadow-gray-500" >
                                <Link href="/profile" className="hover:border-1 hover:p-1 hover:rounded-lg hover:bg-gray-800 hover:text-white"> view profile </Link>
                                <h2 className="ml-5"> or </h2>
                                <Link href="/components/user/login" className="hover:border-1 hover:p-1 hover:pl-5 hover:rounded-lg hover:bg-gray-800 hover:text-white ml-2"> sigout </Link>
                            </div>
                            
                    </PopoverContent>
            </Popover>
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

            <div className="flex mt-2  " >
                <Link href="/client/components/user/login" className="border mr-4 rounded-lg h-8 pl-2 pr-2 bg-green-300  text-gray-900"> Login </Link>
                <Link href="/admin-client-login" className="border mr-4 rounded-lg h-8 pl-2 pr-2 bg-orange-600 text-gray-900"> Home </Link>
            </div>
        

        </div>
    )
}
  


    




    

