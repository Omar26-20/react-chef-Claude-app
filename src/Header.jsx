import chefClaudeIcon from './images/chef-claude-icon.png';
import React from 'react';



export default function Header() {

    
    return (
        <header className='header'>
            <img src={chefClaudeIcon} alt="Logo" className='header-logo'/>
            <h1 className='header-title'>Chef Claude</h1>
        </header>
    )
}

/*
 <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>  

*/