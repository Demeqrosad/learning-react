import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {getSearchString} from '../../redux/searchStringRedux.js';
import {getCardsForSearchResults} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  title: getSearchString(state),
  cards: getCardsForSearchResults(state, props.match.params.request),
});

export default connect(mapStateToProps)(SearchResults);