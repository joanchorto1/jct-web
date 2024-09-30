<template>
<div class="flex flex-col bg-gray-50 justify-center min-h-screen  space-y-40 items-center">
  <div class="flex flex-col justify-center space-y-10 border-b-8 border-gray-900 pb-24 border-gray-200 items-center">
    <h2 class="text-7xl text-gray-500 uppercase font-bold">Mejoramos constantemente!!</h2>
    <p class="text-xl text-gray-400 w-4/5 text-center ">Estamos reinventando nuestra empresa para ofrecerte el mejor producto para PTENCIAR i AGILIZAR al maximo tus tareas empresariales</p>
  </div>
  <div class="flex flex-col justify-center space-y-10 items-center">
    <h2 class="text-5xl text-gray-500 uppercase font-bold">Se acabo lo de estar tirando tu tiempo!</h2>
    <p class=" text-lg text-gray-400">Si te interesa saber mas información sobre nosotros dejanos tu mail y nos pondremos en contacto contigo</p>
    <form class="flex-col w-full items-center justify-center flex" @submit.prevent="handleSubmit" >
      <div class="flex  space-x-10">
        <div class="flex flex-col space-y-6">
          <label class="font-bold text-gray-500"  >Nombre</label>
          <input class="bg-gray-900 rounded-xl text-gray-100" type="text" id="nombre" name="nombre" v-model="formFields.nombre"  required>
        </div>
        <div class="flex flex-col space-y-6">
          <label class="font-bold text-gray-500" >Email</label>
          <input class="bg-gray-900 rounded-xl text-gray-100" type="email" id="email"  name="email" v-model="formFields.email"  required>
        </div>

      </div>
      <div class="flex flex-col mt-10 items-center justify-center">
        <button type="submit" class="bg-green-500 text-gray-50 rounded-xl px-6 p-2">Enviar</button>

      </div>
      <div v-if="isFormSubmitted">
        <p>¡Formulario enviado correctamente!</p>
      </div>
      <div v-if="submitedError">
        <p>¡ERROR!</p>
      </div>
    </form>

  </div>

</div>
</template>


<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      isFormSubmitted: false,
      submitedError: false,


      formFields: {
        nombre: '',
        email: '',
        mensaje: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      emailjs.sendForm('service_uaggcy8', 'template_yav8r89', this.$el.querySelector('form'), 'PrtHsOGCYBrChfJU3')
          .then((result) => {
            console.log(result.text);
            this.isFormSubmitted = true;
            this.clearFormFields();
          })
          .catch((error) => {
            console.log(error.text);
            this.isFormSubmitted = false;
            this.submitedError = true;
          });
    },
    clearFormFields() {
      this.formFields = {
        nombre: '',
        email: '',
        mensaje: ''
      };
    }
  }
};
</script>



<style scoped>

</style>