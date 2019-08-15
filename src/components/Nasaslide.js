import React from "react";
import { Header, Segment, Image, Dimmer, Loader } from 'semantic-ui-react'


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


const Nasaslide = props => {

  if (!props.hdurl) return <LoaderExampleInline></LoaderExampleInline>;
  else
  return (
   
    <div className="slide" key={props.service_version}>
       <Segment>
        <Header as='h1' textAlign='center'>{props.title} </Header>
        <Image src={props.hdurl} alt="Our planet" size='big' centered />
        <Header as='h3' textAlign='center'> Date of picture: {props.date}</Header>
        <p>{props.explanation}</p>
      </Segment>
    </div>
  );
};

export default Nasaslide;