<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" :class="{'dark-style': darkMode }">         
           <div class="container-fluid">
                <router-link to="/" @click="scrollToSection('section1')" class="navbar-brand" :class="{'dark-style': darkMode }">
                    <img id="logo" alt="Logo" class="logo" src="../assets/LogoGiftLight.svg"><b>
                      NICOLAS RODRIGUEZ</b></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" :class="{'dark-style': darkMode }"></span>
                </button>
            </div>
            <div class="container justify-content-evenly">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" @click="scrollToSection('section1')" class="nav-link btn-nav" :class="{'dark-style': darkMode }"
                                aria-current="page">
                                <span class="material-icons-outlined">home</span> INICIO
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" @click="scrollToSection('section2')"
                                class="nav-link btn-nav" :class="{'dark-style': darkMode }">
                                <span class="material-icons-outlined">contact_support</span> ABOUT</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" @click="scrollToSection('section3')"
                                class="nav-link btn-nav" :class="{'dark-style': darkMode }" aria-current="page">
                                <span class="material-icons-outlined">laptop_chromebook</span> PROYECTOS</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" @click="scrollToSection('section4')"
                                class="nav-link btn-nav" :class="{'dark-style': darkMode }">
                                <span class="material-icons-outlined">message</span> CONTACTO</router-link>
                        </li>
                    </ul>        
                    <label class="switch">
                        <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="#ffd43b">
                                    <circle r="5" cy="12" cx="12"></circle>
                                    <path
                                        d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z">
                                    </path>
                                </g>
                            </svg></span>
                        <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path
                                    d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z">
                                </path>
                            </svg></span>
                        <input type="checkbox" @click="toggleDarkMode" class="input">
                        <span class="slider"></span>
                    </label>  
                </div>            
            </div> 
    </nav>  
</template>

<script>

export default {
    name: "NavComp",
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            element.scrollIntoView({ behavior: 'smooth' });
        },
        toggleDarkMode() {
            this.$eventBus.emit('toggle-dark-mode');
            this.changeLogo();
        },
        changeLogo() {
            const dark = this.darkMode;
            const imgElement = document.getElementById("logo");
            if(dark === true){
                imgElement.src = '../img/LogoGifDark.510cee7e.svg';
            }else{
                imgElement.src = '../img/LogoGiftLight.1cecb020.svg';
            }
        }
    },
    data() {
        return {
            darkMode: false
        };
    },
    created() {
        this.$eventBus.on('toggle-dark-mode', () => {
        this.darkMode = !this.darkMode;
        });
    }
}
</script>

<style>
.logo {
    width: 64px;
    height: 64px;
}

.btn-nav {
    font-size: 18px;
    color: #222;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;  
    caret-color: transparent;
}
.btn-nav:focus,
.btn-nav:hover {
    color: #222;
}

.btn-nav:focus:after,
.btn-nav:hover:after {
    width: 100%;
    left: 0%;
}

.btn-nav:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #6019bd;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
}
.nav-link.btn-nav:hover {
    color:#6019bd;
    font-weight: 800;
}
.nav-link.btn-nav:focus {
    color:#6019bd;
    font-weight: 800;
}

/* Estilos específicos para el modo oscuro */
.navbar.navbar-expand-lg.bg-body-tertiary.fixed-top.dark-style {    
    background-color: #111;
}
.nav-link.btn-nav.dark-style {
    color: #fff;
}
.navbar-brand.dark-style {
    color: #fff;
}
.navbar-brand.dark-style:hover{
    color: #fff;
}
.navbar-brand.dark-style:focus{
    color: #fff;
}
.nav-link.btn-nav.dark-style:hover {
    color:#6019bd;
    font-weight: 800;
}
.nav-link.btn-nav.dark-style:focus {
    color:#6019bd;
    font-weight: 800;
}
.navbar-toggler-icon.dark-style {
    color: #fff;
}
</style>