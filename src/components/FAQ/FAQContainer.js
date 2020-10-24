import {connect} from 'react-redux';
import FAQ from './FAQ';

const mapStateToProps = (state) => ({
  FAQContent: state.FAQContent,
});

export default connect(mapStateToProps)(FAQ);