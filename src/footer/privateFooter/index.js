import React from 'react';
import styles from './_privateFooter.scss';
import { Grid } from '../../';

const PrivateFooter = ({logo, items,  ...props}) => {

    const privateFooterStyles = [styles.privateFooter].concat(props.className).join(' ');

    return ( 
        <React.Fragment>
            <Grid row className={[privateFooterStyles].join(' ').trim()}>
                <Grid col xl={8}>
                    <Grid row className={styles.headerLeftArea}>
                        {
                        logo && <Grid col={3} xl={4} className={styles.headerLogoContainer}>
                            {logo}
                        </Grid>
                        }
                        <div className={styles.items}>
                           {items && items.map((section) => (
                               <a href={section.link} title={section.text}>{section.text}</a>
                           ))}
                        </div>
                    </Grid>
                    <Grid lg={4} xl={3} className={styles.profileItemContainer}>
                            <span>Hola</span>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
     );
}
 
export default PrivateFooter;