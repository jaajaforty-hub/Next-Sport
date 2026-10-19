
import {db} from "@/db/db"
import {logoToString} from '../page'
import Image from "next/image"
import Link from "next/link"

async function getAllTeams(){
    const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    const teamsStore  = []

    for(let day of days){
        const data = await db.query(`SELECT * FROM ${day}`)
        const TEAMS = data.rows
        teamsStore.push(TEAMS)
    }
    const allGames = teamsStore.flat()
    return allGames;
}



export default async function Table(){
    const teams = await getAllTeams()

    return(
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 ">
            <UpcomingLogin />
            <div className="block h-auto w-full lg:w-[100%] rounded-lg bg-gray-900 text-orange-200 pt-4 mt-1 pb-4">
            <div className="flex justify-center mt-10 mb-20 mx-3  rounded-lg bg-gray-800 pb-5 pt-5 font-bold text-orange-300 text-[40px] ">All upcoming games </div>

            <div className="flex justify-between my-5 pl-2 pt-3 pr-2 pb-3 text-gray-100 rounded font-bold text-green-500 bg-gray-800 w-[99%]  ">
                <div className="ml-8">#</div>
                <div>Team</div>
                <div>Country</div>
                <div className="text-green-500">Odd</div>
                <div>Date</div>
            </div>

            <div className=" flex flex-col justify-between pl-2   h-200 overflow-y-auto">
                {
                    teams.map(team=>{
                        const logo = logoToString(team.logo)
                        return (
                            <div key={team.id} className="flex justify-between pr-5   rounded w-[99%]  mb-5 pb-2 bg-gray-800">

                                <Image 
                                    src={logo || ''}
                                    alt={team.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full h-8 w-8 ml-5 mt-5 border border-gray-100 "
                            
                                />
                                <div className="ml-3 mt-7 text-[12px] font-bold " key={team.id}>{team.team_name}</div>
                                <div className="ml-7 mt-7 text-[12px]" key={team.id}>{team.country}</div>
                                <div className="ml-9 mt-7 text-[12px] font-bold text-green-500" key={team.id}>{team.odd}</div>
                                <div className="ml-3 mt-7 text-[12px]" key={team.id}>{team.time}</div>

                            </div>
                            
                        )
                    })
                }
            </div>

        </div>
        </div>
        
    )
}


function UpcomingLogin(){

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
                    <Link href="/client/components/main" className="border rounded-lg  h-8 pl-2 pr-2 bg-green-600 text-gray-900">Home</Link> 
                    <Link href="/client/components/user/login" className="border  rounded-lg h-8 pl-2 pr-2 bg-orange-500 text-gray-900"> Logout </Link>
                </div>

                
            </div>
            

        </div>
    )
        
}