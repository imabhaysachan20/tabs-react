import React from 'react'
import Duties from './Duties';
const Jobinfo = ({jobs, currentItem}) => {
    const {company,title,duties,dates} = jobs[currentItem];
    
  return (
    <article>
        
        <h3>{title}</h3>
        <span className='job-company'>{company}</span>
        <p className='job-date'>{dates}</p>
        <Duties duties={duties}></Duties>
    </article>
  )
}

export default Jobinfo
