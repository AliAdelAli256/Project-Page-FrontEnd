import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Terminal from "react-console-emulator";
import ReactTooltip from "react-tooltip";
import { Drawer } from '@material-ui/core';
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Collapse } from 'reactstrap';
import "./projectPage.css";


const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'absolute',
    left: '42.8px',
    top: '62px',
    overflow: 'hidden',
    height: '101%',
  },
}));

const projectPage = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const collapseTerminal = () => {
    setIsOpen(!isOpen)
    if (isOpen === true) {
      document.getElementById('collapse').innerHTML = "<li class='fas fa-angle-up'></li>";
      document.getElementById('collapse').style.right = '25px';
      document.getElementById('collapse').style.top = '42rem';
    } else if (isOpen === false) {
      document.getElementById('collapse').innerHTML = "<li class='fas fa-angle-down'></li>";
      document.getElementById('collapse').style.right = '25px';
      document.getElementById('collapse').style.top = '26.5rem';
    }
  };

  const handleDrawer = () => {
    setOpen(!open);
    if (open === false) {
      document.getElementById('ide-mr').style.marginLeft = '180px';
      document.getElementById('ide-mr').style.width = '82vw';
      document.getElementById('terminal-mr').style.marginLeft = '180px';
      document.getElementById('terminal-mr').style.width = '82vw';
    }
    else if (open === true) {
      document.getElementById('ide-mr').style.marginLeft = '10px';
      document.getElementById('ide-mr').style.width = '94vw';
      document.getElementById('terminal-mr').style.marginLeft = '10px';
      document.getElementById('terminal-mr').style.width = '94vw';
    }
  };

  const options = {
    language: "javascript",
    automaticLayout: true,
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
    <div className="d-flex flex-row">

      <div class="btn-group-vertical justify-content-start bg-secondary" role="group" aria-label="Basic example" style={{ padding: '2px' , height: '100vh'}}>

        <button onClick={handleDrawer} data-tip data-for="fileSystem" type="button" class="btn btn-secondary mb-1" style={{ maxHeight: '40px', width: '40px', borderRadius: '5px' /*, boxShadow : '0px 0px 3px 3px gray'*/ }}><i class="fas fa-copy"></i></button>
        <ReactTooltip id="fileSystem" place="top" effect="solid" backgroundColor="white" textColor="black">File System</ReactTooltip>

        <button data-tip data-for="communication" type="button" class="btn btn-secondary mb-1 " data-toggle="tooltip" data-placement="right" title="Communication" style={{ maxHeight: '40px', width: '40px', borderRadius: '5px' }}><i class="fas fa-comments"></i></button>
        <ReactTooltip id="communication" place="right" effect="solid" backgroundColor="white" textColor="black">Communication</ReactTooltip>

        <button data-tip data-for="liveShare" type="button" class="btn btn-secondary mb-1 " data-toggle="tooltip" data-placement="right" title="Live Share" style={{ maxHeight: '40px', width: '40px', borderRadius: '5px' }}><i class="fas fa-share-square"></i></button>
        <ReactTooltip id="liveShare" place="right" effect="solid" backgroundColor="white" textColor="black">Live Share</ReactTooltip>

        <button data-tip data-for="review" type="button" class="btn btn-secondary mb-1 " data-toggle="tooltip" data-placement="right" title="Review" style={{ maxHeight: '40px', width: '40px', borderRadius: '5px' }}><i class="fas fa-pen"></i></button>
        <ReactTooltip id="review" place="right" effect="solid" backgroundColor="white" textColor="black">Review</ReactTooltip>

      </div>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        backgroundColor="rgb(108, 117, 125);"
        style={{ zIndex: '1' }}
      >
        <div className="sidebar">
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label="public">
              <TreeItem nodeId="2" label="index.html" style={{ color: '#000' }} />
              <TreeItem nodeId="3" label="manifest.json" />
              <TreeItem nodeId="4" label="logo.png" />
            </TreeItem>
            <TreeItem nodeId="5" label="src">
              <TreeItem nodeId="10" label="index.js" />
              <TreeItem nodeId="6" label="component">
                <TreeItem nodeId="7" label="tree">
                  <TreeItem nodeId="8" label="tree-view.js" />
                  <TreeItem nodeId="9" label="tree-item.js" />
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeView>
        </div>
      </Drawer>


      <div className="d-flex flex-column">
        <button id="collapse" onClick={collapseTerminal} type="button" class="btn btn-secondary btn-sm collapse-button" style={{transition: 'ease-in-out 0.3s'}}><i class="fas fa-angle-down"></i></button>
      </div>


      <div className="d-flex flex-column">
        <div type="text" id="ide-mr" className="editor">
          <Editor
            theme="vs-dark"
            options={options}
          />
        </div>

        <Collapse isOpen={isOpen}>
          <div id="terminal-mr">
            <Terminal
              errorText={errorText}
              ignoreCommandCase
              noEchoBack
              promptLabel={">"}
              className="main-terminal"
              contentClassName="main-terminal-content"
              promptLabelClassName="text-white"
              inputClassName="text-white"
            />
          </div>
        </Collapse>

      </div>

    </div>
  );
}

export default projectPage;