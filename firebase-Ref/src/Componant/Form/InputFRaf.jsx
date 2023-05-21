import React from "react"

const InputFRaf =React.forwardRef((props,ref) => {
  return (
    <input {...props} ref={ref}/>
  )
})

export default InputFRaf
