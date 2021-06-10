import React from "react";
import './Header.css';
import NavTabs from "../NavTabs/NavTabs";

function Header() {
  const symbols = 'abcdefghijklmnopqrstuvwxyz1234567890';

  const getRandomCode = () => {
    let code = [];

    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * symbols.length)
      code.push(symbols.charAt(randomIndex));
    }

    return code.join('');
  }

  return (
    <header className='flex'>
      <div className='flex'>
        <img id='header-logo' src={`https://avatars.dicebear.com/api/gridy/${getRandomCode()}.svg`} />
        <h1 id='header-title'>RoboCat</h1>
      </div>
      <NavTabs />
    </header>
  );
}

export default Header;
