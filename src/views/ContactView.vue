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

<template>
<div class="min-h-screen bg-neutral-900 flex flex-col items-center justify-center pb-10 space-y-3">

  <div class=" p-10 lg:w-1/2 md:w-1/2  justify-center items-center mb-10 text-gray-50 font-bold border-b-2 border-gray-300">
    <ul class="md:flex lg:flex justify-center items-center lg:space-x-8 md:space-y-0 lg:space-y-0 space-y-3 md:space-x-8">
      <li>Tel: 633391411</li>
      <li>Mail: joan@jctagency.com</li>
      <li>Direccion: Online</li>
      <li>Horario: L-V 9-20</li>
    </ul>
  </div>


  <div class="rounded-xl p-10  text-gray-950 lg:w-1/3  md:w-1/3 bg-gray-50">
    <form class="" @submit.prevent="handleSubmit" >
      <div class="flex flex-col space-y-5">
        <label class="font-bold"  >Nombre</label>
        <input class="rounded-xl" type="text" id="nombre" name="nombre" v-model="formFields.nombre"  required>
        <label class="font-bold" >Email</label>
        <input class="rounded-xl" type="email" id="email"  name="email" v-model="formFields.email"  required>
        <label class="font-bold" >Mensaje</label>
        <textarea class="rounded-xl p-2"  cols="30" id="mensaje" name="mensaje" rows="10" v-model="formFields.mensaje" required></textarea>
        <button type="submit" class="bg-gray-900 text-gray-50 rounded-xl p-2">Enviar</button>
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

<style scoped>

</style>