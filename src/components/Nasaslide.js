import React from "react";
import { Header, Segment, Image, Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const LoaderExampleInline = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>

      <Image src='https://sharecloth.com/assets/vendor/semantic/examples/assets/images/wireframe/short-paragraph.png' />
      <Image src='https://sharecloth.com/assets/vendor/semantic/examples/assets/images/wireframe/short-paragraph.png' />
      <Image src='https://sharecloth.com/assets/vendor/semantic/examples/assets/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>)


const ColoredSegment = styled(Segment)`
  background-color: #f6f6f6 !important;
`;
const BorderedImage = styled(Image)`
  border-radius: 10px !important;
`;


const Nasaslide = props => {

  if (!props.hdurl) return <LoaderExampleInline></LoaderExampleInline>;
  else
  return (
   
    <div className="slide" key={props.service_version}>
       <ColoredSegment>
        <Header as='h1' textAlign='center'>{props.title} </Header>
        <BorderedImage src={props.hdurl} alt="Our planet" size='big' centered />
        <Header as='h3' textAlign='center'> Date of picture: {props.date}</Header>
        <Box component="p" m={1}>{props.explanation}</Box>
      </ColoredSegment>
    </div>
  );
};

export default Nasaslide;