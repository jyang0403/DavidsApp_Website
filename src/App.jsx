import { useState } from 'react'
import './App.css'

function App() {

  var url = window.location.href
  var code = parseCode(url)

  return (
      <div>
        Your code is: {code}
      </div>
  )
}

function parseCode(url) {
  var urlSplit = url.split("?code=")
  return urlSplit[1]
}

export default App
