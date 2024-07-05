import Scramble from "../animations/Scramble"
import { useNavigate } from "react-router-dom"
import Textbounce from "../animations/Textbounce"
import { FcRules } from "react-icons/fc";
import { image } from "../utils";

function Home() {
    const navigate = useNavigate()
  return (
    <main className="w-screen h-screen bg-[#22181c]">
        <div className="w-full flex flex-col justify-center items-center">
            <div>
                <h1 className="pt-12 font-Raleway font-bold text-[#F3F3F4] text-5xl"> <Textbounce Text="ROCK"/>-<Scramble toscramble="PAPER" color="#DE369D"/>-<Textbounce Text="SCISSOR"/></h1>
            </div>
            <div className="w-full flex justify-end px-4 pb-12 font-Raleway text-[#F3F3F4] font-semibold ">
                <div className="flex items-center text-2xl cursor-pointer" onClick={()=>{navigate("/rules")}}>
                  <span><FcRules/></span> Rules
                </div>
            </div>
            <div>
                <img src={image} className="h-[250px] w-[250px] my-8"/>
            </div>
            <div>
                <button type="button" className="bg-[#006494] border-2 border-slate-400 text-3xl text-white font-Raleway font-semibold py-2 px-6 my-8 rounded-full" onClick={()=>{navigate("/newgame")}}>Play</button>
            </div>
        </div>
    </main>
  )
}

export default Home