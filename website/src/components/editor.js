import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-language_tools";
import React, { useState } from 'react';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-text";
import axios from 'axios';
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
    const [ lang, setLang ] = useState(`PYTHON3`);
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
    return (
    <div>
        <select onChange={handleChange}>
            <option selected disabled>Language</option>
            <option value="PYTHON3">PYTHON3</option>
            <option value="CPP17">CPP17</option>
            <option value="JAVA8">JAVA8</option>
        </select>
        <h5>Source Code</h5>
        <AceEditor
            placeholder="Source Code"
            mode="javascript"
            theme="monokai"
            name="source"
            fontSize={14}
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
        <div class="row">
          <div class="col-md-6">
            <h5>Input</h5>
            <AceEditor
                placeholder="Input"
                mode="javascript"
                theme="monokai"
                name="input"
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                height="25vh"
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
            <h5>Input</h5>
            <AceEditor
                placeholder="Output"
                mode="javascript"
                theme="monokai"
                name="output"
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                height="25vh"
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
        <button onClick={handleClick}>
            Run Code
        </button>
    </div>
    )
}

export default Editor;