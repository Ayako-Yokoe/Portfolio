import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  height: auto;
  //margin: 3rem 1rem;
  /* background-color: blue; */
  background-color: rgba(255, 253, 208, 0.5);

  @media only screen and ${responsive.device.s} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Heading = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 3px;
  padding: 2rem 0 0.8rem 0;
  position: relative;

  @media only screen and ${responsive.device.m} {
    padding: 2rem 0 1rem 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 20%;
    height: 1px;
    left: 40%;
    bottom: 0;
    border-bottom: 1px solid red;

    @media only screen and ${responsive.device.m} {
      width: 100%;
      left: 0;
    }
  }

  @media only screen and ${responsive.device.s} {
    font-size: 1.3rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.8rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 2rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2.6rem;
  }
`
export const Title = styled.span`
  position: relative;
  display: inline-block;
  animation: ${(props) =>
    props.animation === "animation" ? "pop 2s" : "none 0"};
  animation-delay: ${(props) => `calc(.1s * ${props.delay})`};

  @keyframes pop {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-8px);
    }
  }
`
export const SubTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  margin: 1.5rem auto 3rem auto;
  text-align: center;
  line-height: 1.5;

  @media only screen and ${responsive.device.s} {
    font-size: 0.9rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.2rem;
    letter-spacing: 1.5px;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
  }
`
export const ProjectLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`

// =================================================

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and ${responsive.device.m} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 4rem auto;

  width: 100%;
  position: relative;

  @media only screen and ${responsive.device.m} {
    flex-direction: row;
    height: 278px;
    margin: 3rem 1.5rem 3rem 1rem;
    object-fit: contain;
  }

  @media only screen and ${responsive.device.l} {
    width: 90%;
    height: 321px;
  }

  @media only screen and ${responsive.device.xl} {
    height: 456px;
    margin-bottom: 8rem;
  }
  @media only screen and ${responsive.device.xxl} {
    height: 612px;
    margin-bottom: 9rem;
  }
`
export const ImgContainer = styled.div`
  position: absolute;
  top: -30px;
  width: 80%;
  max-width: 300px;
  z-index: 10;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.2);

  @media only screen and ${responsive.device.m} {
    flex: 1;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 348px;
  }

  @media only screen and ${responsive.device.l} {
    max-width: 402px;
  }
  @media only screen and ${responsive.device.xl} {
    max-width: 570px;
  }
  @media only screen and ${responsive.device.xxl} {
    max-width: 765px;
  }
`
export const Img = styled.img`
  flex: 1;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;

  height: auto;
  object-fit: contain;
`
export const Detail = styled.div`
  background-color: #fbdf5a;
  width: 95%;
  padding: 160px 15px 15px 15px;

  @media only screen and ${responsive.device.xs} {
    font-size: 0.9rem;
    padding: 200px 30px 25px 30px;
  }

  @media only screen and ${responsive.device.s} {
    font-size: 0.9rem;
    padding: 220px 30px 25px 30px;
  }

  @media only screen and ${responsive.device.m} {
    flex: 1;

    padding: 1rem 2.5rem;
    padding-left: 360px;
    position: relative;
    top: 35px;
    left: 20px;
    height: 278px;
  }

  @media only screen and ${responsive.device.l} {
    padding: 1rem 2.5rem;
    padding-left: 420px;
    height: 321px;
  }

  @media only screen and ${responsive.device.xl} {
    padding: 1.8rem 2.8rem;
    padding-left: 595px;
    height: 456px;
  }

  @media only screen and ${responsive.device.xxl} {
    padding: 3rem 4.5rem;
    padding-left: 800px;
    height: 612px;
    top: 45px;
    left: 30px;
  }
`
export const Desc = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  text-align: start;
  color: #404040;

  @media only screen and ${responsive.device.s} {
    font-size: 0.9rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.2rem;
    letter-spacing: 1.5px;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.6rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
  }
`
export const ProjectTitle = styled.h4`
  margin: 1rem 0;

  @media only screen and ${responsive.device.xl} {
    margin: 1.5rem 0;
  }
`
export const ProjectCaption = styled.p`
  margin: 1rem 0;
  line-height: 1.4;

  @media only screen and ${responsive.device.l} {
    line-height: 1.5;
  }
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;

  @media only screen and ${responsive.device.l} {
    margin: 1.5rem 0;
  }
  @media only screen and ${responsive.device.xxl} {
    margin: 4rem 0;
  }
`
export const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  z-index: 3;
`

export const LinkTitle = styled.p`
  margin-left: 0.3rem;
  color: #404040;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 0.9rem;

  @media only screen and ${responsive.device.m} {
    //margin-right: 2rem;
    //font-size: 1rem;
  }

  @media only screen and ${responsive.device.xl} {
    font-size: 1.6rem;
    //font-weight: lighter;
  }

  @media only screen and ${responsive.device.xxl} {
    font-size: 2.4rem;
    margin-left: 1.4rem;
  }
`
// export const WebsiteTitle = styled.p`
//   margin-left: 0.5rem;
//   color: #404040;
//   font-weight: 300;

/* @media only screen and ${responsive.device.xxl} {
    font-size: 1.8rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 1.8rem;
  } */
//`

// =========================================

// export const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   //yellow
//   background-color: rgba(255, 232, 99, 0.3);
//   //purple lighter-2
//   //background-color: rgba(156, 100, 255, 0.5);
//   //navy
//   //background-color: rgba(12, 0, 92, 0.8);
//   width: 100%;
//   height: 100%;
//   transition: all 0.5s ease-in;

//   &:hover {
//     background-color: transparent;
//   }
// `
// export const OverlayTitle = styled.p`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   font-size: 1.9rem;
//   font-weight: 700;
//   letter-spacing: 0.3rem;

//   color: #404040;
//   text-shadow: 0 10px 8px #fff;
// `

// ====================================

// export const ProjectCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 2rem auto 4rem auto;
//   border: 1px solid #f8f8f8;
//   position: relative;

//   //transition: all 0.4s ease-in;

//   @media only screen and ${responsive.device.s} {
//     flex-direction: row;
//     width: 80%;
//     max-height: 200px;
//     margin: 3rem 1rem;
//     //overflow: hidden;
//     object-fit: contain;

//     /* &:nth-child(even) {
//       flex-direction: row-reverse;
//     } */
//   }

//   @media only screen and ${responsive.device.m} {
//     max-height: 250px;
//   }
//   @media only screen and ${responsive.device.l} {
//     max-height: 300px;
//   }
//   @media only screen and ${responsive.device.xl} {
//     max-height: 350px;
//   }
//   @media only screen and ${responsive.device.xxl} {
//     max-height: 400px;
//   }
// `

// ===============================
// Original

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   @media only screen and ${responsive.device.s} {
//     flex-direction: row;
//     flex-wrap: wrap;
//   }
// `
// export const ImgContainer = styled.div`
//   @media only screen and ${responsive.device.s} {
//     flex: 1;
//     object-fit: contain;
//   }
// `
// export const Img = styled.img`
//   @media only screen and ${responsive.device.s} {
//     flex: 1;
//     display: block;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center center;
//     width: 100%;
//     //border: 20px solid #fff;

//     height: auto;
//     object-fit: contain;
//   }
// `
// export const Detail = styled.div`
//   padding: 1rem 2rem;
//   background-color: #f5f5f5;

//   @media only screen and ${responsive.device.s} {
//     flex: 1;
//   }
// `
// export const Desc = styled.div`
//   font-size: 0.8rem;
//   font-weight: 300;
//   text-align: start;
//   color: #a9a9a9;

//   @media only screen and ${responsive.device.s} {
//     font-size: 0.9rem;
//   }
//   @media only screen and ${responsive.device.m} {
//     font-size: 1rem;
//   }
//   @media only screen and ${responsive.device.l} {
//     font-size: 1.2rem;
//     letter-spacing: 1.5px;
//   }
//   @media only screen and ${responsive.device.xl} {
//     font-size: 1.4rem;
//   }
//   @media only screen and ${responsive.device.xxl} {
//     font-size: 2rem;
//   }
// `
// export const ProjectTitle = styled.h4`
//   margin: 1rem 0;
// `
// export const ProjectCaption = styled.p`
//   margin: 1rem 0;
//   line-height: 1.4rem;

//   @media only screen and ${responsive.device.l} {
//     line-height: 1.8rem;
//   }
//   @media only screen and ${responsive.device.xxl} {
//     line-height: 2rem;
//   }
// `
// export const LinkContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: end;
// `
// export const LinkButton = styled.button`
//   background-color: transparent;
//   border: none;
//   padding: 1rem;
//   z-index: 3;
// `
// export const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   //yellow
//   background-color: rgba(255, 232, 99, 0.3);
//   //purple lighter-2
//   //background-color: rgba(156, 100, 255, 0.5);
//   //navy
//   //background-color: rgba(12, 0, 92, 0.8);
//   width: 100%;
//   height: 100%;
//   transition: all 0.5s ease-in;

//   &:hover {
//     background-color: transparent;
//   }
// `
// export const OverlayTitle = styled.p`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   font-size: 1.9rem;
//   font-weight: 700;
//   letter-spacing: 0.3rem;

//   color: #404040;
//   text-shadow: 0 10px 8px #fff;
// `
// export const ProjectCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 2rem auto 4rem auto;
//   border: 1px solid #f8f8f8;
//   position: relative;
//   //transition: all 0.4s ease-in;

//   @media only screen and ${responsive.device.s} {
//     flex-direction: row;
//     width: 80%;
//     max-height: 200px;
//     margin: 3rem 1rem;
//     overflow: hidden;
//     object-fit: contain;

//     /* &:nth-child(even) {
//       flex-direction: row-reverse;
//     } */
//   }

//   @media only screen and ${responsive.device.m} {
//     max-height: 250px;
//   }
//   @media only screen and ${responsive.device.l} {
//     max-height: 300px;
//   }
//   @media only screen and ${responsive.device.xl} {
//     max-height: 350px;
//   }
//   @media only screen and ${responsive.device.xxl} {
//     max-height: 400px;
//   }

//   // Add border purple
//   /* &:hover {
//     box-shadow: 20px 20px rgb(255, 232, 99);
//     transform: scale(1.03);
//     border: 0.5px solid var(--base-color);
//   } */

//   &:hover ${Desc} {
//     color: #000;
//   }

//   &:hover ${OverlayTitle} {
//     color: transparent;
//     text-shadow: none;
//   }

//   /* &:hover {
//     border: 1px solid var(--base-color);
//   } */
// `
