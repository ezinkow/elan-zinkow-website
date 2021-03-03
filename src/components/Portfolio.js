import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import puppies from '../images/puppies.jpg'
import codingquiz from '../images/coding-quiz.jpg'
import dayscheduler from '../images/day-scheduler.jpg'
import hamburger from '../images/hamburger.jpg'
import holidayatthemovies from '../images/holidayatthemovies.jpg'
import notetaker from '../images/note-taker.jpg'
import weatherdashboard from '../images/weather-dashboard.png'
import basketballDb from '../images/basketballDb.jpg'
import employeetracker from '../images/employee-tracker.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Portfolio() {
    const classes = useStyles();
    return (
        <div class="container">
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <h1>Portfolio</h1>
                    <h3>Find my projects below</h3>
                </Grid>
                <Grid item xs={6}>
                    <img src={basketballDb} alt="Basketball Stats Database" style={{ width: '100%', height: '70%' }} />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <h2 class="thumbName">Basketball Stats Database</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://github.com/ezinkow/bball-stats-db" target="_blank" rel="noreferrer" title="GitHub Repo" style={{ color: 'black' }}><h2><GitHubIcon fontSize="large" /></h2></a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://ezinkow.github.io/bball-stats-db/" title="Basketball Stats Database" style={{ textDecoration: 'none', color: 'black' }}><h2><LinkIcon fontSize="large" /></h2><i
                                class="bx bx-link"></i></a>
                        </Grid >
                    </div >
                </Grid >
                <Grid item xs={6}>
                    <img src={puppies} alt="Basket of Puppies" style={{ width: '100%', height: '70%' }} />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <h2 class="thumbName">Basket of Puppies</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://github.com/ezinkow/basket-of-puppies" target="_blank" rel="noreferrer" title="GitHub Repo" style={{ color: 'black' }}><h2><GitHubIcon fontSize="large" /></h2></a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://basket-of-puppies.herokuapp.com/" title="Basket of Puppies" style={{ textDecoration: 'none', color: 'black' }}><h2><LinkIcon fontSize="large" /></h2><i
                                class="bx bx-link"></i></a>
                        </Grid >
                    </div >
                </Grid >
                <Grid item xs={6}>
                    <img src={holidayatthemovies} style={{ width: '100%', height: '70%' }} alt="Holiday at the Movies" />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <h2>Holiday At the Movies</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://github.com/ezinkow/Holiday-at-the-Movies" target="_blank" rel="noreferrer" title="GitHub Repo"><GitHubIcon fontSize="large" /></a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://ezinkow.github.io/Holiday-at-the-Movies/" title="Holiday At The Movies"><LinkIcon fontSize="large" /></a>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={employeetracker} style={{ width: '100%', height: '70%' }} alt="Employee Management System" />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={5}>
                            <h2>Employee Management System</h2>
                        </Grid>
                        <Grid item xs={3}>
                            <a href="https://github.com/ezinkow/Employee-Tracker" target="_blank" rel="noreferrer" title="GitHub Repo"><GitHubIcon fontSize='large'/></a>
                        </Grid>
                        <Grid item xs={3}>
                            <a href="https://youtu.be/jOBB4E-YE8Q" title="Employee Management System"><LinkIcon fontSize="large" /></a>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={hamburger} style={{ width: '100%', height: '70%' }} alt="Burger Logger" />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <h2>Burger Logger</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://github.com/ezinkow/Burger-Logger" target="_blank" rel="noreferrer" title="GitHub Repo"><GitHubIcon fontSize='large'/></a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://shrouded-wildwood-93576.herokuapp.com/" title="Burger Logger"><LinkIcon fontSize="large" /></a>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={notetaker} style={{ width: '100%', height: '70%' }} alt="Note Taker" />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <h2>Note Taker</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://github.com/ezinkow/Note-Taker" target="_blank" rel="noreferrer" title="GitHub Repo"><GitHubIcon fontSize='large'/></a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://note-taker-ez.herokuapp.com/notes" title="Note Taker"><LinkIcon fontSize="large" /></a>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={weatherdashboard} style={{ width: '100%', height: '70%' }} alt="Weather Dashboard" />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <h2>Weather Dashboard</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://github.com/ezinkow/weather-dashboard" target="_blank" rel="noreferrer" title="GitHub Repo"><GitHubIcon fontSize='large'/></a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://ezinkow.github.io/weather-dashboard/" title="Weather Dashboard"><LinkIcon fontSize="large" /></a>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={codingquiz} style={{ width: '100%', height: '70%' }} alt="Coding Quiz" />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <h2>Coding Quiz</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://github.com/ezinkow/coding-quiz" target="_blank" rel="noreferrer" title="GitHub Repo"><GitHubIcon fontSize='large'/></a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://ezinkow.github.io/coding-quiz/" title="More Details"><LinkIcon fontSize="large" /></a>
                        </Grid>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <img src={dayscheduler} style={{ width: '100%', height: '70%' }} alt="Day Planner" />
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <h2>Day Planner</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://github.com/ezinkow/calendar-planner" target="_blank" rel="noreferrer" title="GitHub Repo"><GitHubIcon fontSize='large'/></a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://ezinkow.github.io/calendar-planner/" title="Day Planner"><LinkIcon fontSize="large" /></a>
                        </Grid>
                    </div>
                </Grid>
            </Grid >
        </div >
    )
}