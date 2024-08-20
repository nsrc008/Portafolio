<template>
    <div class="title-component" :class="{'dark-style': darkMode }">
        <h1>{{ titulo }}</h1>
        <div class="container separe"></div>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <p>{{ contenido }}</p>
            </div>
        </div>    
    </div> 
</template>
  
<script>
    export default {
    name: 'TitleComp',
    data() {
        return {
            darkMode: false
        };
    },
    created() {
        this.$eventBus.on('toggle-dark-mode', () => {
            this.darkMode = !this.darkMode;
        });
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
    .title-component {
        padding-top: 5vh;
        cursor: initial;
        caret-color: transparent;
    }
    .title-component h1{
        color: black;
        text-align: center;
    }
    .title-component p{
        color: #313131f8;
        text-align: center;
        font-size: 20px;        
    }
    .container.separe {
        width: 30px;
        height: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 8px;
        border-radius: 36px;
        background-color: #6019bd;
        box-shadow: -18px 18px 45px #7c7c7c,
                    18px -18px 45px #eaeaea;
    }
    
    /* Estilos específicos para el modo oscuro */
    .title-component.dark-style h1{    
        color: #ffffff;
    }
    .title-component.dark-style p{    
        color: #ffffff;
    }
</style>