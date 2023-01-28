import React, { useState } from 'react'
import IMG_SERVICOS from '../../assets/images/imgServicos.png'
import IMG_QUEMSOMOS from '../../assets/images/imgQuemSomos.png'

const Index = () => {

  let INITIAL_VALUE = {
    title: '',
    text: '',
    image: '',
  }
  const [infos, setInfos] = useState(INITIAL_VALUE)

  function whoAre() {
    INITIAL_VALUE = {
      title: 'Quem somos?',
      text: `Somos uma transportadora especializada em cargas secas. Fundada em 2021,
            estamos localizados em Sumaré. Trabalhamos de forma honesta e séria, garantindo 
            eficiência e rapidez para empresa e motorista.`,
      image: IMG_QUEMSOMOS,
    }
    setInfos(INITIAL_VALUE)
  }
  function whatWeDO() {
    INITIAL_VALUE = {
      title: 'Serviços',
      text: ` Em nossa transportadora, trabalhamos com cargas diversas em vários tipos de caminhões, 
      carregamos cargas secas e trabalhamos com diferentes tipos de carretas (exceto baú e tanques).
      Temos facilidade na comunicação empresa-funcionário e  fretes justos para o caminhoneiro.
      `,
      image: IMG_SERVICOS,
    }
    setInfos(INITIAL_VALUE)
  }

  return (
    <>
      <a id='infos'/>
      <div className='flex flex-col items-center pb-44'>

        <h2 className='text-5xl text-white max-sm:text-center'>Saiba mais sobre <span className='text-red-500'>nós</span></h2>

        <div className='flex flex-col items-center max-sm:w-full'>

          <div className='mt-24 mb-8 flex max-sm:w-full'>
            <button
              onClick={whatWeDO} 
              className='px-12 py-3 text-white rounded-full bg-red-500 mr-5 max-sm:text-sm max-sm:px-3 max-sm:w-full'>
                Serviços
            </button>
            <button
              onClick={whoAre} 
              className='px-12 py-3 text-white rounded-full bg-red-500 max-sm:text-sm max-sm:px-3 max-sm:w-full'>
                Quem somos?
            </button>
          </div>

          <div className='flex flex-col bg-white w-[400px] h-[450px] rounded-lg pt-16 max-sm:w-full'>
            <h3 className='text-4xl text-gray-900 px-8'>{infos.title}</h3>
            <p className='mt-8 px-8'>{infos.text}</p>
            <div className='w-full h-[100px] mt-auto mt-8 rounded-b-lg bg-red-500 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${infos.image})`}}/>
          </div>

        </div>

      </div>
    </>
  )
}

export default Index