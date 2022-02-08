import React from 'react';

interface Props {
  name: string;
}

const FishItem: React.FC<Props> = ({ name }) => {
  return <div>Name: {name}</div>;
};

export default FishItem;
