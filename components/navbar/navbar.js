class navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap");
         :root {
          --variable-name: value;
         }
         selector {
          property: var(--variable-name);
        }
        :root {
          --font-family: "Roboto", sans-serf;
          --normal-font: 400;
          --bold-font: 700;
          --bolder-font: 900;
          --bg-color: #fcfcfc;
          --primary-color: #4756df;
          --secondary-color: #ff7235;
          --primary-shadow: #8b8eaf;
          --secondary-shadow: #a17a69;
          --bottom-margin: 0.5rem;
          --bottom-margin-2: 1rem;
          --line-height: 1.7rem;
          --transition: 0.3s;
        }
        html {
          scroll-behavior: smooth;
        }
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      ul {
        list-style-type: none;
      }
      
      a {
        text-decoration: none;
        color: var(--primary-color);
      }
      
      a:hover {
        color: var(--secondary-color);
      }
      
      nav {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 3.5rem;
        background-color: var(--bg-color);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
      }

      nav h1 {
        color: var(--primary-color);
      }
      
      nav a {
        color: var(--primary-color);
        transition: var(--transition);
      }
      nav a:hover {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
      }
      
      nav ul {
        display: flex;
        gap: 1.9rem;
      }
      
      nav ul li {
        font-weight: var(--bold-font);
      }
      .burger-menu {
        color: var(--primary-color);
        font-size: 2rem;
        border: 0;
        background-color: transparent;
        cursor: pointer;
        display: none;
      }
      
      
        </style>
        <title> Solo Project</title>
        <nav>
        <h1>Project</h1>
        <ul class="navigation">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="burger-menu" id="burger-menu">
          <ion-icon class="bars" name="menu-outline"></ion-icon>
        </button>
  </nav>
        
      `;
    }
  }
  
  customElements.define('navbar-component', navbar);
  