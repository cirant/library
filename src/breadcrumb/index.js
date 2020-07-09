import React, { useEffect, useState, createRef } from 'react';
import Icon from '../icons';
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
  const lastChildWidth = Math.ceil(last.clientWidth);
  const inTooltip = getElementToBeSubtracted(aux.reverse(), html.clientWidth, lastChildWidth + 50);
  return Array.isArray(inTooltip) ? inTooltip.map(el => el.textContent) : [];
}

const BreadCrumb = ({ paths, updateScreen, lastWidth, ...props }) => {
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
        values: inTooltip
      });
      setList(listCutted);
    } else if (listCutted.length > 1) {
      listCutted.splice(1, 0, {
        type: 'tooltip',
        values: inTooltip
      });
      setList(listCutted);
    } else {
      console.log('entrndo aqui');

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
    window.addEventListener('resize', resize);

    hideOverflow();
    resize();

    return () => {
      console.log('desmontando componente')
      window.removeEventListener('resize', resize);
    }
  }, []);

  return <div ref={ref} className={styles.breadCrumbContainer}>

    {
      list.map((path, i) => path.type != 'tooltip' ? <div key={path.name.trim()} className={styles.breadCrumbItem} key={`path-${i}`}>{path.name}

        {
          (i + 1) < list.length && <Icon name="arrow-right" size={1} />
        }

      </div> : <div key="dots" className={styles.breadCrumbItem}>... <Icon name="arrow-right" size={1} /></div>)
    }
  </div>
}


const BreadCrumbContainer = (props) => {
  const [contentWidth, setContentWidth] = useState(0);
  return (
    <React.Fragment>
      <BreadCrumb key={contentWidth} lastWidth={contentWidth} updateScreen={setContentWidth} {...props} />
    </React.Fragment>
  )
}

BreadCrumb.defaultProps = {
  paths: [
    {
      name: 'hola soy una ruta 1',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 2',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 3',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 4',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 5',
      route: 'https://www.google.com'
    }
  ]
};


export default BreadCrumbContainer;