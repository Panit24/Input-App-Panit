import React from 'react';

interface DisplayComponentProps {
  text: string;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ text }) => {
  return (
    <div className='flex gap-2 flex-col justify-start items-start w-full break-all whitespace-normal'>
      <h2>ข้อความของคุณ :</h2>
      <p className='p-2 text-primary text-sm font-bold break-all'>
        {text || '-'}
      </p>
    </div>
  );
};

export default DisplayComponent;
