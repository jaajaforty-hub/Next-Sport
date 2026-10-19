'use client'

import Main from "@/app/admin/components/main/home/page"
import { IsLoginGames} from "@/app/admin/header/Navbar"
import Link from "next/link"
import {Input, TextField, FieldError} from "@heroui/react"
import { useActionState } from "react"
import HandleUpdate from "@/app/admin/actions/handle-update"



interface dayName {
    name :string
}

const InitialStatus = {
    success : false,
    message : ""
}

export default function UpdateGamesOfDay( {name} : dayName){

    const [status,register,isPending] = useActionState(HandleUpdate.bind(null,name) ,InitialStatus)
        
    return( <main className="w-screen h-screen flex flex-col"> 
      <IsLoginGames />

       <div className="flex justify-center w-sreen h-screen bg-gradient-to-r from-gray-900 to-gray-700 ">

        <div className="flex flex-col gap-20 w-[80%] ml-40 mt-25 ">
        
          <div className="flex justify-center font-bold text-orange-300 text-[50px] mt-10 border-b pb-2 pl-3 w-[70%] ml-50 border-orange-300"  >Update {name} Games</div>    

            
            <form action={register} className="flex flex-col  text-orange-300 ml-15 h-auto w-[100%] ">

              <div className="flex flex-col gap-3 mb-5">

                <label htmlFor="userID" className="text-orange-300">Team One</label>

                <div className="flex flex-wrap gap-5 ">

                  <input 
                    type="file"
                    name="team_one_logo"
                    className="border rounded-lg text-orange-100 border-green-300 w-[15%] flex pl-3 h-10"
                  />

                  <Input 
                    type="text"
                    name="team_one_name"
                    placeholder="enter team"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                  />

                  <Input 
                    type="text"
                    name="team_one_country"
                    placeholder="country"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                  />
                  <Input 
                    type="text"
                    name="team_one_results"
                    placeholder="results"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                  />

                  <Input 
                    type="text"
                    name="game_one_time"
                    placeholder="time"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                  />

                  <Input 
                    type="text"
                    name="team_one_odd"
                    placeholder="odd"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                  />



                </div>
                  
              </div>

              <div  className="flex flex-col gap-3 mb-5">

                <label htmlFor="userID" className="text-orange-300">Team Two</label>

                <div className="flex flex-wrap gap-5 ">

                  <input 
                    type="file"
                    name="team_two_logo"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_two_name"
                    placeholder="enter team"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_two_country"
                    placeholder="country"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_two_results"
                    placeholder="results"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />
                  
                  <Input 
                    type="text"
                    name="game_two_time"
                    placeholder="time"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_two_odd"
                    placeholder="odd"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />



                </div>
                  
              </div>

              <div className="flex flex-col gap-3 mb-5">

                <label htmlFor="userID" className="text-orange-300">Team Three</label>

                <div className="flex flex-wrap gap-5  ">

                  <input 
                    type="file"
                    name="team_three_logo"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_three_name"
                    placeholder="enter team"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_three_country"
                    placeholder="country"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_three_resultsy"
                    placeholder="results"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />
                  
                  <Input 
                    type="text"
                    name="game_three_time"
                    placeholder="time"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_three_odd"
                    placeholder="odd"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />



                </div>

              </div>

              <div  className="flex flex-col gap-3 mb-5">

                <label htmlFor="userID" className="text-orange-300">Team Four</label>

                <div className="flex flex-wrap gap-5 ">

                  <input 
                    type="file"
                    name="team_four_logo"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_four_name"
                    placeholder="enter team"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                    
                  />

                  <Input 
                    type="text"
                    name="team_four_country"
                    placeholder="country"
                    className="border rounded-lg text-orange-100 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_four_results"
                    placeholder="results"
                    className="border rounded-lg text-orange-100 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />
                  
                  <Input 
                    type="text"
                    name="game_four_time"
                    placeholder="time"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />

                  <Input 
                    type="text"
                    name="team_four_odd"
                    placeholder="odd"
                    className="border rounded-lg text-orange-200 border-green-300 w-[15%] flex pl-3 h-10"
                    required
                  />



                </div>
                  

              </div>
                {
                  status.success? <div className="bg-green-100 border border-green-600 border-3 w-130 ml-130 flex justify-center rounded-lg text-red-900  p-3 text-[15px] mt-10 flex ">{status.message}</div> : null
                 
                }
               
              <button className="flex justify-center ml-170 mt-15 border w-30 rounded-lg bg-green-300 text-[15px]  text-red-900 font-bold p-3 hover:text-[16px]">{isPending? "Saving..." : "Save"} </button>
                

            </form>  

        </div>

          
      </div>

    </main>)
            


    
  

 
}