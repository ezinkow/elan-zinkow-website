import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary"></Typography>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '500px',
        // flexGrow: 1,
        // marginBottom: '500px'
    },
});

export default function LinearWithValueLabel() {
    const classes = useStyles();

    return (
        <Grid container id="skills">
            <Grid item xs={12}>
                <h1>Skills and Abilities</h1>
            </Grid >
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center" style={{marginBottom:'-50px'}}>
                            <p style={{ marginRight: '4px' }}>HTML:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='80' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">80%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>CSS:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='90' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">90%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>JavaScript:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='75' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">75%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>React:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='65' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">65%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>jQuery:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='80' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">80%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>Express:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='75' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">75%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>Sequel:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='80' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">80%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>MongoDB:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='65' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">65%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>Node:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='75' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">75%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>Adobe Premier:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='90' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">90%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='skills'>
                        <Box display="flex" alignItems="center">
                            <p style={{ marginRight: '4px' }}>Stratus/Edius:</p>
                            <Box width="90%" mr={1}>
                                <LinearProgress variant="determinate" value='100' />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">100%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <div id="resume"></div>
        </Grid >
    );
}