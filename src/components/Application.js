import React from 'react';

const Application = ({application}) => {
  return (
    <div className='application'> 
      <p>{application.position} at {application.company_name} on {application.date}</p>
    </div>
  )
}

export default Application;