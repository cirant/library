import React, { useState } from 'react';

import {
  Button,
  Icon,
  Grid,
  Card,
  Checkbox,
  Logo,
  HeaderItem,
  Header,
  Input,
  InputSearch,
  InputPhone,
  InputCounter,
  Radio,
  Separator,
  Sidebar,
  Switch,
  TitleSection,
  InputChip,
  Loading,
  Bullets,
  Tooltip,
  ProgressBar,
  Message,
  InputRange,
  InputSelect,
  Stamp,
  ContentAction,
  InputSecurity,
  InputDate
} from 'library-1';
import 'library-1/dist/index.css';
import 'library-1/dist/css/custom.css';
import 'library-1/src/input/date/_date.css';

const App = () => {
  const [checked, setCheckbox] = useState(false);
  const [secondChecked, setSecondCheckbox] = useState(false);
  const [switchStatus, setSwitchStatus] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputPhoneCode, setInputPhoneCode] = useState(56);
  const [inputPhone, setInputPhone] = useState('');
  const [range, setRange] = useState(200);
  const [inputCounter, setInputCounter] = useState(1);

  const [inputSecurity, setInputSecurity] = useState('');
  const [showSecurity, setInputShowSecurity] = useState(true);

  const handleCheckbox = (value) => {
    setCheckbox(value)
  }

  const inputSuffix = <Icon onClick={() => alert('hola')} name="eye-open" />
  const inputPrefix = <Icon onClick={() => alert('hola')} size={1} name="line-user" />
  const inputPrefixText = '$';

  return <> <div className="container p-lg-4">

    <h1 className="mb-4">Fonts</h1>

    <h1> Sed ut perspiciatis unde omnis iste natus error </h1>
    <h2> Sed ut perspiciatis unde omnis iste natus error </h2>
    <h3> Sed ut perspiciatis unde omnis iste natus error </h3>
    <h4> Sed ut perspiciatis unde omnis iste natus error </h4>
    <h5> Sed ut perspiciatis unde omnis iste natus error </h5>
    <h6> Sed ut perspiciatis unde omnis iste natus error </h6>

    <h1 className="mb-4">Margins</h1>

    <div className="d-flex mb-4">
      <div className="d-inline border p-3 ml-0"> </div>
      <div className="d-inline border p-3 ml-1"> </div>
      <div className="d-inline border p-3 ml-2"> </div>
      <div className="d-inline border p-3 ml-3"> </div>
      <div className="d-inline border p-3 ml-4"> </div>
      <div className="d-inline border p-3 ml-5"> </div>
      <div className="d-inline border p-3 ml-6"> </div>
      <div className="d-inline border p-3 ml-7"> </div>
    </div>

    <h1 className="mb-4">Paddings</h1>

    <div className="d-flex flex-column mb-4">
      <div className="d-block border pl-0">text</div>
      <div className="d-block border pl-1">text</div>
      <div className="d-block border pl-2">text</div>
      <div className="d-block border pl-3">text</div>
      <div className="d-block border pl-4">text</div>
      <div className="d-block border pl-5">text</div>
      <div className="d-block border pl-6">text</div>
      <div className="d-block border pl-7">text</div>
    </div>

    <h1 className="mb-4">Icons</h1>

    <div className="d-flex align-items-baseline flex-wrap">
      <Icon className="p-4" name="flag" />
      <Icon className="p-4" name="flag" size="2" />
      <Icon className="p-4" name="flag" size="3" />
      <Icon className="p-4" name="flag" size="4" />
      <Icon className="p-4" name="flag" size="5" />
      <Icon className="p-4" name="flag" size="6" />
      <Icon className="p-4" name="flag" size="7" />
      <Icon className="p-4" name="flag" size="8" />
    </div>
    <div className="d-flex align-items-baseline flex-wrap">
      <Icon className="p-4" name="line-flag" />
      <Icon className="p-4" name="line-flag" size="2" />
      <Icon className="p-4" name="line-flag" size="3" />
      <Icon className="p-4" name="line-flag" size="4" />
      <Icon className="p-4" name="line-flag" size="5" />
      <Icon className="p-4" name="line-flag" size="6" />
      <Icon className="p-4" name="line-flag" size="7" />
      <Icon className="p-4" name="line-flag" size="8" />
    </div>

    <h1 className="mt-5">Buttons</h1>

    <Grid row className="align-items-center text-center mb-4 flex-wrap d-none d-sm-flex">
      <Grid col={12} md={1} lg={1} xl={4} />
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> normal </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> icon left </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> icon right </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> disabled </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Primary </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button color="primary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="primary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="primary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="primary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Primary outline </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button variant="outline" color="primary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="primary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="primary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="primary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Primary text </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button variant="text" color="primary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="primary" prefix="arrow-left" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="primary" suffix="arrow-right" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="primary" suffix="arrow-right" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Secondary </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button color="secondary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="secondary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="secondary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="secondary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Secondary outline </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button variant="outline" color="secondary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="secondary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="secondary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="secondary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Secondary text </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button variant="text" color="secondary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="secondary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="secondary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="secondary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <h1 className="mb-4">Card</h1>

    <div className="d-flex flex-wrap mb-4">
      <Card> hola mundo </Card>
      <Card selected> selected </Card>
      <Card onClick={() => alert('clicked')} > click me </Card>
      <Card border > hola mundo </Card>
    </div>

    <h1 className="mb-4">Checkbox</h1>

    <div className="d-flex">
      <div className="d-flex p-4 flex-column align-items-center">
        normal
        <Checkbox checked={checked} onChange={handleCheckbox} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        variant
        <Checkbox onChange={(value) => setSecondCheckbox(value)} variant={checked} checked={secondChecked} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        disabled
        <Checkbox variant disabled={checked} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        disabled full
        <Checkbox variant={checked} checked={true} disabled />
      </div>
    </div>

    <h1 className="mb-4">Radio</h1>

    <div className="d-flex">
      <div className="d-flex p-4 flex-column align-items-center">
        normal
        <Radio checked={checked} onChange={handleCheckbox} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        variant
        <Radio onChange={(value) => setSecondCheckbox(value)} checked={secondChecked} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        disabled
        <Radio checked={false} disabled onChange={handleCheckbox} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        disabled full
        <Radio checked={true} disabled={true} />
      </div>
    </div>

    <h1 className="mb-4">separator</h1>

    <div className="d-flex row">
      <div className="d-inline-flex col justify-content-center" style={{ height: '200px' }}>
        <Separator vertical />
      </div>
      <div className="d-inline-flex col align-items-center">
        <Separator />
      </div>
    </div>

  </div>

    <div className="container">
      <Grid row className="pb-6" >
        {
          [1, 2, 3, 4, 5].map((val) => <Grid key={val} col>
            <div className={`elevation-${val}`}>{val}</div>
          </Grid>)
        }
      </Grid>
      <Grid row className="pb-6" >
        {
          [1, 2, 3, 4].map((val) => <Grid key={val} col>
            <div className={`elevation-element-${val}`}>{val}</div>
          </Grid>)
        }
      </Grid>
    </div>


    <div className="bg-primary">
      <div className="container">
        <Header
          logo={<Logo className="w-100" />}
          logOut={<HeaderItem icon="line-logout"> label </HeaderItem>}
        >
          <HeaderItem icon="home"> label</HeaderItem>
          <HeaderItem icon="line-cloud"> label</HeaderItem>
          <HeaderItem icon="home"> label</HeaderItem>
          <HeaderItem icon="home"> label</HeaderItem>
          <HeaderItem icon="home"> label</HeaderItem>
        </Header>
      </div>
    </div>

    <div className="container my-4">
      {inputText}
      <Input
        maxLength="105"
        label="esto es un label multi validations"
        value={inputText}
        suffix={inputSuffix}
        assistText={[
          {
            text: 'error mesaje',
            type: 'error'
          },
          {
            text: 'assist mesaje',
            type: 'assist'
          },
          {
            text: 'success mesaje',
            type: 'success'
          }
        ]}
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        error
        value={inputText}
        prefix={inputPrefix}
        suffix={inputSuffix}
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        type="password"
        success
        prefix={inputPrefixText}
        suffix={inputSuffix}
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        type="password"
        disabled
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label de un text area"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        variant='textarea'
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label de un text area"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        disabled
        variant='textarea'
        onChange={({ target: { value } }) => setInputText(value)}
      />
    </div>

    <div className="container my-4">

      <h1 className="mb-4">input InputPhone</h1>
      <InputPhone
        maxLength="105"
        value={inputPhone}
        code={inputPhoneCode}
        onCodeChange={(_val) => setInputPhoneCode(_val)}
        label="esto es un label multi validations"
        suffix={inputSuffix}
        assistText={[
          {
            text: 'error mesaje',
            type: 'error'
          },
          {
            text: 'assist mesaje',
            type: 'assist'
          },
          {
            text: 'success mesaje',
            type: 'success'
          }
        ]}
        onChange={({ target: { value } }) => setInputPhone(value)}
      />

      <InputPhone
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        error
        value={inputPhone}
        prefix={inputPrefix}
        suffix={inputSuffix}
        code={inputPhoneCode}
        onCodeChange={(_val) => setInputPhoneCode(_val)}
        onChange={({ target: { value } }) => setInputPhone(value)}
      />

      <InputPhone
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputPhone}
        success
        code={inputPhoneCode}
        onCodeChange={(_val) => setInputPhoneCode(_val)}
        onChange={({ target: { value } }) => setInputPhone(value)}
      />

      <InputPhone
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputPhone}
        disabled
        code={inputPhoneCode}
        onCodeChange={(_val) => setInputPhoneCode(_val)}
        onChange={({ target: { value } }) => setInputPhone(value)}
      />

    </div>

    <div className="container my-4">
      <h1 className="mb-4">input select</h1>

      <div className="d-flex">
        <InputSelect
          maxLength="105"
          label="esto es un label"
          assistText="esto es un texto tal vez muy largo a ver que pasaria"
          options={[
            {
              disabled: true,
              prefix: 'line-user',
              text: 'placeholder',
              value: ''
            },
            {
              prefix: 'line-user',
              text: 'option 1',
              value: 'option 1'
            },
            {
              text: 'option 2',
              value: 'option 2'
            }
          ]}
          error
          value={inputText}
          prefix={inputPrefix}
          suffix={inputSuffix}
          onChange={({ target: { value } }) => setInputText(value)}
        />
      </div>
    </div>

    <div className="container my-4">
      <h1 className="mb-4">input chip</h1>

      <div className="d-flex">
        <InputChip value="action" onClose={() => alert('clicked')} />
        <InputChip value="action" onClose={() => alert('clicked')} disabled />
        <InputChip value="action" variant onClose={() => alert('clicked')} />
        <InputChip value="action" variant onClose={() => alert('clicked')} disabled />
      </div>
    </div>

    <div className="container my-4">
        <h1 className="mb-4">input range</h1>
        
          <InputRange 
            placeholder="Text Placeholder"
            label="Text Label"
            min="200"
            max="800"
            step="1"
            onChange={(e) => setRange(Number(e.target.value))}
            value={range}
          />
    </div>

    <div className="container my-4">  
      <h1 className="mb-4">input date</h1>
      <InputDate 
          placeholderLeft="DD/MM/AAAA"
          placeholderRight="DD/MM/AAAA"
          format="dd-MM-yyyy"
          minimumDate={new Date(2020,6,17)}
          maximumDate={new Date(2020,11,31)}
      />
    </div>

    <div className="container my-4">
      <h1 className="mb-4">input Security</h1>

      <div className="d-flex flex-column">
        <InputSecurity security={showSecurity} onSecurityClick={() => setInputShowSecurity(!showSecurity)} value={inputSecurity} onChange={({ target: { value } }) => setInputSecurity(value)} />
        <InputSecurity security={showSecurity} onSecurityClick={() => setInputShowSecurity(!showSecurity)} value={inputSecurity} onChange={({ target: { value } }) => setInputSecurity(value)} disabled />
      </div>
    </div>


    <div className="container my-4">
      <h1 className="mb-4">input counter</h1>

      <div className="d-flex">
        <InputCounter value={inputCounter} onChange={(_val) => setInputCounter(_val)} />
        <InputCounter value={inputCounter} onChange={(_val) => setInputCounter(_val)} disabled />
      </div>
    </div>


    <div className="container my-4">
      <h1 className="mb-4">input search</h1>

      <div className="d-flex">
        <InputSearch
          maxLength="105"
          label="esto es un label"
          value={inputText}
          prefix={inputPrefix}
          suffix={inputSuffix}
          onChange={({ target: { value } }) => setInputText(value)} />

        <InputSearch
          maxLength="105"
          placeholder="hola mundo"
          label="esto es un label"
          value={inputText}
          prefix={inputPrefix}
          suffix={inputSuffix}
          onChange={({ target: { value } }) => setInputText(value)} disabled />
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <Sidebar items={[
            {
              icon: <Icon name="flag" size="1" />,
              text: 'label first level A',
              notification: true,
              open: true,
              sublevel: [
                {
                  text: 'label second level',
                  open: true,
                  sublevel: [
                    {
                      active: true,
                      text: 'label third level',
                      sublevel: [],
                    }
                  ],
                },
                {
                  text: 'label second level 2',
                  sublevel: [],
                  notification: true
                }
              ]
            },
            {
              text: 'label first level B',
              children: [],
            }
          ]} />
        </div>
      </div>
    </div>

    <div className="container my-4">
      <h1 className="mb-4">Switch</h1>

      <div className="d-flex">
        <Switch status={switchStatus} onClick={() => setSwitchStatus(!switchStatus)} />
        <Switch status={true} disabled onClick={() => setSwitchStatus(!switchStatus)} />
        <Switch status={false} disabled onClick={() => setSwitchStatus(!switchStatus)} />
      </div>
    </div>

    <div className="container my-4">
      <h1 className="mb-4">Loading</h1>

      <div className="d-flex">
        <Loading />
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <TitleSection label="Title Section" prefix="write" />
        </div>
      </div>
    </div>

    <div className="container my-4">
      <h1 className="mb-4">Progress bar</h1>

      <div className="d-flex">
        <div className="container">
          <ProgressBar assistText="un texto de asistencia" progress={25} />
          <ProgressBar assistText="un texto de asistencia" progress={25} percent />
          <ProgressBar progress={50} percent helperAlign="end" />
          <ProgressBar assistText="un texto de asistencia" helperAlign="start" progress={75} />
        </div>
        <div className="container">
          <ProgressBar assistText="un texto de asistencia" label={
            [
              {
                label: "label",
                text: "$2.000.000"
              },
              {
                label: "label",
                text: "$10.000.000"
              }
            ]
          } progress={75} />
          <ProgressBar assistText="un texto de asistencia" label={
            [
              {
                label: "label",
                text: "$2.000.000"
              }
            ]
          } progress={75} />
          <ProgressBar assistText="un texto de asistencia" percent progress={100} />
        </div>
      </div>
    </div>


    <div className="container my-4">
      <h1 className="mb-4">Messages</h1>

      <div className="d-flex flex-column">
        <Message type="success" title="this is a success message" action={<Button variant="text" suffix="arrow-right" > ir a action </Button>} />
        <Message type="error" title="this is an error message" description="bajada" />
        <Message type="warning" title="this is a warning message" />
        <Message type="info" title="this is an info message" action={<Button variant="text" > ir a action </Button>} />
      </div>
    </div>


    <div className="container my-4">
      <h1>Tooltip</h1>
      {inputText}
      <Tooltip
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        eventListener="hover"
        placement="bottom">
        <Input
          maxLength="105"
          label="esto es un label multi validations"
          value={inputText}
          suffix={inputSuffix}
          assistText={[
            {
              text: 'error mesaje',
              type: 'error'
            },
            {
              text: 'assist mesaje',
              type: 'assist'
            },
            {
              text: 'success mesaje',
              type: 'success'
            }
          ]}
          onChange={({ target: { value } }) => setInputText(value)}
        />
      </Tooltip>
    </div>

    <div className="container my-4">
      {inputText}
      <Tooltip
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        eventListener="mouseClick"
        placement="top">
        <Input
          maxLength="105"
          label="esto es un label multi validations"
          value={inputText}
          suffix={inputSuffix}
          assistText={[
            {
              text: 'error mesaje',
              type: 'error'
            },
            {
              text: 'assist mesaje',
              type: 'assist'
            },
            {
              text: 'success mesaje',
              type: 'success'
            }
          ]}
          onChange={({ target: { value } }) => setInputText(value)}
        />
      </Tooltip>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Tooltip
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            eventListener="mouseClick"
            placement="right-end">
            <TitleSection label="Title Section" prefix="write" />
          </Tooltip>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Tooltip
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            eventListener="mouseClick"
            placement="right-end">
            <TitleSection label="Title Section" prefix="write" />
          </Tooltip>
        </div>
      </div>
    </div>

    <br />
    <br />

    <div className="container my-4">
      <h1 className="mb-4">Unorder Bullets</h1>
      <div className="d-flex">
        <Bullets typeList="unorder" items={[
          {
            text: 'Order Bullet text a',
            prefixType: 'info',
            contentType: 'success'
          },
          {
            text: 'Order Bullet text a',
            type: 'success',
          },
        ]}>
        </Bullets>

      </div>
    </div>

    <div className="container my-4">
      <h1 className="mb-4">Order Bullets</h1>
      <div className="d-flex">
        <Bullets typeList="order" items={[
          {
            text: 'Order Bullet text a',
            prefixType: 'error',
            contentType: 'error'
          },
          {
            text: 'Order Bullet text b',
            type: 'success',
          },
        ]}>
        </Bullets>

      </div>
    </div>


    <div className="container my-4">
      <h1 className="mb-4">Icon Bullets</h1>
      <div className="d-flex">
        <Bullets typeList="icons" items={[
          {
            text: 'Order Bullet text a',
            prefixType: 'info',
            contentType: 'error',
            icon: 'home'
          },
          {
            text: 'Order Bullet text a',
            type: 'info',
            icon: 'home'
          },
        ]}>
        </Bullets>

      </div>
    </div>


    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex align-items-start">
          <Bullets typeList="icons" items={[
            {
              text: 'Order Bullet text a',
              prefixType: 'info',
              contentType: 'error',
              icon: 'home'
            },
            {
              text: 'Order Bullet text a',
              type: 'info',
              icon: 'home'
            },
          ]}>
          </Bullets>
        </div>

      </div>
    </div>

    <div className="container">
      <h1 className="mb-4">Stamp</h1>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex align-items-start">
          <Stamp></Stamp>
        </div>
      </div>
    </div>

    <br />

    <div className="container">
      <h1> Content Action</h1>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex align-items-start">
          <ContentAction label="Imprimir" onClick={() => console.log('acción')} icon="line-print"></ContentAction>
          <ContentAction label="Email" onClick={() => console.log('acción')} icon="line-print" disabled></ContentAction>
          <ContentAction label="Descargar" onClick={() => console.log('acción')} icon="line-download"></ContentAction>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />

  </>
}

export default App
