import React from 'react';
import styles from './_bullet.scss';

const BulletElement = ({ count,text,typeList , icon, variant, active,number,index , ...props }) => {

  let numberList = count + 1;
  const defaultPrefix = (typeList === 'order') ? numberList: (typeList === 'unorder') ?
  <div className={styles.boxCircle}> </div>: '';
  console.log(props);
  console.log(typeList);

  console.log(defaultPrefix);



  return <React.Fragment>
    <div id={numberList} className={styles.bulletElement}>
      {defaultPrefix}
      <p>hellou 1</p>
    </div>
  </React.Fragment>
}

BulletElement.defaultProps = {
  level: 1,
  open: false,
  sublevel: []
}


export default BulletElement;
