import React from 'react'
import PropTypes from 'prop-types'
import InputCore from '../core'
import Icon from '../../icons'
import styles from './_search.scss'
import TagLink from '../../tagLink'

const InputSearch = ({ label, filterAction,tagLinks, clearAction, ...props }) => {
  let inputContainerClases = [styles.inputConteiner]

  if (props.disabled) {
    inputContainerClases = inputContainerClases.concat(styles.disabled)
  }

  const prefix = <Icon role='search-icon' name='line-search' size={1}/>
  const suffix = (
    <Icon
      role='cross-icon'
      onClick={clearAction}
      className={styles.crossIcon}
      name='cross'
      size={1}
    />
  )

  return (
    <React.Fragment>
      <div className={inputContainerClases.join(' ').trim()}>
        {label && <span className={styles.inputLabel}> {label} </span>}
        <div className={styles.inputRow}>
          <InputCore {...props} prefix={prefix} suffix={suffix}/>
          <Icon
            role='filter-icon'
            onClick={filterAction}
            name='line-filter'
            size={1}
            className={styles.filterIcon}
          />
        </div>
        {
          tagLinks &&
          (
            <div className={styles.tagLinkContainer}>
              {
                tagLinks.map((item,i)=>{
                  return (
                    <div className={styles.tagLinkItem}>
                      <TagLink
                        label={item.label}
                        onClick={item.onClick}
                      />
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </React.Fragment>
  )
}

InputSearch.defaultProps = {
  filterAction: /* istanbul ignore next */ () => null,
  clearAction: /* istanbul ignore next */ () => null
}

InputSearch.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  filterAction: PropTypes.func,
  clearAction: PropTypes.func
}

export default InputSearch
