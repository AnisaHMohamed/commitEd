import React, { useState, useEffect } from "react";
import './App.scss';
import {makeStyles} from '@material-ui/core/styles'
import { Container, Box, Grid,  Paper} from '@material-ui/core'
import { sizing } from '@material-ui/core'
import NavBar from './components/NavBar/NavBar.js'
import PostsList from "./components/PostsList/PostsList";
import Map from './components/Map/Map'
import PopupLogin from "./components/PopupLogin/PopupLogin"
import CreatePosts from "./components/PostsForm/PostsForm"
import PopupHistory from "./components/PopupHistory/PopupHistory"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    flex: 0,
    height: '50%',
    width:'50%',
    padding: '5%',
    textAlign: 'left',
    justifyContent: "left"
  },
}));

export default function App() {
  const [ posts, setPosts ] = useState([]);

  useEffect( () => {

    axios.get(`/api/posts`).then(res => {
      setPosts(res.data);
    });
  }, []); //make a function to get called after a new post
  const [error, setError] = useState('') //pass down to error component

  const [show, popupState] = useState(false)
  const [user, setUser] = useState(false)
  const [classicModal, setClassicModal] = useState(false);
  const [historyModal, setHistoryModal] = useState(false);
  const classes = useStyles();



  return (
// user ? <Posts posts={posts}/> : <Error/>
    <div>
      <NavBar setClassicModal={setClassicModal} popupState={popupState} setHistoryModal={setHistoryModal}/>

        <div>


        </div>

        <div>
          <PopupLogin classicModal={classicModal} setClassicModal={setClassicModal} show={show} error = {error} setError= {setError} />
        </div>

        <div>
          <PopupHistory historyModal={historyModal} setHistoryModal={setHistoryModal} show={show} />
        </div>


        <Box>

        <div>
{/*if ORGANIZATION
    <Box>
        <Container className={classes.root}>
        <Grid
          container
          direction="row"
          justify="left" //try justify
          alignItems="stretch">
          <Box className={classes.paper} >
            {" "}
            <PostsList posts={posts} />
            {" "}
          <CreatePosts user={user} setUser={setUser}/>
          </Box>
          <Box>
          <CreatePosts/>
          </Box>
        </Grid>
      </Container>
      </Box>

if USER */}
        <Box>
        <Container className={classes.root}>
          <Box>
          <Paper>
            {" "}
            <PostsList posts={posts}  />{" "}
          </Paper>          </Box>
<br/>

      <Container className={classes.root}>
        <Grid
          container
          direction="row"
          justify-content="left" //try justify
          alignItems="stretch">
          <Box className={classes.paper} >
            {" "}
            <PostsList posts={posts} />
            {" "}
          </Box>
          <Box className={classes.paper} user={user} >
            <Map />

          </Box>
        </Grid>
      </Container>
      </Box>
      </div>
    </div>
  );
};


