import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Resume() {
    const classes = useStyles();

    return (
        <div className={classes.root} id="resume">
            <h1>Resumé</h1>
            <h3 style={{textDecoration:'none'}}><a href="/assets/pdf/Elan Zinkow Resume.pdf" style={{ textDecoration: 'none', color:'black' }}download>Download my resumé</a></h3>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div class="section-title">
                    </div>
                    <h3>Summary</h3>
                    <div className="resume">
                        <h4>Elan Zinkow</h4>
                        <p><em>Dedicated, innovative full stack developer and video producer with vast experience in fast-paced linear and digital production. I am a loyal team player who thrives on and stays calm under pressure, enjoys a challenge and persistently works to achieve set goals. I am eager to contribute and take pride in completing excellent work. </em></p><br></br>
                        <ul>
                            <li>Chicago, IL</li>
                            <li>(614) 561-4936</li>
                            <li><a href="mailto:ezinkow@gmail.com">ezinkow@gmail.com</a></li>
                        </ul>
                    </div>

                    <h3>Education</h3>
                    <div>
                        <h4>Full Stack Development Bootcamp</h4>
                        <h5>2020-2021</h5>
                        <p><em>Northwestern University, Chicago, IL</em></p>
                        <p>Plan on completing the 6-month part-time Full Stack Development Bootcamp at Northwestern University in March 2021</p>
                    </div>
                    <div>
                        <h4>Bachelor of Arts</h4>
                        <h5>2003-2006</h5>
                        <p><em>University of Wisconsin, Madison</em></p>
                        <p>Majored in Communication Arts (TV, Radio, Film)</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <h3>Professional Experience</h3>
                        <div>
                            <h4>Big Ten Network: Associate Producer</h4>
                            <h5>2017 - March 2020</h5>
                            <p><em>Chicago, IL</em></p>
                            <ul>
                                <li>Produced Highlights, montages, inbumps, bumps, vignettes, VOs, SOTs, brolls, interviews and segments for college football, basketball, hockey and Olympic sports.</li>
                                <li>Kept up to date on all breaking news and information regarding the Big Ten conference and its teams, players and coaches.</li>
                                <li>Worked on production team for live shows: The B1G Show, BTN Live, The Final Drive, halftimes and intermissions.</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Campus Insiders: Producer</h4>
                            <h5>2013 - 2017</h5>
                            <p><em>Chicago, IL</em></p>
                            <ul>
                                <li>Produced hundreds of short-form digital videos on-demand for campusinsiders.com on various college sports topics.</li>
                                <li>Co-produced weekly live college football show that covered highlights, interviews, weekly rankings, debates and predictions.</li>
                                <li>Created and/or produced multiple franchises, including “Fiu Shots,” – a “soapbox” for our football
                                analyst Pete Fiutak to state his thoughts on college football, “Saturday in 60,” – the recapping of an
                                exciting college football game through highlights in 60 seconds, “The Feed,” – the social media and
                                lighter side of sports using Twitter, YouTube and Instagram to tell stories, “Case Of The Mondays” –
                                describing a team, coach or player who was having a rough weekend, “Shae-me On You” – a sounding-off
                                segment for host Shae Peppler to bring attention to a story that college sports fans should be paying
                                    attention to, and “The Jordan Rules” – a platform for our college basketball analyst Jordan Cornette to declare his thoughts on all things college sports.</li>
                            </ul>
                        </div>
                    </div>
                </Grid>
            </Grid >
            <div id="portfolio"></div>
        </div>
    )
}