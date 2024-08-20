<template>
  <div class="container-fluid bg-image">
    <div class="content">
      <div class="container">
        <HomeComp :titulo="items_home.miTitulo" :contenido="items_home.miContenido" />    
      </div>        
    </div>
  </div>
</template>

<script>  
  import HomeComp from '@/components/HomeComp.vue';

  export default {
    name: "HomeView",
    components: {
        HomeComp,
    },
    data() {
      return {
        items_home: {
          miTitulo: 'HEY, IM NICOLAS RODRIGUEZ',
          miContenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
      };
    }
  };
</script>

<style>
  .container-fluid.bg-image .content {
    position: relative;   
    z-index: 1;
    padding-top: 15vh;
  }

  .container-fluid.bg-image .content h1 {
    color: #000000; /* Ajusta el color del texto si es necesario */
  }
  .container-fluid.bg-image {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url('../assets/background.svg');
  }

  .container-fluid.bg-image::before {
    content: "";
    position: absolute;
    top: 0, 300vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(235, 234, 234, 0.411); 
  }
</style>