import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';
import ReactHtmlParser from 'react-html-parser';

const FAQ = (props) => (
  <Container>
    <Hero titleText={props.FAQContent.title} image={props.FAQContent.image} />
    <p>{ReactHtmlParser(props.FAQContent.content)}</p>
  </Container>
);

FAQ.propTypes = {
  FAQContent: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default FAQ;