import React from 'react'
import DataBackground from '../DataBackground'
import "./Statistics.css"


const Statistics = () => {
  return (
    <div id='main-right'>
      <div id='main-top'>
        <DataBackground />
      </div>
      <div className='main-stat'>
      <div id='dashboard'>
      <div id='dashboard-left' >
        <div id='dashboard-left-top'>
          daily sent messages
        </div>
        <div id='dashboard-left-bottom'>
          total sent messages
        </div>
      </div>
      <div id='dashboard-right'>
        <div id='dashboard-right-top'>
          daily deleted message
        </div>
        <div id='dashboard-right-bottom'>
          total deleted message
        </div>
      </div>
      </div>
    </div>

    </div>


    
  )
}

export default Statistics
