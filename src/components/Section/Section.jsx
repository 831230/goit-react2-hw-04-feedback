import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <section>
      {children[0]}
      <h2>{title}</h2>
      {children[1]}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
