import React from 'react';

interface InputComponentProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ value, onChange }) => {
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <label htmlFor='input'>กรุณาระบุข้อความ: </label>
      <textarea
        id='input'
        value={value}
        onChange={onChange}
        placeholder='กรุณาระบุข้อความ...'
        className='w-full my-4 p-2 textarea textarea-bordered textarea-primary'
        rows={4} // Adjust the number of rows for the textarea height
      />
    </div>
  );
};

export default InputComponent;
