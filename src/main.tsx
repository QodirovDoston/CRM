/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import store from './store/store.ts'
import  './style/CustomColor.ts'
import App from './App.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)