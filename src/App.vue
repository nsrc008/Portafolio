<template>    
  <div id="app">
    <div :class="{ 'dark-theme': darkMode }">
        <NavComp />
        <!--<router-view/>-->
        <div id="section1" class="section">
          <HomeView/>
        </div>
        <div id="section2" class="section">
          <AboutView/>
        </div>
        <div id="section3" class="section">
          <ProjectsView/>
        </div>
        <div id="section4" class="section">
          <ContactView/>
        </div>
        <FooterComp />
    </div>
  </div>
  
</template>

<script>
  import NavComp from "@/components/NavComp.vue"
  import FooterComp from "@/components/FooterComp.vue"
  import AboutView from "@/views/AboutView.vue"
  import ProjectsView from "@/views/ProjectsView.vue"
  import HomeView from "@/views/HomeView.vue"
  import ContactView from "@/views/ContactView.vue"

  export default {
    name: "App",
    components: {
      NavComp,
      AboutView,
      ProjectsView,
      HomeView,
      ContactView,
      FooterComp
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

<style src="./assets/custom-scrollbar.css"> 
  #app {
    color: #2c3e50;
  }
  .section {
    height: 100vh; /* Ajusta la altura según tus necesidades */
  }
</style>
