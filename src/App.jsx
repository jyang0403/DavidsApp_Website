import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router";

function App() {

  var url = window.location.href;
  var code = parseCode(url);

  var message = "";
  if (code == null) {
    message = "Error: invalid code";
  } else {
    message = "Your code is " + code + ". Return to the app and enter it.";
  }

  return (
    <Routes>
        <Route path="/" element={<div>hi</div>} />
    </Routes>
  )
}

function parseCode(url) {
  var urlSplit = url.split("?code=")
  try {
    return urlSplit[1];
  } catch {
    return null;
  }
}

export default App
