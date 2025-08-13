import './App.css'
import ComputerIcon from './icons/computerIcon'

// Code for screen 1
function App() {

  return (
    <>
      <div className='h-screen bg-[#01295c] w-screen m-0 p-0'>
        <div className='items-center flex justify-center mb-5 h-48'>
        <ComputerIcon/>
        <h1 className="text-3xl font-bold text-center text-[#88a1bb]">
            <span className='text-[#1c687d]'>Webinar</span>.gg
        </h1>
        </div>
        <div><p className='h-16 text-4xl text-center text-[#ebf0f8] capitalize m-5'>Verify your age</p></div>
        <div><p className='text-center text-[#6a8bb5] capitalize'>Please confirm your birth year. This data will not be stored.</p></div>
        <div className='h-16 w-full flex justify-center p-5'><input className='h-[40px] w-72 bg-[#19406b] rounded p-3 outline-none text-white' type='text' placeholder='Your Birth Year'></input></div>
        <div className='h-16 w-full flex justify-center p-5'><button type='button' className='h-[40px] w-72 bg-[#7f93ac] text-[#b8c9d8] rounded p-3 leading-tight cursor-pointer'>Continue</button></div>
      </div>
    </>
  )
}

export default App
