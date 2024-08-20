<template>
    <div class="container-fluid bg-color project" :class="{'dark-style': darkMode }">
      <div class="content">
        <TitleComp :titulo="items_title.miTitulo" :contenido="items_title.miContenido" />
      </div>
      <div class="container">
        <div class="content-projects" v-for="item in items_projects.listaProjects" :key="item.id">
          <ProjectsComp :image="item.image" :title="item.id" :text="item.value" /> 
        </div>
      </div>
    </div>
</template>
  
<script>
  import TitleComp from '@/components/TitleComp.vue';
  import ProjectsComp from '@/components/ProjectsComp.vue';

  export default {
    components: {
      TitleComp,
      ProjectsComp
    },
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
        },
        items_projects: {
          listaProjects: [
            { id: 'PROJECT 1', image: './img/projects.ff8e33b0.svg', value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur repudiandae quae eveniet.Repudiandae iusto ratione pariatur eos enim voluptatibus cumque atque, rerum quibusdam accusamus' },
            { id: 'PROJECT 2', image: './img/projects.ff8e33b0.svg', value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur repudiandae quae eveniet.Repudiandae iusto ratione pariatur eos enim voluptatibus cumque atque, rerum quibusdam accusamus' }
          ]
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
  .container-fluid.bg-color.project .content {
    position: relative;   
    z-index: 1;
    padding-top: 9vh;
  }  
  .container-fluid.bg-color.project {
    height: 150vh;
    background-size: cover;
    background-position: center;
    background-color: rgb(255, 255, 255);  
  }
  /* Estilos específicos para el modo oscuro */
  .container-fluid.bg-color.project.dark-style {    
      background-color: #202124;
  }
</style>