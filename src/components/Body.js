import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import About from './About';
import Developer from './Developer'
import Skills from './Skills'
import Resume from './Resume'
import Portfolio from './Portfolio'

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
    // [theme.breakpoints.up('md')]: {
    //   left
    // }
}));

export default function Body() {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <Grid item xs={8}>
                <About />
            </Grid>
            <Developer />
            <Skills />
            <Resume />
            <Portfolio />
        </main>
    )
}