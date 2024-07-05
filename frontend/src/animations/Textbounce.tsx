import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Textbounce({Text}:{Text:string}){
    
    useGSAP(()=>{
        gsap.fromTo("#bounce",
            {z:40,y:50,opacity:0},
            {z:10,y:0,opacity:1,}
        )
    },[])

    return (
        <span id="bounce">
            {Text}
        </span>
    )
}

export default Textbounce