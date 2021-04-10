import {useState,useEffect} from 'react'
import { useSocket } from '../socket/socketprovider';

const Quize=()=>{
    const socket = useSocket()
    const [question,setQuestion] = useState('')
    const [option1,setOptionOne] = useState('')
    const [option2,setOptionTwo] = useState('')
    const [option3,setOptionThree] = useState('')
    const [option4,setOptionFour] = useState('')

    const submitQuize=({room_id})=>{
        if (socket == null) return
        console.log(socket);
        socket.emit('createQuize', { question,option1,option2,option3,option4,room_id});
    }

    useEffect(() => {
        if (socket == null) return
        socket.on('createQuize', (Rquestion,Roption1,Roption2,Roption3,Roption4) => {
            console.log("Quiuze.js----Inside socket.on");
            console.log(Rquestion,Roption1,Roption2,Roption3,Roption4);
        })
        console.log("Outside socket.on");

        return () => socket.off('createQuize');
    }, [socket])


    return(
        <div>
            <input type="text" onChange={e=>setQuestion(e.target.value)}/>

            <input type="text" onChange={e=>setOptionOne(e.target.value)}/>

            <input type="text" onChange={e=>setOptionTwo(e.target.value)}/>

            <input type="text" onChange={e=>setOptionThree(e.target.value)}/>

            <input type="text" onChange={e=>setOptionFour(e.target.value)}/>

            <button onClick={submitQuize}>SUBMIT</button>

        </div>
    );
}

export default Quize;