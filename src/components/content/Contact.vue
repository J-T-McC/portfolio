<template>
  <div class="relative overflow-hidden pt-5 pb-10 md:p-0 bg-blue-500 dark:bg-blue-900 z-20 transition-colors duration-500" id="contact">
    <div class="lg:w-1/2 max-w-screen-xl">
      <div class="relative lg:w-full hidden lg:block">
        <img v-if="!isMobileOnly" class="w-full object-cover lg:w-full" src="https://res.cloudinary.com/ddaji66m6/image/upload/f_auto/portfolio/contact_vyld16.jpg" alt="">
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="flex flex-col h-full w-full items-center justify-center py-6 px-6 bg-blue-500 dark:bg-blue-900">
          <section-header>Contact Me</section-header>
          <contact-form></contact-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SectionHeader from "@/components/reusable/SectionHeader";
import ContactForm from "@/components/content/ContactForm";
import { isMobileOnly } from 'mobile-device-detect';

export default {
  name: "Contact",
  setup() {
    return {
      isMobileOnly
    };
  },
  components: {
    ContactForm,
    SectionHeader
  },
}

</script>

<style scoped>

</style>