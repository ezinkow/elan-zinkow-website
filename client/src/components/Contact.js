import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Button from '@material-ui/core/Button';

init("user_GlV2ZA2MbEengYCtHqHAo");

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
        },
        border: 'thin solid gray',
        borderRadius: '10px',
        marginRight: '100px',
        // position: 'relative'
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '300px',
        marginLeft: '200px',
        marginBottom: '50px'
    },
}));

export default function Contact() {

    const classes = useStyles();

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)

        emailjs.sendForm('service_5mbk4jg', 'template_p4mnxwr', e.target, 'user_GlV2ZA2MbEengYCtHqHAo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
            <form className={classes.form} noValidate autoComplete="off" onSubmit={sendEmail}>
                <Typography>
                    <h1>Contact Me:</h1>
                </Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="Name" name='name' /><br />
                <TextField id="outlined-basic" label="Email" variant="outlined" placeholder="Email" name='email'/><br />
                <TextField id="outlined-basic" label="Message" variant="outlined" multiline rows={4} fullWidth placeholder="Message" name='message'/><br />
                <Button type="submit" className={classes.button} variant="contained" color="primary">SUBMIT</Button>
            </form>
    );
}