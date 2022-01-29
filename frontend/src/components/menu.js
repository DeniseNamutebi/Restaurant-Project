import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    async function fetchApi(){
    const _menu = await fetch('http://localhost:3001/menu').then(res => res.json())
    setMenu(_menu)
    console.log(_menu)
    }
    
    fetchApi()
  }, [])

  useEffect( ()  => {
    console.log('log',menu)
  }, [menu])

  return <div>
    <div><div>The menu is being displayed</div>
      {
      menu.map(menu => {
        return <div key={menu._id}>
          <div>{menu.Course}</div>
          <div>{menu.Name}</div>
          <div>£ {menu.Price}</div>
        </div> 
      })
    }
  </div>
  </div>;    
};

export default Menu;
