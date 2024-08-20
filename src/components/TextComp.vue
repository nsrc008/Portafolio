<template>
    <div class="text-component" :class="{'dark-style': darkMode }">
        <h3>{{ titulo }}</h3>
        <p>{{ contenido }}</p>   
    </div> 
</template>
  
<script>
    export default {
    name: 'TitleComp',
    created() {
        this.$eventBus.on('toggle-dark-mode', () => {
        this.darkMode = !this.darkMode;
        });
    },
    data() {
      return {
        darkMode: false,
        items_title: {
          miTitulo: 'PROJECTS',
          miContenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }        
      };
    },
    props: {
        titulo: {
            type: String,
            required: true
        },
        contenido: {
            type: String,
            required: true
        }
    }
    };
</script>

<style>
    .text-component {  
        padding-top: 5vh;
        cursor: initial;
        caret-color: transparent;        
    }
    .text-component h3{
        color: black;
        text-align: justify;
    }
    .text-component p{
        color: #313131f8;
        padding-top: 2vh;
        text-align: justify;
        font-size: 20px;        
    }    

    /* Estilos específicos para el modo oscuro */
    .text-component.dark-style h3{    
        color: #ffffff;
    }
    .text-component.dark-style p{    
        color: #ffffff;
    }
</style>