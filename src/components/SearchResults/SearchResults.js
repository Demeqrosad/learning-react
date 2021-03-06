import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {

  
  static propTypes = 
  {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
    match: PropTypes.object,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
    cards: [],
  };
  constructor(props) {
    super(props);
    console.log('props', props);
    props.changeSearchString(props.match.params.request);
  }
  render()
  {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map(cardsData => (
          <Card key={cardsData.id} {...cardsData} />
        ))}
      </section>
    );
  }
}

export default SearchResults;