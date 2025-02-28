import { useEffect, useState } from 'react'
import './App.css'
import { getAdviceData } from './services/service';


function App() {

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
      <div className='bg-gray-700 rounded-3xl justify-center m-32 lg:mx-96 mx-4 max-w-auto p-15 align-middle'>
        <div className="text-center">
          <h1 className='text-emerald-400 tracking-widest text-2xl font-bold'>{`ADVICE #${output.id}`}</h1>
          <h2 className='text-white md:text-5xl font-bold py-20 text-2xl text-center flex'>"{output.advice}"</h2>  
        </div>
        <div className='flex justify-center pb-10'>
          <img src="src/assets/pattern-divider-desktop.svg" alt="Divider Desktop" className='size-auto md:hidden block'/>
          <img src="src/assets/pattern-divider-mobile.svg" alt="Divider Mobile" className='size-auto md:block hidden'/>
        </div>
        <div className='flex justify-center'>
          <button type='button' className='bg-emerald-400 hover:bg-emerald-600 focus:ring-8 focus:ring-emerald-200 rounded-full p-6 flex absolute' onClick={() => fetchAdvice()}>
            <img src="src/assets/icon-dice.svg" alt="Dice" className='size-14'/>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
