import React from 'react'

function About() {
  return (
    // U can use tag React.fragment intead of <div> 
    // It will not show on template
    <React.Fragment>
        <h1 style={{padding: '10px'}}>About</h1>
        <p>This is a TodoList app version 1.0.0. It is part of react crash course</p>
    </React.Fragment>
  )
}

export default About;
