import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function Developer() {
    return (
        <Typography>
            <h2>Full Stack Web Developer</h2>
            <p class="font-italic">
                Thank you for visiting my portfolio website. Feel free to contact me in any way below:
                    </p>
            <Grid container>
                <Grid item xs={4}>
                    <ul>
                        <li><i class="icofont-rounded-right"></i> <strong>Website/reel: </strong><a
                            href="https://ezinkow.wixsite.com/elanzinkow" target="_blank">ezinkow.wixsite.com</a></li>
                        <li><i class="icofont-rounded-right"></i> <strong>Phone: </strong> (614) 561-4936</li>
                        <li><i class="icofont-rounded-right"></i> <strong>City: </strong>Chicago, IL</li>
                    </ul>
                </Grid>
                <Grid item xs={4}>
                    <ul>
                        <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> <a
                            href="mailto:ezinkow@gmail.com">ezinkow@gmail.com</a></li>
                        <li><i class="icofont-rounded-right"></i> <strong>Twitter:</strong> @ElanZinkow</li>
                        <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                    </ul>
                </Grid>

                <div class="reel">
                    <h4>View my sports production reel:</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DHQFKn39YyE" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </Grid>
        </Typography>
    )
}