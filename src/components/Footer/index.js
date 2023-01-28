import React from 'react'
// image
import IMG from '../../assets/images/logo-vazado.png'

const Index = () => {
  return (
    <div className='flex flex-col items-center w-full bg-gray-300 pt-14 pb-4 px-8 '>

      <div className='flex items-center mb-14 max-sm:flex-col-reverse'>
        <h2 className='text-3xl mr-20 text-gray-700 max-sm:mr-0 max-sm:mt-5'>
          Não perca <span className='text-red-600'>tempo</span>! <br className='max-sm:hidden'/>
          Entregue sua carga
        </h2>
        <img src={IMG} alt=''/>
      </div>

      <div className='flex items-center max-sm:flex-col max-sm:py-5'>
        <p className='mr-20 text-sm text-gray-900 max-sm:mr-0 max-sm:mb-3'>CNPJ: 42.342.787/0001-10</p>
        <p className='text-sm text-gray-600'>
          Desenvolvido por:  
          <a href='https://www.instagram.com/gevolgdev/' target='blank' className='ml-2 underline'>GEVOLG</a>
        </p>
      </div>

    </div>
  )
}
export default Index