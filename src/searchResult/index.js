import React from 'react';
import PropTypes from 'prop-types';
import styles from './_searchResult.scss';

const SearchResult = ({ children, target }) => {

  return (
    <div className={styles.container}>
      <h2>Resultados de busqueda para “{target}”</h2>

      {children}
    </div>
  )
}

SearchResult.defaultProps = {
  target: '',
}

SearchResult.propTypes = {
  target: PropTypes.string,
}

export default SearchResult;