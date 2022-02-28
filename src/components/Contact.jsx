import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    Container,
    Heading,
    Wrapper,
    Left,
    LeftHeading,
    Message1,
    Message2,
    Sns,
    Right,
    Form,
    Label,
    Input,
    Textarea,
    SubmitBtn 
} from './Contact.styles'


const Contact = () => {
  return (
      <Container id="contact">
          <Heading>Contact Me</Heading>
          <Wrapper>
              <Left>
                  <LeftHeading>I <Message2>keep</Message2> creating <Message1>new projects</Message1> <br/>as I <Message2>learn</Message2>, and <Message1>updating</Message1> this portfolio. <br/>Please come <Message1>check often</Message1>. <br/><Message2>Thank</Message2> you.</LeftHeading>
                  <div>
                      <Sns href="#" target="_blank"><LinkedInIcon />linkedin</Sns>
                      <Sns href="#" target="_blank"><GitHubIcon />github</Sns>
                  </div>
              </Left>
              <Right>
                  <Form action="" class="form">
                      <div>
                          <Label for="name">Name</Label><br/>
                          <Input type="text" name="name" id="name" required />
                      </div>
                      <div>
                          <Label for="email">Email</Label><br/>
                          <Input type="email" name="email" id="email" required />
                      </div>
                      <div>
                          <Label for="message">Message</Label><br/>
                          <Textarea name="message" id="message" required></Textarea>
                      </div>
                      <SubmitBtn type="submit" class="submit-btn">Send</SubmitBtn>
                  </Form>
              </Right>
          </Wrapper>
      </Container>
  )
}

export default Contact
