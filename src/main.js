import React from 'react'
import {render} from 'react-dom'
///import Menu from './components/Menu'
import Summary from './components/Summary'
import data from '../data/recipes' 

window.React = React
///<Menu recipes={data} />,
render(
  <Summary title="this is an over 20 characters title for this not to work"/>,
  document.getElementById("react-container")
)