import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-language_tools";
import React, { useState } from 'react';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";
function Editor(props)
{
    const [ text, setText ] = useState(`print("Hello world')`);
    const [ inp, setInp ] = useState(``);
    const [ lang, setLang ] = useState(`python`);
    const [theme,setTheme] = useState('monokai')
    const [font,setFont] = useState(18)
    const [ outp, setOutput ] = useState(`PYTHON3`);
    function handleClick(e) 
    {
        console.log(text);
        console.log(lang);
        console.log(inp);
    }
    function handleChange(e)
    {
        setLang(e.target.value);
    }
    function handelTheme(e)
    {

        setTheme(e.target.value);
    }
    return (
    <div>
        <div className="option_container">
        <select onChange={handleChange} className="options">
            <option value="PYTHON3">PYTHON3</option>
            <option value="c_cpp">CPP17</option>
            <option value="java">JAVA8</option>
        </select>
        <select onChange={handelTheme} className="options">
            <option selected disabled>Theme</option>
            <option value="github">Github</option>
            <option value="monokai">Monokai</option>
            <option value="dracula">dracula</option>
            <option value="nord_dark">nord_dark</option>
            <option value="xcode">xcode</option>
        </select>
        <button className="increase_font options btn btn-primary" onClick={e=>setFont(pv=>pv+1)}>+</button>
        <button className="decrease_font options btn btn-primary" onClick={e=>setFont(pv=>pv-1)}>-</button>
        </div>
        <h5>Source Code</h5>
        <AceEditor
            placeholder="Source Code"
            mode={lang}
            theme={theme}
            name="source"
            fontSize={font}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            height="50vh"
            width="100%"
            value={text}
            setValue={text}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }} 
            onChange={value => setText(value)}
        />
        <button className="btn btn-success run" onClick={handleClick}>
            Run Code
        </button>
        <div class="row">
          <div class="col-md-6">
            <h5>Input</h5>
            <AceEditor
                placeholder="Input"
                mode="javascript"
                theme={theme}
                name="input"
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                height="30vh"
                width="100%"
                value={inp}
                setValue={inp}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }} 
                onChange={value => setInp(value)}
            />
            </div>
            <div class="col-md-6">
            <h5>Output</h5>
            <AceEditor
                placeholder="Output"
                mode="javascript"
                theme={theme}
                name="output"
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                height="30vh"
                width="100%"
                value={outp}
                setValue={outp}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }} 
            />
          </div>
        </div>
    </div>
    )
}

export default Editor;