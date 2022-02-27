import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import responsive from '../responsive'

import { Element } from 'react-scroll'


const Container = styled.div`
    height: auto;

    @media only screen and ${responsive.device.s}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`
const Heading = styled.h2`
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    padding-top: 2rem;
    text-align: center;

    @media only screen and ${responsive.device.s}{
        padding-top: 2rem;
        font-size: 1.3rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.2rem;
        margin: 0 0 3rem 0;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.8rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 2.0rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 2.6rem;
        margin-bottom: 1.3rem;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    @media only screen and ${responsive.device.s}{
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
const Left = styled.div`

    @media only screen and ${responsive.device.s}{
        flex: 1;
        margin: 1rem 2rem 1rem 3rem;
    }
`
const LeftHeading = styled.h3`
    font-size: 1.0rem;
    letter-spacing: 1.5px;
    margin: 1.0rem 1.0rem 1.5rem 2.5rem;
    text-align: left;

    @media only screen and ${responsive.device.s}{
        padding-top: 2rem;
        font-size: 1.3rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.2rem;
        margin: 0 0 3rem 0;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.3rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.9rem;
    }
`
const Message1 = styled.span`
    color: var(--base-color);
`
const Message2 = styled.span`
    color: var(--base-color-lighter-2);
`
const Sns = styled.a`
    font-size: 1.2rem;
    margin-right: 1.0rem;
    color: var(--base-color-lighter-1);

    &:hover {
        cursor: pointer;
        color: var(--base-color-lighter-2);
    }
`
const Right = styled.div`
    margin: 2rem 1rem;

    @media only screen and ${responsive.device.s}{
        flex: 1;
        margin: 1rem 3rem 1rem 2rem;
    }
`
const Form = styled.form`
    width: 100%;
`
const Label = styled.label`
    letter-spacing: 1.5px;

    @media only screen and ${responsive.device.xxl}{
        font-size: 1.6rem;
    }
`
const Input = styled.input`
    padding: 0.5rem;
    margin: 0.6rem 0;
    width: 100%;
    font-size: 1.1rem;
    font-family: 'Nunito', sans-serif;
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow:  3px 3px 15px rgba(0, 0, 0, 0.1) inset;
    background-color: rgba(156, 100, 255, 0.4);

    @media only screen and ${responsive.device.l}{
        font-size: 1.5rem;
    }
`
const Textarea = styled.textarea`
    padding: 0.5rem;
    margin: 0.6rem 0;
    width: 100%;
    font-size: 1.1rem;
    font-family: 'Nunito', sans-serif;
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow:  3px 3px 15px rgba(0, 0, 0, 0.1) inset;
    background-color: rgba(156, 100, 255, 0.4);

    @media only screen and ${responsive.device.l}{
        font-size: 1.5rem;
    }
`
const SubmitBtn = styled.button`
    font-family: 'Nunito', sans-serif;
    padding: 0.5rem 0.7rem;
    margin-top: 0.3rem;
    border: none;
    border-radius: 5px;
    background-color: var(--base-color-lighter-1);
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;

    @media only screen and ${responsive.device.xl}{
        font-size: 1.0rem;
        padding: 0.6rem 0.8rem;
        margin-top: 0.5rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.3rem;
        padding: 0.8rem 1.0rem;
        margin-top: 0.5rem;
    }

    &:hover {
        cursor: pointer;
    }
`

const Contact = () => {
  return (
      <Container id="contact">
          <Heading><span><Element name='contact'>Contact Me</Element></span></Heading>
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
