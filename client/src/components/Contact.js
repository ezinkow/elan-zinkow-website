import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Button from '@material-ui/core/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react'

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
    const [form, setForm] = useState({ name: "", email: "", message: "" })

    const handleName = (event) => {
        setForm({ ...form, name: event.target.value })
    }
    const handleEmail = (event) => {
        setForm({ ...form, email: event.target.value })
    }
    const handleMessage = (event) => {
        setForm({ ...form, message: event.target.value })
    }


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_5mbk4jg', 'template_p4mnxwr', e.target, 'user_GlV2ZA2MbEengYCtHqHAo')
            .then((result) => {
                {
                    result.text = 'OK' ? toast.success(`Thank you for your email, I'll get back to you as soon as possible!`,
                        {
                            duration: 5000,
                            // Styling
                            position: 'center',
                            style: {
                                border: '2px solid #713200',
                                padding: '20px',
                                marginTop: '5px',
                                color: 'white',
                                backgroundColor: 'rgb(60, 179, 113, 0.7)'
                            },
                            icon: '📧',
                            role: 'status',
                            ariaLive: 'polite',
                        }) : ""
                }
            }, (error) => {
                console.log(error.text);
            });
            setForm({ name: "", email: "", message: "" })
    }

    return (
        <>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={sendEmail}>
                <Typography>
                    <h1>Contact Me:</h1>
                </Typography>
                <TextField required id="outlined-basic" label="Name" variant="outlined" placeholder="Name" name='name' value={form.name} onChange={handleName} /><br />
                <TextField required id="outlined-basic" type='email' label="Email" variant="outlined" placeholder="Email" name='email' value={form.email} onChange={handleEmail} /><br />
                <TextField required id="outlined-basic" label="Message" variant="outlined" multiline rows={4} fullWidth placeholder="Message" name='message' value={form.message} onChange={handleMessage}/><br />
                <Button type="submit" className={classes.button} variant="contained" color="primary">SUBMIT</Button>
                <Toaster />
            </form>
        </>
    );
}