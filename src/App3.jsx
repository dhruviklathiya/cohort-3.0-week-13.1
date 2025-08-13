import './App.css'
import Genericotp from './components/genericotp'
import ComputerIcon from './icons/computerIcon'

// Code for screen 3
export default function App3() {

  return (
    <>
      <div className='h-screen bg-[#01295c] w-screen m-0 p-0'>
        <div className='items-center flex justify-center mb-5 h-48'>
        <ComputerIcon/>
        <h1 className="text-3xl font-bold text-center text-[#88a1bb]">
            <span className='text-[#1c687d]'>Webinar</span>.gg
        </h1>
        </div>
        <div><p className='h-16 text-4xl text-center text-[#ebf0f8] capitalize m-5'>Check your email for a code</p></div>
        <div><p className='text-center text-[#6a8bb5] capitalize'>Please enter the verification code sent to your email id prabhleen@gmail.com</p></div>
        {/* Generic OTP compoinent */}
        <Genericotp/>
        <div className='h-16 w-full flex justify-center p-5'><button type='button' className='h-[40px] w-72 bg-[#7f93ac] text-[#b8c9d8] rounded p-3 leading-tight cursor-pointer'>Verify</button></div>
      </div>
    </>
  )
}
