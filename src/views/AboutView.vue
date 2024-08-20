<template>
  <div class="container-fluid bg-color about" :class="{'dark-style': darkMode }">
    <div class="content">
      <TitleComp :titulo="items_title.miTitulo" :contenido="items_title.miContenido" />
      <div class="container">
        <div class="row">
          <div class="col">
            <TextComp :titulo="items_text.miTitulo" :contenido="items_text.miContenido" />
          </div>
          <div class="col">
            <div class="title">
              <h3 >SKILLS</h3>
            </div> 
            <div class="container content-skills">
              <div class="row align-items-start">              
                <div class="col" v-for="item in items_skills.listaDatos" :key="item.id">
                  <SkillsComp :titulo="items_skills.miTitulo" :data="item" /> 
                </div>
              </div>  
            </div>               
          </div>
        </div>   
        <button class="cti about" @click="scrollToSection('section4')">
          <div class="CTI" :class="{'dark-style': darkMode }">
            CONTACT
          </div>
        </button>     
      </div>      
    </div>
  </div>
</template>

<script>
  import TitleComp from '@/components/TitleComp.vue';
  import TextComp from '@/components/TextComp.vue';
  import SkillsComp from '@/components/SkillsComp.vue';

  export default {
    components: {
      TitleComp,
      TextComp,
      SkillsComp
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
          miTitulo: 'ABOUT',
          miContenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        items_text: {
          miTitulo: 'ABOUT',
          miContenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates dicta saepe natus dolores optio unde laborum quod doloremque? Voluptates incidunt eos laboriosam voluptas assumenda sapiente ipsam, dignissimos rem quisquam.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates dicta saepe natus dolores optio unde laborum quod doloremque? Voluptates incidunt eos laboriosam voluptas assumenda sapiente ipsam, dignissimos rem quisquam.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates dicta saepe natus dolores optio unde laborum quod doloremque? Voluptates incidunt eos laboriosam voluptas assumenda sapiente ipsam, dignissimos rem quisquam.'
        },
        items_skills: {
          miTitulo: 'SKILLS',
          listaDatos: [
          { id: 1, skill: 'PHP' },
          { id: 2, skill: 'HTML' },
          { id: 3, skill: 'CSS' },
          { id: 4, skill: 'VUE.JS' },
          { id: 5, skill: 'JAVASCRIPT' },
          { id: 6, skill: 'BOOTSTRAP' },
          { id: 7, skill: 'MYSQL' },
          { id: 8, skill: 'SQL' },
          { id: 9, skill: 'AJAX' },
          { id: 10, skill: 'JQERY' },
          { id: 11, skill: 'API' },
          { id: 12, skill: 'PYHTON' },
          { id: 13, skill: 'DJANGO' },
          { id: 14, skill: 'GIT' },
          { id: 15, skill: 'GITHUB' }
          ]
        } 
      };
    },
    methods: {
      handleButtonClick() {
        // Lógica del botón en el componente padre
        console.log('Haz clic en el botón en el componente padre');
      },
      scrollToSection(sectionId) {
          const element = document.getElementById(sectionId);
          element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
</script>

<style>
  .container-fluid.bg-color.about .content {
    position: relative;   
    z-index: 1;
    padding-top: 9vh;
  }

  .title{
    padding-top: 5vh;    
    margin-left: 5vh;
  }

  .content-skills{ 
    margin-left: 5vh;
    padding-left: 5vh;
  }

  
  .container-fluid.bg-color.about {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-color: #fafafa83;  
  }

  .cti.about {
    margin-top: 3vh;
    width: 200px;
  }

  /* Estilos específicos para el modo oscuro */
  .container-fluid.bg-color.about.dark-style {    
      background-color: #393A3D;
  }
</style>