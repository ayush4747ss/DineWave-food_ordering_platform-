import React from 'react'

import { menu_photo } from '../../utils/contents';


const Menucard = (props) => {
  const{resObj}=props;
  const{imageId,name,description}=resObj?.card.info
  return (
    <div className=' flex w-200px h-200px flex-wrap border-solid border solid-black'>
      <div className='m-10 p-1 '>
          <h3>{name}</h3>
          <h4><br></br>{description}</h4>
          <img className='menu_img' alt='menu-logo' src={menu_photo+imageId}/>
        
      </div>
    </div>

  )
};

export default Menucard