import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import PublicIcon from '@mui/icons-material/Public';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./contact.css";
import { ContactForm } from './contactForm';

export function Contact({contactRef}) {
  return (
    <div ref={contactRef} className="contactMeContainer" id="contact">
      <h2>Contact Me</h2>
      <Container className="contactWrapper">
        <Grid className="contactInfoWrapper" container direction="row" justifyItems="center" alignItems="center" md={12}>
          <Grid className="contactInfoItem" item direction="column" md={6} xs={12} gap={2}>
            <Grid item className="emailAddress" textAlign="center">
              <SendIcon />
              <h3>Email Address</h3>
              <div>annamdasuraghuram@gmail.com</div>
            </Grid>
            <Grid item className="contactNumber" textAlign="center">
              <LocalPhoneIcon/>
              <h3>Contact Number</h3>
              <div>7382481437</div>
            </Grid>
            <Grid item className="github" textAlign="center">
              <a href = "https://github.com/RaghuRamAnnamdasu" target = "_blank">
                <GitHubIcon />
                <h3>GitHub</h3>
              </a>
            </Grid>
            <Grid item className="linkedIn" textAlign="center">
              <a href = "https://www.linkedin.com/in/raghu-ram-b76802251/" target = "_blank">
                <LinkedInIcon />
                <h3>LinkedIn</h3>
              </a>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}><ContactForm /></Grid>
        </Grid>
      </Container>
    </div>
  );
}
