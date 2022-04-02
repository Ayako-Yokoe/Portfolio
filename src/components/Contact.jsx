import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from 'emailjs-com';
//import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import {
    Container,
    Heading,
    Wrapper,
    Left,
    LeftHeading,
    Message1,
    Message2,
    SnsWrapper,
    Sns,
    Right,
    Form,
    Label,
    Input,
    Textarea,
    SubmitBtn 
} from './Contact.styles'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;


const Contact = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title:'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

  return (
      <Container id="contact" data-aos="fade-up">
          <Heading>Contact Me</Heading>
          <Wrapper>
              <Left>
                  <LeftHeading>I <Message2>keep</Message2> creating <Message1>new projects</Message1> <br/>as I <Message2>learn</Message2>, and <Message1>updating</Message1> this portfolio. <br/>Please come <Message1>check often</Message1>. <br/><Message2>Thank</Message2> you.</LeftHeading>
                  <SnsWrapper>
                      <Sns href="#" target="_blank"><LinkedInIcon />linkedin</Sns>
                      <Sns href="#" target="_blank"><GitHubIcon />github</Sns>
                  </SnsWrapper>
              </Left>
              <Right>
                  <Form onSubmit={handleOnSubmit}>
                    {/* <Form.Field */}
                    <Label htmlFor="name">Name</Label><br/>
                    <Input
                    id='form-input-control-name'
                    control={Input}
                    label='Name'
                    name='from_name'
                    required
                    />
                    {/* <Form.Field */}
                    <Label htmlFor="email">Email</Label><br/>
                    <Input
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='reply_to'
                    required
                    />
                    {/* <Form.Field */}
                    <Label htmlFor="message">Message</Label><br/>
                    <Textarea
                    id='form-textarea-control-opinion'
                    //control={TextArea}
                    label='Message'
                    name='message'
                    required
                    />
                    {/* <Button type='submit'>Send</Button> */}
                    <SubmitBtn  type='submit'>Send</SubmitBtn >
                </Form>
              </Right>
          </Wrapper>
      </Container>
  )
}

export default Contact
