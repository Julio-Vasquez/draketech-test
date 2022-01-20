import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './sass/main.scss'

import App from './views/App'
import Store from './store'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
