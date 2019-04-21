import { useInit, useBarn, useTimerElapsed, setBarnState } from 'bara'

import {
  nameOfTouchable,
  nameOfTouchableOpacity,
  useTouchablePress,
  useTouchableOpacityPress,
  useTextPress,
  nameOfText,
} from 'bara-react'

export function welcomeTrigger() {
  useInit(() => {
    setBarnState('welcome', `Loading...`)
    useBarn('welcome', newMessage => {
    })
  })

  useTouchablePress(
    {
      nameOf: nameOfTouchable('welcome-button'),
    },
    ({ name }) => {
      setBarnState('welcome', `You (${name}) are already welcomed!`)
    },
  )

  useTouchableOpacityPress(
    {
      nameOf: nameOfTouchableOpacity('greet-button'),
    },
    ({ name }) => {
      alert(`${name} is PRESSED! YAY !!!`)
      console.log('hey, are you working?')
    },
  )

  useTimerElapsed(5, () => {
    setBarnState('welcome', `Who are you?`)
  })

  useBarn('welcome', newMessage => {
    console.log(`Barn welcome changed to: ${newMessage}`)
  })
}
