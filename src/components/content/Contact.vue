<template>
  <div class="relative bg-blue-500 overflow-hidden" id="contact">
    <div class="lg:w-1/2 max-w-screen-xl">
      <div class="relative bg-blue-500 lg:w-full hidden lg:block ">
        <img class="w-full object-cover lg:w-full" src="@/assets/images/banner.jpg" alt="">
<!--        <svg class="hidden z-20 lg:block absolute right-0 inset-y-0 h-full w-64 text-blue-500 transform angle-split"-->
<!--             fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">-->
<!--          <polygon points="50,0 100,0 50,100 0,100"/>-->
<!--          &lt;!&ndash;          <polygon points="100,0 100,0 100,100 0,100"/>&ndash;&gt;-->
<!--        </svg>-->
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" >
        <div class="flex flex-col h-full w-full items-center justify-center py-6 px-6 bg-blue-500">
          <section-header>Contact Me</section-header>
          <form class="w-full max-w-lg" name="contact" >
            <div class="flex flex-wrap ">
              <div class="w-full">
                <label class="sr-only" for="email">
                  E-mail
                </label>
                <input
                    v-model="form.email"
                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="E-Mail Address"
                    id="email"
                    type="email">
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full">
                <label class="sr-only" for="message">
                  Message
                </label>
                <textarea
                    v-model="form.message"
                    class="no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-24 xl:h-48"
                    placeholder="Message..."
                    id="message">
            </textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                    @click="submitForm"
                    class="border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out py-2 px-4"
                    type="button">
                  Send
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SectionHeader from "@/components/reusable/SectionHeader";
import axios from 'axios';

export default {
  name: "Contact",
  components: {
    SectionHeader,
  },
  data() {
    return {
      form: {
        email: null,
        message: null,
      }
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      axios.post('https://tysonmccarney.com', {...this.form}).then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error);
      })

    }
  }
}
</script>

<style scoped>

.angle-split {
  --transform-translate-x: 49%;
}

</style>