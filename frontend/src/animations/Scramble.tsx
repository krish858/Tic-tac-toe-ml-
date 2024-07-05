import { useScramble } from "use-scramble";

const Scramble = ({toscramble,color}:{toscramble:string,color:string}) => {

    const colour = `${color}`
    const { ref } = useScramble({ 
        text: `${toscramble}`,
        speed: 0.2
    });

    return(<span ref={ref} style={{color:colour}}/>)
}

export default Scramble;