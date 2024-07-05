import { useEffect, useState } from "react"
import Scramble from "../animations/Scramble"
import { IoIosTimer } from "react-icons/io";
import CameraComponent from "../components/CameraComponent";
import { bot,rock,paper,scissor } from "../utils";
import Endscreen from "./Endscreen";
import axios from "axios";

function Newgame() {
    const [round,setRound] = useState("Round 1")
    const [time,setTime] = useState(5)
    const [cscore,setCscore] = useState(0)
    const [uscore,setUscore] = useState(0)
    const [currentimg,setCurrentimg] = useState(bot)
    const [end,setEnd] = useState(false)
    const [won,setWon] = useState("Draw")
    let compchoice = ""

    async function counter() {
      return new Promise<void>(resolve => {
        let timer = 5;
        const interval = setInterval(() => {
          setTime(timer)
          timer--;
          if (timer < 0) {
            clearInterval(interval);
            resolve()
          }
        }, 1000);
      });
    }
    async function computerres(){
      const res = await axios.get("http://localhost:3000/choice")
      compchoice = res.data.msg
      if(res.data.msg == "rock"){
        setCurrentimg(rock)
      }
      if(res.data.msg == "paper"){
        setCurrentimg(paper)
      }
      if(res.data.msg == "scissor"){
        setCurrentimg(scissor)
      }
    }
    useEffect(()=>{
      async function game(){
        await counter()
        computerres()
      }
      game()
    },[])
    if(end){
      return(
        <div className="w-screen h-screen bg-[#22181c]">
          <Endscreen status={won}/>
        </div>
      )
    }
  return (
    <div className="w-screen h-screen flex-row bg-[#22181c]">
        <div className="flex justify-center items-center"><div className="text-6xl font-Raleway font-semibold pt-6"><Scramble toscramble={round} color="#DE369D"/></div></div>
        <div className="flex flex-row justify-between items-center"><div className="text-xl flex text-[#F3F3F4] px-2 pb-1"><span>Computer's score: {cscore}</span> <div className="px-4"/> <span>User's score: {uscore}</span></div><div className="flex items-center text-xl text-[#F3F3F4] font-Raleway font-semibold px-4 py-2"><div className="px-1 pt-1"><IoIosTimer/></div><div> {time}</div></div></div>
        <div className="flex flex-row">
          <div className="flex w-1/2 h-[480px] justify-center items-center">
            <div>
              <img src={currentimg} alt="" />
            </div>
          </div>
          <div className="flex w-1/2  justify-center items-center">
            <CameraComponent/>
          </div>
        </div>
    </div>
  )
}

export default Newgame