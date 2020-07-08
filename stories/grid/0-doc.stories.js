import React from 'react';
import { addParameters } from '@storybook/client-api';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Welcome } from '@storybook/react/demo';
import { Grid } from '../../dist';
import '../../dist/index.css';
import '../../dist/css/custom.css';


addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
  },
});

export default {
  title: 'Grid',
  component: Welcome,
  decorators: [withKnobs, withInfo],
};

const Display = ({ col, sm, md, lg, xl }) => <Grid col={col} sm={sm} md={md} className="border">
  <span className="d-sm-none"> col={col} </span>
  <span className="d-none d-sm-inline d-md-none"> sm={sm} </span>
  <span className="d-none d-md-inline d-lg-none"> md={md} </span>
  <span className="d-none d-lg-inline d-xl-none"> lg={lg} </span>
  <span className="d-none d-xl-inline"> xl={xl} </span>
</Grid>

export const ToStorybook = () => {

  const col = select('col', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12], 6);
  const sm = select('sm', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12], 4);
  const md = select('md', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12], 3);
  const lg = select('lg', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12], 2);
  const xl = select('xl', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12], 1);
  const justify = select('row-justify', [
    'justify-content-start',
    'justify-content-center',
    'justify-content-end',
    'justify-content-around',
    'justify-content-between',

  ], 'justify-content-center')

  return <div className="p-7">
    <h1 className="pb-4"> Grid </h1>
    <p> A Grid col element should be into a Grid row element</p>

    <Grid row className="elevarion-2 mb-4 px-3" >
      <Grid col className="border"> col </Grid>
      <Grid col className="border"> col </Grid>
      <Grid col className="border"> col </Grid>
      <Grid col className="border"> col </Grid>
    </Grid>

    <p className="mb-4"> A col element works with col sm md lg xl props that depends up to you. by default the column get whole width as much as possible.</p>

    <h2 className="pb-4"> Breakpoints </h2>

    <Grid row className="elevarion-2 mb-4  px-3 text-center" >
      <Grid col className="border">
        xs
        <p> &gt; 599px</p>
      </Grid>
      <Grid col className="border">
        sm
        <p> 600px &lt;= width &lt; 768px </p>
      </Grid>
      <Grid col className="border">
        md
        <p> 768px &lt;= width &lt; 960px </p>
      </Grid>
      <Grid col className="border">
        lg
        <p> 960px &lt;= width &lt; 1280px </p>
      </Grid>
      <Grid col className="border">
        xl
        <p> 1280px &lt;= </p>
      </Grid>
    </Grid>

    <Grid row className="elevarion-2 mb-4  px-3" >
      <Grid col className="border"> col </Grid>
      <Grid col className="border"> col </Grid>
      <Grid col className="border"> col </Grid>
      <Grid col className="border"> col </Grid>
      <Grid col className="border"> col </Grid>
      <Grid col className="border"> col </Grid>
    </Grid>

    <p className="mb-4">use right panel to change the columns below</p>

    <Grid row className={`elevarion-2 mb-4 px-3 ${justify}`} >
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
      <Display xl={xl} col={col} sm={sm} md={md} lg={lg} />
    </Grid>
  </div>
};

ToStorybook.story = {
  name: 'main',
};
