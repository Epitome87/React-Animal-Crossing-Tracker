import React from 'react'
import { useParams } from 'react-router-dom';

function FishDetailScreen() {
    const { fishId } = useParams();

  return (
    <div>FishDetailScreen for {fishId}</div>
  )
}

export default FishDetailScreen;