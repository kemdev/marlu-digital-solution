import React from 'react'
import solutionHover from "../../../img/solutionHover.png";

export default function SolutionsDropdown() {
  return (
    <div
    style={{backgroundImage: `url(${solutionHover})`, zIndex: 100, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionX: '100%'}}
    >Solutions</div>
  )
}
