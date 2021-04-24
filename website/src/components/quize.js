import {useState,useEffect} from 'react'
import { useSocket } from '../socket/socketprovider';

const Quize=(props)=>{
    const socket = useSocket()
    const [question,setQuestion] = useState('')
    const [option1,setOptionOne] = useState('')
    const [option2,setOptionTwo] = useState('')
    const [option3,setOptionThree] = useState('')
    const [option4,setOptionFour] = useState('')
    const room_id = props.room_id;
    const submitQuize=()=>{
        if (socket == null) return
        console.log(socket);
        socket.emit('createQuize', { question,option1,option2,option3,option4,room_id});
    }



    return(
        <div className="quize_container">
            <input className="input_quize" type="text" onChange={e=>setQuestion(e.target.value)}/>

            <input className="input_quize" type="text" onChange={e=>setOptionOne(e.target.value)}/>

            <input className="input_quize" type="text" onChange={e=>setOptionTwo(e.target.value)}/>

            <input className="input_quize" type="text" onChange={e=>setOptionThree(e.target.value)}/>

            <input className="input_quize" type="text" onChange={e=>setOptionFour(e.target.value)}/>

            <button className="btn btn-primary quize_submit" onClick={submitQuize}>SUBMIT</button>

        </div>
    );
}

export default Quize;