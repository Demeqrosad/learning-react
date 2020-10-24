import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = (state) => ({
  infoContent: state.infoContent,
});

export default connect(mapStateToProps)(Info);