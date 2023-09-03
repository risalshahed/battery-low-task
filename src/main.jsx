import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StepContext from './hooks/StepContext.jsx'
// import CSVDataContext from './hooks/CSVDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StepContext>
      {/* <CSVDataContext> */}
        <App />
      {/* </CSVDataContext> */}
    </StepContext>
  </React.StrictMode>,
)