import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router";

function App() {

  var url = window.location.href;
  var code = parseCode(url);

  var message = "";
  if (code == null) {
    message = "Error: invalid url or no code";
  } else {
    message = "Your code is " + code + ". Return to the app and enter it.";
  }

  return (
    <Routes>
      <Route path="/" element={<div>{message}</div>} />
      <Route path="*" element={<div>Error: no code or invalid url.</div>} />
    </Routes>
  );
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
