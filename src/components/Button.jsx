import React, { Children } from 'react'

function Button({ type, styler, children}) {
  return (
    <React.Fragment>
        <button type={type} className={styler}>{children}</button>
    </React.Fragment>
  )
}

export default Button