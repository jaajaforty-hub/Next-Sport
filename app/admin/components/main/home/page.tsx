'use server'

import { IsLoginDays } from "@/app/admin/header/Navbar"
import Link from "next/link"
import Image from "next/image"
import {db}  from "@/db/db"



interface Day {
    name :string
}

interface Team {
    country: string
    dayId :number
    id:number
    logo:  Uint8Array | null
    team_name: string  | null
    results: string | null
    odd:  number | null
    time : string | null
    
}
interface DayAndGames {
    dayName: string
    teams:Team[]
}


function logoToString(data: Uint8Array | null, mime = "image/png"): string | null {
  if (!data || data.length === 0) return null;
  return `data:${mime};base64,${Buffer.from(data).toString("base64")}`;
}


async function getTeams(  i : number) : Promise<Team[]> {

    const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    const arr : any = []

    for(let day of days){
        const t = await db.query(`
        SELECT * FROM ${day} 
      `) 

      const teamsDay = t.rows
      arr.push(teamsDay)
    }

   
    return arr[i];
}


export async function DayAndGames({i, day}:{i: number, day: string}){

    const gameData = await getTeams(i)

    return(
        <div className="text-white flex flex-col bg-gray-900 rounded-lg  w-[20%] ml-10 mt-10 p-2 rounded gap-3 text-[12px]">
            
            <div className="flex flex-wrap  bg-green-700 font-bold text-orange-200 justify-center pl-3 pb-2 pt-1 rounded sm:mt-5 w-80 ml-5">{day}</div>

            {gameData.map((team) => {

              const logo = logoToString(team.logo);

             return (
                <div
                key={team.id}
                className="flex flex-wrap items-center gap-20 mt-4 py-3 ml-6"
                >
                
                    {logo ? (
                        <Image
                        src={logo}
                        alt={team.team_name || "team logo"}
                        width={32}
                        height={32}
                        unoptimized
                        className="h-8 w-8 rounded-full object-cover"
                        />
                    ) : (
                        <div className="h-8 w-8 rounded-full bg-gray-600" />
                    )}

                    <div className="font-bold text-orange-200">{team.team_name}</div>

                    <div className="rounded  px-2 py-0.5">{team.country}</div>
                </div>
               );

             
            })}


           
            
        </div>
    )

}

export default async function Main(){

    const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

    return (

        <div>
            <IsLoginDays />
            
            <div className="flex flex-wrap w-screen h-full lg:h-[100vh] bg-gradient-to-r from-gray-900 to-gray-800 pl-5 ">

                <div className="w-[90vw] h-auto rounded-lg bg-gray-800 ml-20 mt-10">

                    <div  className="text-green-400 font-bold ml-10 mt-5 mb-5 text-[30px]">This week</div>

                    <div className="flex flex-wrap">
                        {
                            days.map((day,i) =>( <DayAndGames i={i} day={day}/>) )
                        }

                    </div>

                </div> 

            </div>
 
        </div>
    )
}