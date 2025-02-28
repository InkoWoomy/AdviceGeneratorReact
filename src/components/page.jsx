import { useEffect, useState } from 'react'
import { getAdviceData } from '/src/services/service.js'

function Page() {
    const [output, setOutput] = useState('');

  //Use a useEffect to fetch and console log our data 
  const fetchAdvice = async () => {
    const data = await getAdviceData();
    setOutput(data.slip);
  };
  
  useEffect(() => {
    fetchAdvice();
  }, [])

  return (
    <>
      <div className='bg-gray-700 rounded-3xl justify-center place-self-center my-72 max-w-1/2 p-5'>
        <div className="text-center">
          <h1 className='text-emerald-400 tracking-widest md:text-2xl text-xl font-bold'>{`ADVICE #${output.id}`}</h1>
          <h2 className='text-white md:text-4xl font-bold py-10 text-2xl text-center sm:flex lg:block'>"{output.advice}"</h2>  
        </div>
        <div className='flex justify-center pb-10'>
          <img src="/public/pattern-divider-desktop.svg" alt="Divider Desktop" className='size-auto md:hidden block'/>
          <img src="/public/pattern-divider-mobile.svg" alt="Divider Mobile" className='size-auto md:block hidden'/>
        </div>
        <div className='flex justify-center'>
          <button type='button' className='bg-emerald-400 hover:shadow-2xl hover:shadow-emerald-400 focus:ring-2 focus:ring-emerald-600 rounded-full p-6 flex absolute' onClick={() => fetchAdvice()}>
            <img src="/public/icon-dice.svg" alt="Dice" className='size-8'/>
          </button>
        </div>
      </div>
    </>
  )
}

export default Page