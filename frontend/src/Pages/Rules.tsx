import Textbounce from "../animations/Textbounce"
import { rulesimage } from "../utils"

function Rules() {
    const bracket = ")  "
    return (
    <div className="h-screen w-screen">
        <div className="w-full flex flex-col items-center">
            <div className="text-[#006494] font-Raleway font-bold text-6xl my-9">
                <Textbounce Text="Rules"/>
            </div>
            <div className="my-9">
                <img src={rulesimage} alt="Rules" className="h-[380px]" />
            </div>
            <div className="w-[80%]">
                <h1 className="font-Raleway text-lg text-slate-600 hover:text-black font-medium">1{bracket}THERE ARE THREE ROUNDS IN A GAME.</h1>
                <h1 className="font-Raleway text-lg text-slate-600 hover:text-black font-medium">2{bracket}YOU WILL GET 5 SECONDS TO MAKE YOUR CHOICE.</h1>
                <h1 className="font-Raleway text-lg text-slate-600 hover:text-black font-medium">3{bracket}PERSON WITH HIGHEST SCORES WIN.</h1>
                <h1 className="font-Raleway text-lg text-slate-600 hover:text-black font-medium">4{bracket}IF THERE IS A DRAW NOBODY WINS.</h1>
                <h1 className="font-Raleway text-lg text-slate-600 hover:text-black font-medium">5{bracket}MAKE SURE YOUR HANDS ARE INSIDE FRAME OR ELSE OPPONENT WILL GET THE POINT.</h1>
                <h1 className="font-Raleway text-lg text-slate-600 hover:text-black font-medium">6{bracket}THERE MAY BE SOME EASTER EGGS IN THE GAME SO ENJOY .</h1>
            </div>
        </div>
    </div>
  )
}

export default Rules