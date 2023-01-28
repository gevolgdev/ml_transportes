import React from 'react'
// Style
import Truck from '../../assets/icons/truck.svg'
import IMG from '../../assets/images/imgConfidence.png'

const Index = () => {
  return (
    <div className='flex flex-row items-center justify-center py-64 max-2xl:py-52 max-sm:flex-col'>

        <div className='w-[250px] h-[250px] bg-[url("../assets/images/imgConfidence.png")] bg-no-repeat bg-center bg-cover  rounded-xl text-center max-sm:w-full'/>
        
        <div className='flex flex-col ml-20 max-sm:ml-0 max-sm:mt-8'>
          <div className='flex flex-row items-center'>
            <div className='bg-gray-300 w-[200px] h-[2px]'/>
            <Truck className='ml-3'/>
          </div>
          <h2 className='text-white text-5xl py-6'>
            <span className='text-red-500'>Confiança </span>
            e praticidade<br/> na entrega.
          </h2>
          <p className='text-gray-300 max-w-[400px]'>Nossa equipe sempre no foco de facilitar sua vida e garantir a entrega da carga!</p>
        </div>
        
    </div>
  )
}

export default Index