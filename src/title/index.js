import React from 'react';
import styles from './_title.scss';
import PropTypes from 'prop-types';
import Icon from "../icons";
import IconListModel from "../icons/models/icon-list.model";

const TitleSection = ({label,prefix, ...props}) => {

  const containerClass = [styles.titleContainer];

  return <div {...props} className={containerClass.join(' ')}>
    {prefix && <Icon className={styles.suffix} name={prefix} > </Icon>} <div data-testid='title-section-label'>{label}</div>
  </div>
}

export default TitleSection;

TitleSection.defaultProps = {
  label: '',
  prefix: 'line-file',
};

TitleSection.propTypes = {
  prefix: PropTypes.oneOf(IconListModel.iconList).isRequired,
  label: PropTypes.string.isRequired
};
