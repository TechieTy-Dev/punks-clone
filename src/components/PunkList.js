import React from 'react';
import CollectionCard from './CollectionCard';
import './Punklist.css';

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className='punkList'>
      {punkListData.map(punk => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            description={punk.description}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList