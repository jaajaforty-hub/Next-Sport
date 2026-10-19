
import {NotLogin} from "@/app/admin/header/Navbar"
import Link from "next/link"



export default function AdminAndUser(){

   
    return (
        <div className="block w-sreen h-screen bg-gradient-to-r from-gray-900 to-gray-700">
            <NavBar />  
            <div className="flex justify-evenly mt-50">
                <UserPage />
                <AdminPage />
            </div>
      </div>
    )
}

export function NavBar(){

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

            

        </div>
    )
}


function UserPage(){

    return (
        <div>
            <div className="flex flex-wrap:wrap justify-center font-bold text-orange-300 text-[80px] mt-10 border-b pb-2  w-[80%] ml-10 border-orange-300"  >Click here Login as User</div> 
            <Link href="/client/components/user/login" className="flex justify-center ml-25 mt-15 border  w-full lg:w-[50%] rounded-lg bg-green-300 text-[15px]  text-gray-900 font-bold p-3 hover:text-[16px]">
            User
            </Link>
        </div>
    )
}

function AdminPage(){

    return (
        <div>
            <div className="flex flex-wrap:wrap justify-center font-bold text-orange-300 text-[80px] mt-10 border-b pb-2  w-[80%] ml-10 border-orange-300"  >Click here Login as Admin</div> 
            <Link href="/admin/components/admin-auth/login" className="flex justify-center ml-25 mt-15 border  w-full lg:w-[50%] rounded-lg bg-green-300 text-[15px]  text-gray-900 font-bold p-3 hover:text-[16px]">
                Admin
            </Link>
        </div>
    )
}