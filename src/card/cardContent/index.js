import React from 'react'
import styles from '../cardContent/_cardcontent.scss'
import Bullets from '../../bullets'
import PropTypes from 'prop-types'

const CardContent = ({
  title,
  content,
  typeList,
  bullets,
  children,
  ...props
}) => {
  const cardContentStyle = [styles.cardContentContainer]

  const getContent = () => {
    if (content) {
      return <p>{content}</p>
    } else if (bullets) {
      return <Bullets typeList={typeList} items={bullets} />
    }
  }

  return (
    <div
      {...props}
      className={cardContentStyle.concat(props.className).join(' ')}
    >
      {title && (
        <div className={styles.cardHeaderTitle}>
          <h6>{title}</h6>
        </div>
      )}
      {getContent()}
      {children}
    </div>
  )
}

CardContent.propTypes = {
  title: PropTypes.string,
  typeList: PropTypes.string,
  content: PropTypes.string,
  bullets: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
      type: PropTypes.string,
      disabled: PropTypes.bool,
      prefixType: PropTypes.string,
      contentType: PropTypes.string
    })
  ),
  children: PropTypes.node
}

export default CardContent
