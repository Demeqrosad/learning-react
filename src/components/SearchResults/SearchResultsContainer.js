import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {getSearchString} from '../../redux/searchStringRedux.js';
import {getCardsForSearchResults} from '../../redux/cardsRedux.js';
import {
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  title: getSearchString(state),
  cards: getCardsForSearchResults(state, props.match.params.request),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);