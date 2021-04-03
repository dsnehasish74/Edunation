import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-language_tools";

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

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";

const Editor = () => {
    return (<>

        <div>
            <ul></ul>
        </div>
        <AceEditor
            placeholder="Placeholder Text"
            mode="javascript"
            theme="monokai"
            name="blah2"
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            height="60vh"
            width="100%"
            value={`function onLoad(editor) {
  console.log("i've loaded");
    }`}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }} />
    </>)
}

export default Editor;