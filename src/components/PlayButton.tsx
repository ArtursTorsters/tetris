import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlayButton = () => {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/PlayScreen')  // to play screen
  };

  return (
    <button 
      onClick={handlePlay} 
      className="bg-green-500 text-white font-bold py-2 px-4 rounded w-20 text-center"
    >
      Play
    </button>
  );
};

export default PlayButton;
