<template>
  <section id="contact" class="py-20 bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact Me</h2>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <a :href="`tel:${contactInfo.phone}`" class="contact-link">
          <Phone :size="24" />
          <span>{{ contactInfo.phone }}</span>
        </a>
        <a :href="contactInfo.github" target="_blank" class="contact-link">
          <Github :size="24" />
          <span>GitHub</span>
        </a>
        <a :href="contactInfo.linkedin" target="_blank" class="contact-link">
          <Linkedin :size="24" />
          <span>LinkedIn</span>
        </a>
      </div>
      <div class="flex flex-wrap mt-12 items-center">
        <div class="w-full md:w-1/2 px-4">
          <ContactThreeCanvas />
        </div>
        <div class="w-full md:w-1/2 px-4">
          <form @submit.prevent="handleSubmit" class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <div class="mb-4">
              <label for="name" class="form-label">Name</label>
              <input v-model="form.name" type="text" id="name" class="form-input">
            </div>
            <div class="mb-4">
              <label for="email" class="form-label">Email</label>
              <input v-model="form.email" type="email" id="email" class="form-input">
            </div>
            <div class="mb-6">
              <label for="message" class="form-label">Message</label>
              <textarea v-model="form.message" id="message" rows="4" class="form-input"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button class="btn-submit" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { contactInfo } from '../constants/contact';
import ContactThreeCanvas from '../components/ContactThreeCanvas.vue';
import { Phone, Github, Linkedin } from 'lucide-vue-next';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all fields.');
    return;
  }
  // Handle form submission logic here
  console.log('Form submitted:', form.value);
  alert('Thank you for your message!');
  form.value = { name: '', email: '', message: '' };
};
</script>

<style scoped>
.contact-link {
  @apply flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 dark:text-gray-200;
}

.form-label {
  @apply block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2;
}

.form-input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none bg-gray-200 dark:bg-gray-600 transition-all duration-300 focus:border-primary dark:focus:border-primary-dark focus:ring-2 focus:ring-primary;
}

.btn-submit {
  @apply bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary;
}
</style>
