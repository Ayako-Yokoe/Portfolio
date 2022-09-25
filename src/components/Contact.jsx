import React from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import { useInView } from "react-intersection-observer"
import {
  Container,
  Heading,
  Title,
  Wrapper,
  Left,
  LeftHeading,
  Message1,
  Message2,
  SnsWrapper,
  Sns,
  LinkedInTitle,
  GitHubTitle,
  Right,
  Form,
  Label,
  Input,
  Textarea,
  SubmitBtn,
  SubmitAnimation,
  SubmitText,
  SubmitButton,
} from "./Contact.styles"

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

const Contact = () => {
  const { ref, inView } = useInView()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text)
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        })
      },
      (error) => {
        console.log(error.text)
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: error.text,
        })
      }
    )
    e.target.reset()
  }

  return (
    <Container id="contact" data-aos="fade-up">
      <Heading ref={ref}>
        <Title animation={inView ? "animation" : "none"} delay="1">
          C
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="2">
          o
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="3">
          n
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="4">
          t
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="5">
          a
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="6">
          c
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="7">
          t
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="8">
          &nbsp;
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="9">
          M
        </Title>
        <Title animation={inView ? "animation" : "none"} delay="10">
          e
        </Title>
      </Heading>

      <Wrapper>
        <Left>
          <LeftHeading>
            {/* I <Message2>keep</Message2> creating{" "}
            <Message1>new projects</Message1> <br />
            as I <Message2>learn</Message2>, and <Message1>updating</Message1>{" "}
            this portfolio. <br />
            Please come <Message1>check often</Message1>. <br />
            <Message2>Thank</Message2> you. */}
            I keep creating <Message2>new projects</Message2> <br />
            as I learn, and updating this portfolio. <br />
            <Message1>Please come check often</Message1>. <br />
            Thank you.
          </LeftHeading>
          <SnsWrapper>
            <Sns href="https://www.linkedin.com/in/ayakoyokoe/" target="_blank">
              <LinkedInIcon
                sx={{
                  fontSize: { lg: "2.5rem", xl: "3rem" },
                }}
              />
              <LinkedInTitle>linkedin</LinkedInTitle>
            </Sns>
            <Sns
              href="https://github.com/Ayako-Yokoe?tab=repositories"
              target="_blank"
            >
              <GitHubIcon
                sx={{
                  fontSize: { lg: "2.5rem", xl: "3rem" },
                }}
              />
              <GitHubTitle>github</GitHubTitle>
            </Sns>
          </SnsWrapper>
        </Left>
        <Right>
          <Form onSubmit={handleOnSubmit}>
            <Label htmlFor="name">
              Name
              <Input
                id="form-input-control-name"
                control={Input}
                label="Name"
                name="from_name"
                required
              />
            </Label>
            <Label htmlFor="email">
              Email
              <Input
                id="form-input-control-email"
                control={Input}
                label="Email"
                name="reply_to"
                required
              />
            </Label>
            <Label htmlFor="message">
              Message
              <Textarea label="Message" name="message" required />
            </Label>
            <SubmitButton type="submit">Send</SubmitButton>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Contact
