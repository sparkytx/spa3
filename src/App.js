import logo from './logo.svg';
import './App.css';
import QuizPage from "./QuizPage";
import EditPage from "./EditPage";
import PageTest from "./PageTest";
import {AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import { Link } from 'react-router'

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <p>Keith's Movie Quiz</p>
        </header>
          <Menu open={true}>
              <MenuItem
                  primaryText="Edit"
              />
              <MenuItem
                  primaryText="Play"
              />
          </Menu>


        <div className="App-body">
          <PageTest/>
        </div>
        <footer className="App-footer">
          Powered by Quizard
        </footer>
      </div>
  );
}

export default App;
