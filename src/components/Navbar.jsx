// import React from 'react'

const Navbar = () => {
  return (
   <>
   <div className="navbar px-8 w-[100vw] h-[9vh] bg-slate-800 flex justify-between items-center">
    <div className="logo text-3xl text-white font-semibold">iTask</div>
    <div className="nav flex justify-center items-center gap-4">
        <div className="nav-links cursor-pointer hover:font-medium text-white">Home</div>
        <div className="nav-links cursor-pointer hover:font-medium text-white">Your Tasks</div>
    </div>
   </div>
   </>
  )
}

export default Navbar