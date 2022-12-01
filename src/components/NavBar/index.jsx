import React from "react";
import { CartWidget } from "../CartWidget";
import "./styles.css";


export const NavBar= () => {
    return (

        <div className="container mt-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand m-3 logo" href="#">SOUR CREAM'</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Productos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Nosotros</a>
      </li>
      <li class="nav-item">
      </li>
    </ul>
        <a class="nav-link disabled p-2" href="#"><CartWidget /></a>
  </div>
</nav>
        
        </div>


    )
}
export default NavBar; 