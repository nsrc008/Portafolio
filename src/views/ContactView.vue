<template>
    <div class="container-fluid bg-image contact">
      <div class="content">
        <TitleComp :titulo="items_title.miTitulo" :contenido="items_title.miContenido" />
        <div class="container">
          <ContactComp />          
        </div>  
      </div>
          
    </div>
</template>
  
<script>
  import TitleComp from '@/components/TitleComp.vue';
  import ContactComp from '@/components/ContactComp.vue';

  export default {
    components: {
      TitleComp,
      ContactComp
    },
    data() {
      return {
        items_title: {
          miTitulo: 'CONTACT',
          miContenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }        
      };
    },
    methods: {
      handleButtonClick() {
        // Lógica del botón en el componente padre
        console.log('Haz clic en el botón en el componente padre');
      }
    }
  };
</script>

<style>
  .container-fluid.bg-image.contact {
    height: 110vh;
  }
  .container-fluid.bg-image.contact::before {
    height: 110vh;
  }
  .container-fluid.bg-image.contact .content {
    position: relative;   
    z-index: 2;
    padding-top: 9vh;
  } 
</style>

