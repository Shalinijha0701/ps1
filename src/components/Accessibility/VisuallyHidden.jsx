import React from 'react'

const VisuallyHidden = ({ children, as: Component = 'span', ...props }) => {
  return (
    <Component
      className="absolute left-[-10000px] top-auto width-[1px] height-[1px] overflow-hidden"
      {...props}
    >
      {children}
    </Component>
  )
}

export default VisuallyHidden