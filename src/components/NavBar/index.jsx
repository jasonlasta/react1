import React from "react";
import { CartWidget } from "../CartWidget";
import "./styles.css";
import { NavLink } from "react-router-dom";
import ItemListContainer from "../ItemListContainer";


export const NavBar= () => {
    return (

        <div className="container mt-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand m-3 logo" to='/'>SOUR CREAM'</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav navbar-nav mx-auto">
      <li class="nav-item active ">
        <NavLink class="nav-link ml-2" to='/'>Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link ml-2 " to='/productos/zapatillas'>Zapatillas</NavLink>
      </li>
      <li class="nav-item ">
        <NavLink class="nav-link ml-2" to='/productos/indumentaria'>Indumentaria</NavLink>
      </li>
      <li class="nav-item">
      </li>
    </ul>
        <NavLink class="nav-link disabled " to='/cart'><CartWidget /></NavLink>
  </div>
</nav>
        
        </div>


    )
}
export default NavBar; 