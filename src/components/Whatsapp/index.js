import React from 'react'
import WhatsappIcon from '../../assets/icons/Whatsapp.svg'

const Index = () => {
  return (
    <a href='https://wa.me/5519984585045' target='blank' className='flex items-center justify-center rounded-full w-[90px] h-[90px] bg-green-500 fixed bottom-12 right-12 max-sm:w-[70px] max-sm:h-[70px] max-sm:right-6 max-sm:bottom-6'>
      <WhatsappIcon/>
    </a>
  )
}

export default Index