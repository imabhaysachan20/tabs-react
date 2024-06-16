import React from 'react'

const Tabs = ({jobs,setCurrentItem,currentItem}) => {
  return (
    <div className='btn-container'>
      {jobs.map((item,index)=>{
        return <button onClick={()=>{setCurrentItem(index)}} className={currentItem==index?"active-btn job-btn":"job-btn"} key = {item.id}>
            {item.company}
        </button> 
      })}
    </div>
  )
}

export default Tabs
