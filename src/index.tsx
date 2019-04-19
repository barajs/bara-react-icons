import { register, useBarnStream } from 'bara'
import { useReactApp } from 'bara-react'
import App from './App'
import './index.css'

const BaraApp = () => {
  useReactApp({ name: 'bara-app', App })
}

const bara = register(BaraApp)

if (process.env.NODE_ENV === 'development' || __DEV__) {
  if (window) {
    (window as any).__BARA__ = bara
  }
}
