import React from 'react';
import logo from '../../assets/images/recipeflix.png'; 
import Button from '../components/Button';
import './HeaderComponent.css';

function HeaderComponent() {
  return (
    <nav className="nav-bar">
      <a href="/" >
        <img className="logo" src={logo } alt="RecipeFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/recipes/new">
        Nova Receita
      </Button>
    </nav>
  );
}

export default HeaderComponent;