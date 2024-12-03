import players from "../players"
import Player from "./Player"

 const Playerlist=()=>{
    console.log(players)
    return(
        <>
        {players.map((el)=> <Player {...el}/>)}
        </>
    )
}
export default Playerlist