import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';

const Info = (props) => (
  <Container>
    <Hero titleText={props.infoContent.title} image={props.infoContent.image} />
    <p>{props.infoContent.content}</p>
  </Container>
);

Info.propTypes = {
  infoContent: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Info;