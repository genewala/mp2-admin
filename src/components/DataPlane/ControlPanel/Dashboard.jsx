import React from 'react'
import DataBackground from '../DataBackground'
import "./Dashboard.css"

const Dashboard = () => {
  return (

    <div id='main-right'>
      <div id='main-top'>
        <DataBackground />
      </div>
      <div id='dashboard'>
      <div id='dashboard-left' >
        <div id='dashboard-left-top'>
          online users
        </div>
        <div id='dashboard-left-bottom'>
          total users
        </div>
      </div>
      <div id='dashboard-right'>
        <div id='dashboard-right-top'>
          Network Status
        </div>
        <div id='dashboard-right-bottom'>
          Latency
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
