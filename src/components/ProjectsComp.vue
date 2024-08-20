<template>
    <div class="content-projects">
        <div class="row">
            <div class="col">
                <div class="content-img-project">
                    <img class="img-project" :src="image">
                </div>                
            </div>
            <div class="col">
                <div class="text-projects">
                    <h2>{{ title }}</h2>
                    <p>{{ text }}</p>
                    <button class="cti project">
                        <div class="CTI project" :class="{'dark-style': darkMode }">
                        PROJECTS
                        </div>
                    </button>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$eventBus.on('toggle-dark-mode', () => {
        this.darkMode = !this.darkMode;
        });
    },
    data() {
      return {
        darkMode: false      
      };
    },  
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
};
</script>

<style>
.img-project {
    width: 600px;
    height: 600px;
}
.content-img-project {
    width: 600px;
    height: 50vh;
}
.content-img-project {    
    cursor: default;
    user-select: none;
}
.text-projects {
    padding-top: 15vh;
    cursor: initial;
    caret-color: transparent; 
}
.cti.project {
    margin-top: 2vh;
    color: #ffffff;
}
/* Estilos específicos para el modo oscuro */
.cti:hover .CTI.project.dark-style {
    color: #ffffff;
}
.cti:focus .CTI.project.dark-style {
    color: #ffffff;
}
</style>