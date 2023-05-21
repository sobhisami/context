import React from 'react'

const Lable = ({props,children}) => {
  return (
    <label {...props} className="form-label">{children}</label>
  )
}

export default Lable
