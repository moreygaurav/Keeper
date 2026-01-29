import React from 'react'

function Footer() {

  const year = new Date().getFullYear();


  return (
    <div className= "footer bg-warning text-center p-3">
    <p>Coppyright@{year}</p> 
    </div>
  )
}

export default Footer
