import React from 'react';

type nameProp = {
  name: string;
};

const Btn = ({ name }: nameProp) => {
  return (
    <>
      <div>{name}</div>
      <div className='sdas'></div>
    </>
  );
};

export default Btn;
