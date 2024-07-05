import { useNavigate } from "react-router-dom"

function Endscreen({status}:{status:string}) {
    const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col justify-center">
        <div className="flex w-full justify-center my-9 ">
            <h1 className="text-5xl font-Raleway text-[#de369d] font-bold">GAME OVER</h1>
        </div>
        <div className="flex w-full my-9 justify-center text-5xl font-Raleway text-[#F3F3F4] font-bold ">
            {status}
        </div>
        <div className="w-full flex justify-evenly my-9">
            <button className="text-3xl rounded-full font-Raleway font-semibold bg-[#006494] text-[#F3F3F4] py-2 px-4 border-2 border-slate-400" onClick={()=>{navigate("/")}}>HOME</button>
            <button className="text-3xl rounded-full font-Raleway font-semibold bg-[#de369d] text-[#F3F3F4] py-2 px-4 border-2 border-slate-400" onClick={()=>{window.location.reload()}}>PLAY AGAIN</button>
        </div>
    </div>
  )
}

export default Endscreen