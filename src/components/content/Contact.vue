<template>
  <div class="relative bg-blue-500 overflow-hidden pt-5 pb-10 md:p-0" id="contact">
    <div class="lg:w-1/2 max-w-screen-xl">
      <div class="relative bg-blue-500 lg:w-full hidden lg:block">
        <img class="w-full object-cover lg:w-full" src="@/assets/images/contact.jpg" alt="">
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="flex flex-col h-full w-full items-center justify-center py-6 px-6 bg-blue-500">
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

export default {
  name: "Contact",
  components: {
    ContactForm,
    SectionHeader
  },
}

</script>

<style scoped>

</style>