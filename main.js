import React from 'react'
import {render} from 'react-dom'
import Menu from './src/components/Menu'
import data from './data/recipes' 

window.React = React
render(
  <Menu recipes={data} />,
  document.getElementById("react-container")
)