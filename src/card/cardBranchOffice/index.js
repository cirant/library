import React from 'react'
import styles from './_cardBranchOffice.scss'
import Card from '../index'
import PropTypes from 'prop-types'

const CardBranchOffice = ({ name, address,className, attentionSchedule,...props }) => {

  return (
    <Card className={[styles.card, className].join(' ').trim()} {...props}>
      <div className={styles.title}>
        <p>{name}</p>
      </div>
      <div className={styles.addressContainer}>
        <div className={styles.prefix}>
          <svg width="16px" height="16px" viewBox="0 0 24 24" >
            <title>00.Token/Icons/Line/24x24/location pin</title>
            <g id="00.Token/Icons/Line/24x24/location-pin" stroke="none"   strokeWidth="1" fill="none" fillRule="evenodd">
              <path className={styles.fillSvg} d="M23.25,18.75 C23.25,21.327 17.41875,22.5 12,22.5 C6.58125,22.5 0.75,21.327 0.75,18.75 C0.75,16.5 5.16,15.324 8.93625,15 C9.35046355,14.9647919 9.71479183,15.2720364 9.75,15.68625 C9.78520813,16.1004636 9.47796355,16.4647918 9.06375,16.5 C4.275,16.90425 2.25,18.27375 2.25,18.75 C2.25,19.425 5.56725,21 12,21 C18.43275,21 21.75,19.425 21.75,18.75 C21.75,18.27375 19.725,16.90425 14.93625,16.5 C14.7370568,16.4837932 14.55257,16.3887559 14.4237302,16.2359787 C14.2948904,16.0832014 14.2323544,15.8853209 14.25,15.68625 C14.2640105,15.4861882 14.3584352,15.3003257 14.5117479,15.1710344 C14.6650605,15.0417431 14.8641937,14.9800429 15.06375,15 C18.84,15.324 23.25,16.5 23.25,18.75 Z M11.25,10.4325 L11.25,18.75 C11.25,19.1642136 11.5857864,19.5 12,19.5 C12.4142136,19.5 12.75,19.1642136 12.75,18.75 L12.75,10.4325 C15.0566713,10.0426014 16.6798719,7.95031924 16.4842374,5.61912199 C16.2886028,3.28792474 14.3393917,1.49544016 12,1.49544016 C9.6606083,1.49544016 7.71139723,3.28792474 7.51576265,5.61912199 C7.32012807,7.95031924 8.94332868,10.0426014 11.25,10.4325 L11.25,10.4325 Z" id="color-icono" fill="#1F1E1E"></path>
            </g>
          </svg>
        </div>
        <div className={styles.address}>
          <p>{address}</p>
        </div>
      </div>
      <div className={styles.schedule}>
        {
          attentionSchedule.map((item,i)=>{
            return <p className='note'>{item.schedule}</p>
          })
        }
      </div>
    </Card>
  )
}

export default CardBranchOffice

CardBranchOffice.defaultProps = {
  name: '',
  address: '',
  className: '',
  attentionSchedule: []
}

CardBranchOffice.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  className: PropTypes.string,
  attentionSchedule: PropTypes.arrayOf(
  PropTypes.shape({
    schedule: PropTypes.string,
  })
)
}
