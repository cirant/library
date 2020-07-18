import React, { useState } from 'react'
import { Welcome } from '@storybook/react/demo'
import { Icon, Card } from '../../dist'
import iconNames from './list'
import './list.scss'
import '../../dist/css/custom.css'

export default {
  title: 'Icon',
  component: Welcome
}

export const ToStorybook = () => {
  const [targetIcon, setTarget] = useState(iconNames)
  const [itemSelected, setItemSelected] = useState('')
  const ref = React.createRef()

  const _findIcon = ({ target }) => {
    const reg = new RegExp(target.value, 'ig')
    const result = iconNames.filter((val) => val.match(reg))
    setTarget(result)
  }

  const _copy = (name) => {
    const el = document.createElement('textarea')
    el.value = name
    document.body.appendChild(el)
    el.select()
    el.setSelectionRange(0, 99999)
    document.execCommand('copy')
    document.body.removeChild(el)
    setItemSelected(name)
  }

  return (
    <div>
      <div className='container p-3 my-5 d-flex flex-column'>
        <span className='h3'>Search</span>
        <div className='d-flex'>
          <input ref={ref} onChange={_findIcon} />
          <Icon
            className='p-3'
            onClick={() => {
              setTarget(iconNames)
              ref.current.value = ''
            }}
            name='trash'
            size='2'
          />
        </div>
      </div>

      <div className='container'>
        <div className='d-flex flex-wrap justify-content-around'>
          {targetIcon.map((name) => (
            <Card
              selected={itemSelected === name}
              key={name}
              onClick={() => _copy(name)}
              className='d-inline-flex flex-column align-items-center text-center p-2 mb-2 gridList'
            >
              <Icon name={name} size='4' className='pb-2' />
              <div className='d-block'> {name} </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
ToStorybook.story = {
  name: 'icons list'
}
