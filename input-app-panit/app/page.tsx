'use client';

import { useState } from 'react';
import InputComponent from './components/InputComponent';
import DisplayComponent from './components/DisplayComponent';

export default function Home() {
  const [userInput, setUserInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e?.target?.value);
  };

  return (
    <main>
      <div className='flex justify-center flex-col'>
        <h1 className='font-bold text-xl text-primary text-center m-2'>
          Input App
        </h1>
        <div className='bg-gray-100 flex justify-center items-center'>
          <div className='bg-white p-3 rounded-lg w-full flex items-center flex-col'>
            <InputComponent value={userInput} onChange={handleInputChange} />
            <br />
            <DisplayComponent text={userInput} />
          </div>
        </div>
      </div>
    </main>
  );
}
