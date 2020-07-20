import React from 'react'
import PropTypes from 'prop-types'
import Card from '../'
import Icons from '../../icons'
import styles from './_cardSearch.scss'

const CardSearch = ({ title, routes, description, ...props }) => {
  return (
    <Card
      {...props}
      className={[styles.cardSearch, props.className].join(' ').trim()}
    >
      <div className={styles.headerSection}>
        <h5>{title}</h5>
        {routes && (
          <ul className={styles.routes}>
            {routes.map((route, i) => (
              <li key={`route-${i}`} role='route'>
                {route} <Icons name='arrow-right' size={1} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <p>{description}</p>
    </Card>
  )
}

CardSearch.propTypes = {
  title: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default CardSearch
