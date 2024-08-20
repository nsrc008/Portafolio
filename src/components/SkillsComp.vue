<template>
    <div class="skills-component">
        <button class="skills"><span>{{ data.skill }}</span></button>
    </div> 
</template>
  
<script>
    export default {
    name: 'TitleComp',
    props: {
        titulo: {
            type: String,
            required: true
        },
        data: {
            type: Object,
            required: true
        }
    }
    };
</script>

<style>
    .skills-component {  
        padding-top: 1vh;
        padding-left: 1vh;
        cursor: initial;
        caret-color: transparent;        
    }
    .skills-component p{
        color: #E7E7E7;
        padding-top: 2vh;
        text-align: justify;
        font-size: 20px;        
    }    
    .skills{ 
        background: #E7E7E7;
        font-family: inherit;
        color: #666666;
        padding: 0.6em 1.3em;
        font-weight: 400;
        font-size: 18px;
        border: 3px solid #666666;
        border-radius: 0.4em;
        box-shadow: 0.1em 0.1em;
        cursor: default;
    }

    .skills:hover {
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em;
        cursor: default;
    }

    .skills:active {
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em;
    }   
</style>