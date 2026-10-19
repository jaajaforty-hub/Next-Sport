import Link from "next/link"
import { IsLoginGames } from "@/app/admin/header/Navbar"
import { db } from "@/db/db"

interface Day {
    id: number
    name: string
}

async function getDays(): Promise<Day[]> {
    const day = await db.query('SELECT * FROM days')
    return day.rows   
}

export default async function UpdataWeekButtons(){

    const _days = await getDays()

    return (

        <div  className="flex flex-col w-screen h-full lg:h-[100vh] bg-gradient-to-r from-gray-900 to-gray-800 pl-5">

            <IsLoginGames />

            <div className="flex flex-wrap w-[90vw] h-auto rounded-lg bg-gray-900 ml-20 mt-50">

            <div className="font-bold text-[50px]  bg-gray-800 text-green-300 border border-gray-500 w-[71vw] pb-2 mt-10 ml-45 flex flex-wrap  justify-center rounded-lg">
                ...... Days ......
            </div>

            <div className="flex flex-wrap justify-start gap-10 ml-45 h-auto  w-full  mt-20 pb-10 ">
                

                {_days.map(day =>{
                    return(
                        <div key={day.id}>
                        <Link  href={`/admin/components/${day.name}/new`} className="hover:bg-orange-300 hover:text-gray-900 hover:font-bold flex justify-center  w-80 h-30 pt-10  rounded-lg bg-gray-800 text-orange-400 border  opacity-70 border-gray-500 font-bold flex justify-center">{day.name}</Link>
                        </div>
                        
                    )
                })}
            </div>
          

        </div>
        </div>

       
    )

}
