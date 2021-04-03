import {useState,useRef} from 'react'
const Browser = () => {
    const [website,setWebsite]=useState('https://www.bing.com/');
    const inputRef=useRef();
    const handelChange=(e)=>{
        console.log(inputRef.current.value);
        setWebsite(inputRef.current.value)
    }
    return (
        <div className="browser_container">
           <div>
               <input ref={inputRef} type="text" placeholder="Type url here eg: https://www.bing.com/" className="browser_input" onChange={handelChange}/>
           </div>
           <iframe src={website} width="100%" height="93%"
                title="website" style={{overflow: 'hidden'}}>
            </iframe>
        </div>
    );
}

export default Browser;