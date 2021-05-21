import React, { useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import Terminal from "react-console-emulator";
import ReactTooltip from "react-tooltip";
import "./projectPage.css";

function Ide(props) {

  const options = {
    language: "javascript",
    selectOnLineNumbers: true,
    renderIndentGuides: true,
    colorDecorators: true,
    cursorBlinking: "blink",
    autoClosingQuotes: "always",
    find: {
      autoFindInSelection: "always"
    },
    snippetSuggestions: "inline"
  };

  const errorText = "Please enter appropriate command, type help to know more.";

  return (
    <div className="flex">

      <div class="btn-group-vertical justify-content-start bg-secondary" role="group" aria-label="Basic example" style={{ padding: '2px' }}>

        <button data-tip data-for="fileSystem" type="button" class="btn btn-secondary mb-1 active" style={{ maxHeight: '40px', width: '40px', borderRadius: '5px' /*, boxShadow : '0px 0px 3px 3px gray'*/ }}><i class="fas fa-copy"></i></button>
        <ReactTooltip id="fileSystem" place="right" effect="solid" backgroundColor="white" textColor="black">File System</ReactTooltip>

        <button data-tip data-for="communication" type="button" class="btn btn-secondary mb-1 " data-toggle="tooltip" data-placement="right" title="Communication" style={{ maxHeight: '40px', width: '40px', borderRadius: '5px' }}><i class="fas fa-comments"></i></button>
        <ReactTooltip id="communication" place="right" effect="solid" backgroundColor="white" textColor="black">Communication</ReactTooltip>

        <button data-tip data-for="liveShare" type="button" class="btn btn-secondary mb-1 " data-toggle="tooltip" data-placement="right" title="Live Share" style={{ maxHeight: '40px', width: '40px', borderRadius: '5px' }}><i class="fas fa-share-square"></i></button>
        <ReactTooltip id="liveShare" place="right" effect="solid" backgroundColor="white" textColor="black">Live Share</ReactTooltip>

        <button data-tip data-for="review" type="button" class="btn btn-secondary mb-1 " data-toggle="tooltip" data-placement="right" title="Review" style={{ maxHeight: '40px', width: '40px', borderRadius: '5px' }}><i class="fas fa-pen"></i></button>
        <ReactTooltip id="review" place="right" effect="solid" backgroundColor="white" textColor="black">Review</ReactTooltip>

      </div>

      <div type="text" id="ide-mr" className="code">
        <Editor
          theme="vs-dark"
          options={options}
        />
      </div>

      <div id="terminal-mr">
        <Terminal
          errorText={errorText}
          ignoreCommandCase
          noEchoBack
          promptLabel={">>>"}
          className="main-terminal"
          contentClassName="main-terminal-content"
          promptLabelClassName="text-black"
          inputClassName="text-black"
        />
      </div>

    </div>
  );
}

export default Ide;