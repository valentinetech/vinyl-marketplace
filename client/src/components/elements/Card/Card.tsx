import React from 'react';
interface CardProps {}

interface Name {
  name: 'John' | string;
}

const Card = ({ ...props }: CardProps) => {
  const [state, setState] = React.useState<Name | null>({ name: '' });
  return (
    <>
      <div>Card</div>
      <div>Card</div>
      <div>Card</div>
    </>
  );
};

export default Card;
