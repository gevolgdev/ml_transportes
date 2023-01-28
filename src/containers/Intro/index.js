import React from 'react'
// wpp
import Whatsapp from '../../components/Whatsapp'

const Index = () => {
  return (
    <div className=' flex flex-col items-center justify-center w-full mt-28 max-2xl:mt-14'>
      <Whatsapp/>

      <p className='text-gray-300'>Transporte de carga com,</p>
      <div className='pb-28 pt-20 max-2xl:pb-14 max-2xl:pt-7'>
        <h1 className='pr-[260px] max-sm:pr-0 text-white text-9xl max-sm:text-7xl max-sm:text-center font-bold'>Facilidade</h1>
        <h1 className='text-9xl max-sm:text-7xl text-white text-right max-sm:text-center font-bold'>e <span className='text-red-500'>rapidez</span></h1>
      </div>

      <div className='flex flex-row items-center justify-center max-sm:flex-col w-full'>
        <a href='https://wa.me/5519984585045' target='blank' className='flex items-center justify-center w-[150px] max-sm:w-[80%] text-sm max-sm:text-[1rem] p-3 max-sm:py-4 bg-green-500 text-gray-700 mr-5 max-sm:mr-0 rounded-lg'>Contrate agora!</a>
        <a href='#infos' className='flex items-center justify-center w-[150px] text-sm p-3 border border-white text-white rounded-lg max-sm:w-[80%] max-sm:text-[1rem] max-sm:py-4 max-sm:mr-0 max-sm:mt-5'>Saiba mais</a>
      </div>
    </div>
  )
}

export default Index