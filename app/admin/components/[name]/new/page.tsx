import db  from "@/db/db"
import UpdateGamesOfDay from "../updata-team-form/page"


interface Days_props {
    params : Promise<{
        name : string
    }>
}

export default async function AddTeams({params} : Days_props) {
    const {name} = await params 
    return (
        < UpdateGamesOfDay name={name} />
    )
    
}