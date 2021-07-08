import React from 'react'

export default function Footer() {
  let footerStyle={
    bottom:"0",
    position:"fixed",
    width:"100%",
  }
  return (
    <div className="bg-dark text-light text-center py-3" style={footerStyle}>
      Copyright &copy; MyTodoList.com
    </div>
  )
}
