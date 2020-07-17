import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons';
import Tooltip from '../tooltip';
import styles from './_breadcrumb.scss';

const chidrenWidthCalculator = ({ childNodes }) => [...childNodes].reduce((acc, current) => acc + current.clientWidth, 0);

const getElementToBeSubtracted = (arr, containerWidth, width) => {
  const totalWidth = chidrenWidthCalculator({ childNodes: arr }) + width;
  if (totalWidth > containerWidth && arr.length > 1) {
    let aux = [...arr];
    const newArr = aux.splice(1, 1);
    const nextValue = getElementToBeSubtracted(aux, containerWidth, width);
    return nextValue ? newArr.concat(nextValue) : newArr;
  } else if (totalWidth > containerWidth && arr.length === 1) {
    return arr;
  }

  return null;
}

const childrenCutter = (html) => {
  const [last, ...aux] = [...html.childNodes].reverse();
  if (!last) return [];

  const lastChildWidth = Math.ceil(last.clientWidth);
  const inTooltip = getElementToBeSubtracted(aux.reverse(), html.clientWidth, lastChildWidth + 50);
  return Array.isArray(inTooltip) ? inTooltip.map(el => el.textContent) : [];
}

const BreadCrumbElement = ({ paths, updateScreen, lastWidth, ...props }) => {
  const [list, setList] = useState(paths);
  const ref = React.useRef(null);
  let timeOut;

  const hideOverflow = () => {
    const { current } = ref;
    const tooltipList = [];

    updateScreen(current.clientWidth);

    const inTooltip = childrenCutter({ clientWidth: current.clientWidth, childNodes: [...current.childNodes] });

    const listCutted = paths.reduce((acc, path) => {
      if (inTooltip.indexOf(path.name) !== -1) {
        tooltipList.push(path);
        return acc;
      } else {
        return acc.concat(path)
      }
    }, []);


    if (inTooltip.length === (list.length - 1)) {
      listCutted.splice(0, 0, {
        type: 'tooltip',
        values: tooltipList
      });
      setList(listCutted);
    } else if (listCutted.length > 1 && inTooltip.length > 0) {
      listCutted.splice(1, 0, {
        type: 'tooltip',
        values: tooltipList
      });
      setList(listCutted);
    }
  }

  const resize = () => {
    const { current } = ref;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      if (current.clientWidth != lastWidth) {
        updateScreen(current.clientWidth);
      }
    }, 100);
  }

  useEffect(() => {
    let isCancelled = false
    window.addEventListener('resize', resize);

    hideOverflow();
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

  return <div ref={ref} className={[styles.breadCrumbContainer, props.className].join(' ').trim()} {...props}>

    {
      list.map((path, i) => path.type != 'tooltip' ? <div role="path-shown" className={styles.breadCrumbItem} key={`path-${path.name.trim()}`}>

        {
          (i + 1) < list.length ? <React.Fragment>
            <a href={path.route}>
              {path.name}
            </a>
            <Icon name="arrow-right" size={1} />
          </React.Fragment> : path.name
        }

      </div> :
        <div key="dots" className={[styles.breadCrumbItem, styles.dotsContainer].join(' ')}>
          <Tooltip interactive={true} placement="bottom" eventListener="mouseClick" content={<ToolTipContent items={path.values} />}>
            ...
          </Tooltip>
          <Icon name="arrow-right" size={1} />
        </div>)
    }
  </div >
}


const ToolTipContent = ({ items }) => {
  return <ul>
    {
      items.map((item, i) => (
        <li role="path-in-tooltip" key={`tooltip-${item.path}-${i}`} >
          <a href={item.route}>
            <Icon name="arrow-right" size={1} />
            {item.name}
          </a>
        </li>
      ))
    }
  </ul>
}


const BreadCrumb = (props) => {
  const [contentWidth, setContentWidth] = useState(0);
  return (
    <BreadCrumbElement key={contentWidth} lastWidth={contentWidth} updateScreen={setContentWidth} {...props} />
  )
}

BreadCrumb.defaultProps = {
  paths: []
};

BreadCrumb.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      route: PropTypes.string
    }).isRequired
  )
}

export default BreadCrumb;
