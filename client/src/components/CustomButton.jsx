import React from 'react'
import state from '../store';
import { useSnapshot } from 'valtio';

const CustomButton = ({type, title, handleClick, customStyles}) => {

  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    switch (type) {
      case 'filled':
        return {
          backgroundColor: snap.color,
          color: '#F3F4F6'
        }
      case 'outlined':
        return {
          border: '1px solid #4B5563',
          color: '#4B5563'
        }
      default:
        return {
          backgroundColor: '#4B5563',
          color: '#F3F4F6'
        }
    }
  };

  return (
    <button 
        className={`px-2 py-1.5 rounded-md ${customStyles}`}
        style={generateStyle(type)}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton