
import Image from "next/image"
import { IsLogin } from "../../header/Navbar"
import {db} from "@/db/db"


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


async function getAllGames(i:number): Promise<Team[]>{
    const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    const teamsStore  = []

    for(let day of days){
        const data = await db.query<Team>(`SELECT * FROM ${day}`)
        const TEAMS = data.rows
        teamsStore.push(TEAMS)
    }
    return teamsStore[i]
}

async function todayGames() : Promise<Team[]>{
    const today = new Date().getDay()
    const todayGames = await getAllGames(today)
    return todayGames;
}

async function tomorrowGames(){
    const today = new Date().getDay()
    const tomorrow = ((today + 1) % 7)
    const tomorrowGames = await getAllGames(tomorrow)
    return tomorrowGames;
}

async function getAllTeams() : Promise<Team[]>{
    const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    const teamsStore  = []

    for(let day of days){
        const data = await db.query<Team>(`SELECT * FROM ${day}`)
        const TEAMS = data.rows
        teamsStore.push(TEAMS)
    }
    const allGames = teamsStore.flat()
    return allGames;
}



export function logoToString(data: Uint8Array | null, mime = "image/png"): string | null {
  if (!data || data.length === 0) return null;
  return `data:${mime};base64,${Buffer.from(data).toString("base64")}`;
}

export async function Table(){
     const teams = await getAllTeams()
    return(
            <div className="h-auto w-full lg:w-[30%] rounded-lg bg-gray-900 text-orange-200  pb-4">
                <div className="flex justify-center mt-5 mb-20 mx-3 rounded-lg bg-gray-800 pb-5 pt-5 font-bold text-orange-300 text-[40px] ">All upcoming games </div>

                <div className="flex justify-between my-5 ml-3 p-3 text-gray-100 rounded font-bold text-green-500 bg-gray-800 w-[97%]">
                    <div>#</div>
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
                                        alt={team.team_name?? "Team logo"}
                                        width={100}
                                        height={100}
                                        className="rounded-full h-8 w-8 ml-5 mt-5 "
                                
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
    )
}

function Adverts(){

        
    return(
        <div className="flex flex-col  w-[100%] h-auto pb-5 bg-gray-900  rounded-lg">              
            <div  className="font-bold text-[60px] text-orange-300 t mx-10 ">Hello...</div>
            <div  className="flex flex-wrap font-bold text-[30px] font-light text-orange-100 mx-10"> Here! Get All Soccer Wins... </div>  
        </div>
    )
}

async function Today(){
    const teamsAndGames = await todayGames()
        
    const days = ["Sunday", "Monday", "Tuesday","Wednesday","Thurday","Friday","Saturday"] 

    return (
        <div className="flex flex-col flex-wrap bg-gray-900 shadow-md border  pb-15 w-[100%] h-auto rounded-lg">

            <div className="flex justify-between">
                <div className="mx-20 my-10 border w-80 bg-gray-800 p-3 rounded-lg">
                    <div className="text-[25px] text-orange-100 ">Games of the day</div>
                    <div className="text-[12px] text-orange-100 mt-1 ">
                        {days[new Date().getDay() ]} : {new Date().getMonth() + 1 } /
                        {new Date().getUTCDate() -1 } / {new Date().getFullYear()}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center text-orange-200 text-[40px] mt-10 mr-12">
                    {days[new Date().getDay() ]} : {new Date().getUTCDate() } 
                </div>
            </div>  

            <div className="flex flex-wrap justify-evenly p-10 bg-gray-800 rounded gap-10 ml-20 h-auto w-[90%]  min-h-[35%]" >
            {
                teamsAndGames.map(team=>{
                    const logo = logoToString(team.logo)
                    return <div className="flex  justify-around bg-gray-900 w-[20%] my-5 shadow-sm shadow-gray-500 text-orange-100 p-5 rounded-lg " key={team.id} >

                        <div className="flex flex-col ">
                            <Image 
                                src={logo || ''}
                                alt={team.team_name?? "Team logo"}
                                width={100}
                                height={100}
                                className="rounded-full h-15 w-15 flex justify-center mt-5 "
                            
                            />
                            <div className="font-bold text-orange-400 mt-2">{team.team_name}</div>
                        </div>

                        <div className="flex flex-col justify-between gap-1  text-gray-100">
                            
                            <div className="font-light text-sm ">{team.country}</div>
                            <div className="rounded-full w-10 h-10 flex justify-center pt-2 bg-green-200 font-bold text-gray-900">{team.odd}</div>                                   
                            <div className="font-light text-sm ">{team.time}</div>
                            
                        </div>
                        

                        
                        
                    </div>
                })
            }
            </div>

        </div>
    )
}

async function Tomorrow(){
        const teamsAndGames = await tomorrowGames()

        const days = ["Sunday", "Monday", "Tuesday","Wednesday","Thurday","Friday","Saturday"] 

        return (
             <div className="flex flex-col flex-wrap bg-gray-900 shadow-md border  pb-15 w-[100%] h-auto rounded-lg">

            <div className="flex justify-between">
                <div className="mx-20 my-10 border w-80 bg-gray-800 p-3 rounded-lg">
                    <div className="text-[25px] text-orange-100 ">Games of the day</div>
                    <div className="text-[12px] text-orange-100 mt-1 ">
                        {days[new Date().getDay() + 1]} : {new Date().getMonth() + 1 } /
                        {new Date().getUTCDate() + 1 } / {new Date().getFullYear()}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center text-orange-200 text-[40px] mt-10 mr-12">
                    {days[new Date().getDay() + 1 ]} : {new Date().getUTCDate() } 
                </div>
            </div>  

               <div className="flex flex-wrap justify-evenly p-10 bg-gray-800 rounded gap-10 ml-20 h-auto w-[90%]  min-h-[35%]" >
                {
                    teamsAndGames.map(team=>{
                         const logo = logoToString(team.logo)
                    return <div className="flex  justify-around bg-gray-900 w-[20%] my-5 shadow-sm shadow-gray-500 text-orange-100 p-5 rounded-lg " key={team.id} >

                        <div className="flex flex-col ">
                            <Image 
                                src={logo || ''}
                                alt={team.team_name?? "Team logo"}
                                width={100}
                                height={100}
                                className="rounded-full h-15 w-15 flex justify-center mt-5 "
                            
                            />
                            <div className="font-bold text-orange-400 mt-2">{team.team_name}</div>
                        </div>

                        <div className="flex flex-col justify-between gap-1  text-gray-100">
                            
                            <div className="font-light text-sm ">{team.country}</div>
                            <div className="rounded-full w-10 h-10 flex justify-center pt-2 bg-green-200 font-bold text-gray-900">{team.odd}</div>                                   
                            <div className="font-light text-sm ">{team.time}</div>
                            
                        </div>
                        

                        
                        
                    </div>
                    })
                }
                </div>

            </div>
        )
}


export default async function Main(){

    return(
        <div className="flex flex-col ">
           <IsLogin />
            <div className="flex justify-center   bg-cover opacity-200 bg-gradient-to-r from-gray-200 to-green-50">
             

                <div className="flex flex-wrap-reverse gap-[2%]  bg-gradient-to-r from-gray-800 to-gray-700 s:mt-10  min-h-screen h-auto w-[100%] pt-10 pl-10  "> 

                    <Table />

                    <div className="flex flex-col justify-start gap-10  h-auto w-full lg:w-[65%]  ">
                        <Adverts />
                        <Today />
                        <Tomorrow />
                    </div>
                </div>
            </div>
        
        </div>
        
        
    )
}
