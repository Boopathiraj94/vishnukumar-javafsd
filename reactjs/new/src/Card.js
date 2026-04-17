import React from 'react'

const Profiles = (props) => {

  console.log(props);
     
  return (
    <>
      <div className='box'>
          {props.empname}
          {props.role}
          {props.department}
          {props.salary}
      </div>  
    </>
  )
}

export default Profiles