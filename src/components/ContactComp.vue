<template>    
    <div class="container content-contact" :class="{'dark-style': darkMode }">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="label-contact" :class="{'dark-style': darkMode }"><b>Name</b></label>
            <input type="email" class="form-control" :class="{'dark-style': darkMode }" id="exampleFormControlInput1" placeholder="Enter Your Name">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="label-contact" :class="{'dark-style': darkMode }"><b>Email</b></label>
            <input type="email" class="form-control" :class="{'dark-style': darkMode }" id="exampleFormControlInput1" placeholder="Enter Your Email">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="label-contact" :class="{'dark-style': darkMode }"><b>Menssage</b></label>
            <textarea class="form-control" :class="{'dark-style': darkMode }" id="exampleFormControlTextarea1" rows="10" placeholder="Enter Your Menssage"></textarea>
        </div>
        <button class="cti contact">
            <div class="CTI" :class="{'dark-style': darkMode }">
            SUBMIT
            </div>
        </button>  
    </div>
       
</template>

<script>
export default {
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
};
</script>

<style>
    .cti.contact {
        margin-top: 3vh;
        align-items: right;
        width: 250px;
    }
    .container.content-contact {
        background-color: #fff;
        border-radius: 5px;
        padding: 5vh;
        margin-top: 3vh;
    }
    .label-contact {
        font-size: 20px;
        color: #666666;
        caret-color: transparent;
        padding-bottom: 10px;
    }

    /* Estilos específicos para el modo oscuro */
    .container.content-contact.dark-style {    
        background-color: #202124;
    }
    .label-contact.dark-style {
        color: #fff;
    }
    .form-control.dark-style {
        background-color: #393A3D;
        color: rgb(255, 255, 255);
    }
    .form-control.dark-style::placeholder {
        color: rgba(255, 255, 255, 0.267);
    }
    .form-control.dark-style:focus {
        background-color: #202124;
        border: 1px #6019bd solid;
        outline: none;
        color: #fff;
    }
    .form-control.dark-style:focus::placeholder {
        color: #6019bd;
    }
</style>