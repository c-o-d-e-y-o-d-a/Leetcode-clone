import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('cpp'); // Default language is C++

  const handleRunCode = () => {
    // You can implement code execution logic here based on the selected language and code.
    console.log(`Running ${language} code:\n${code}`);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div>
      <div>
        <button onClick={handleRunCode}>Run</button>
        <button onClick={handleCopyCode}>Copy</button>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>
      <CodeMirror
        value={code}
        onBeforeChange={(editor, data, value) => setCode(value)}
        options={{
          mode: language === 'python' ? 'python' : 'text/x-c++src', // Set mode based on the selected language
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default CodeEditor;
