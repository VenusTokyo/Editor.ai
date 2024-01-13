import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";


function Editor(props) {
  let mode = props.launguage;
  return (
    <div className="txt-box">
      <CodeMirror
        value={props.value}
        options={{
          mode: mode,
          theme: "monokai",
          lineNumbers: true,
          scrollbarStyle: "null",
          lineWrapping: true,
          autoCloseTags: true,
          matchTags: true,
          autoCloseBrackets: true,
          matchBrackets: true,
        }}
        onBeforeChange={(editor, data, value) => {
          props.onChange(value);
        }}
      />
    </div>
  );
}

export default Editor;
