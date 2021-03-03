import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import WebIcon from '@material-ui/icons/Web';
import EmailIcon from '@material-ui/icons/Email';
import Zinkow_headshot from '../images/Zinkow_headshot.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
    background: '#3F3F3F',
    color: 'white'
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }

}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Elan Zinkow
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Avatar alt="Zinkow" src={Zinkow_headshot} className={classes.large, ''} style={{ margin: '15px auto', display: 'block', width: '150px', height: '150px', border: '8px solid #2c2f3f' }} />
            <h1 style={{ textAlign: 'center' }}>Elan Zinkow</h1>
            <div style={{ textAlign: 'center' }}>
              <a href="https://twitter.com/ElanZinkow" target="_blank" className='iconLink' style={{ size: '500px' }}><TwitterIcon /></a>
              <a href="https://www.facebook.com/elan.zinkow" target="_blank" className='iconLink'><FacebookIcon /></a>
              <a href="https://github.com/ezinkow" target="_blank" className='iconLink'><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/elan-zinkow-b590ba5" target="_blank" className='iconLink'><LinkedInIcon /></a>
            </div>
          </List>
          <List style={{ display: 'block' }}>
            <Link to="/">
              <div style={{ display: 'flex' }}>
                <HomeIcon fontSize='large' style={{color:'white', margin: '10px 20px 10px 50px'}}/><h2 style={{ color: 'white', textDecoration: 'none'}}>Home</h2>
              </div>
            </Link>
            <Link to="/about">
              <div style={{ display: 'flex' }}>
                <PersonIcon fontSize='large' style={{color:'white', margin: '10px 20px 10px 50px'}}/><h2 style={{ color: 'white', textDecoration: 'none'}}>About</h2>
              </div>
            </Link>
            <Link to="/resume">
              <div style={{ display: 'flex' }}>
                <InsertDriveFileIcon fontSize='large' style={{color:'white', margin: '10px 20px 10px 50px'}}/><h2 style={{ color: 'white', textDecoration: 'none'}}>Resumé</h2>
              </div>
            </Link>
            <Link to="/portfolio">
              <div style={{ display: 'flex' }}>
                <WebIcon fontSize='large' style={{color:'white', margin: '10px 20px 10px 50px'}}/><h2 style={{ color: 'white', textDecoration: 'none'}}>Portfolio</h2>
              </div>
            </Link>
            <Link to="/contact">
              <div style={{ display: 'flex' }}>
                <EmailIcon fontSize='large' style={{color:'white', margin: '10px 20px 10px 50px'}}/><h2 style={{ color: 'white', textDecoration: 'none'}}>Contact</h2>
              </div>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}