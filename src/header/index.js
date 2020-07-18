import React from 'react'
import PropTypes from 'prop-types'
import Styles from './_header.scss'
import Icon from '../icons'

import { Grid, HeaderProfileItem } from '../'

const Header = ({
  children,
  logo,
  logOut,
  userData,
  section,
  mobile,
  ...props
}) => {
  const headerStyleContainer = [Styles.header].concat(props.className).join(' ')

  return (
    <React.Fragment>
      <Grid
        row
        className={[headerStyleContainer, Styles.headerDesktop]
          .join(' ')
          .trim()}
      >
        <Grid col xl={8} className={Styles.headerOptionsContainer}>
          <Grid row className={Styles.headerLeftArea}>
            {logo && (
              <Grid col={3} xl={4} className={Styles.headerLogoContainer}>
                {logo}
              </Grid>
            )}
            {children}
          </Grid>
        </Grid>
        <Grid col={3} lg={4} xl={3} className={Styles.profileItemContainer}>
          <HeaderProfileItem {...userData} />
        </Grid>
        {logOut && (
          <Grid col={1} className={Styles.flex}>
            {logOut}
          </Grid>
        )}
      </Grid>

      <Grid row className={Styles.headerMobile}>
        {mobile.burgerClick && (
          <Icon
            name='menu-burger'
            onClick={mobile.burgerClick}
            size={3}
            className={[Styles.burgerIcon, Styles.option].join(' ').trim()}
          />
        )}

        {mobile.section ? (
          <Grid col className={Styles.sectionContent}>
            {mobile.onClickBack && (
              <Icon
                name='arrow-left'
                onClick={mobile.onClickBack}
                className={Styles.backButton}
                size={3}
              />
            )}
            {mobile.section}
          </Grid>
        ) : (
          <Grid col>{logo}</Grid>
        )}

        <div className={[Styles.option].join(' ').trim()}>
          {mobile.leftElement}
        </div>
      </Grid>
    </React.Fragment>
  )
}

Header.defaultProps = {
  mobile: {},
  userData: {
    name: 'coopeuch username',
    date: new Date()
  }
}

Header.propTypes = {
  logo: PropTypes.element,
  logOut: PropTypes.element,
  userData: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.date
  })
}

export default Header
