import React from 'react'
import { Link } from 'react-router-dom';

const Timeline = () => {
  return (
    <div>
      I'm the timeline
      <Link to="/webapp/account">
        Account
      </Link>
      <Link to="/webapp/settings">
        Settings
      </Link>
    </div>
  )
}

export default Timeline
