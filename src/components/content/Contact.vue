<template>
  <div class="relative bg-blue-500 overflow-hidden pt-5 pb-10 md:p-0" id="contact">
    <div class="lg:w-1/2 max-w-screen-xl">
      <div class="relative bg-blue-500 lg:w-full hidden lg:block">
        <img class="w-full object-cover lg:w-full" src="@/assets/images/banner.jpg" alt="">
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="flex flex-col h-full w-full items-center justify-center py-6 px-6 bg-blue-500">
          <section-header>Contact Me</section-header>
          <form class="w-full max-w-lg" name="contact" @submit.prevent="handleSubmit" netlify>
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
                    type="email"
                    required>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full">
                <label class="sr-only" for="message">Message</label>
                <textarea
                    v-model="form.message"
                    class="no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-24 xl:h-48"
                    placeholder="Message..."
                    id="message"
                    required>
                </textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                    class="border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out py-2 px-4"
                    type="submit">
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
import {useToast, POSITION} from "vue-toastification";
import axios from 'axios';

export default {
  name: "Contact",
  components: {
    SectionHeader
  },
  data() {
    return {
      form: {
        email: null,
        message: null,
        "form-name": "contact",
      },
      toast: useToast()
    };
  },
  methods: {
    createFormDataObj(data) {
      const formData = new FormData();
      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }
      return formData;
    },
    handleSubmit() {
      axios.post(
          "/",
          new URLSearchParams(this.createFormDataObj(this.form)).toString(),
          {
            header: {"Content-Type": "application/x-www-form-urlencoded"}
          }
      ).then((response) => {
        if (response.status === 200) {
          this.resetForm();
          this.toastMessage('success', 'E-mail Sent!');
        } else {
          this.toastMessage('error', 'Failed to sent E-mail');
        }
      }).catch(() => this.toastMessage('error', 'Failed to sent E-mail'));
    },
    resetForm() {
      this.form = {
        email: null,
        message: null,
        "form-name": "contact",
      };
    },
    toastMessage(type, text) {

      const toastTimeout = 2000;

      let toastID = this.toast[type](text, {
        timeout: toastTimeout,
        maxToasts: 1,
        position: POSITION.BOTTOM_RIGHT,
        toastClassName: "custom-toast-class",
        pauseOnFocusLoss: false
      });

      // required for dismiss - toast library timeout dismiss broken
      setTimeout(() => {
        this.toast.dismiss(toastID);
      }, toastTimeout);
    }
  }
}
</script>

<style>

/*.angle-split {*/
/*  --transform-translate-x: 49%;*/
/*}*/

.Vue-Toastification__toast--success.custom-toast-class {
  @apply bg-green-500;
}

.Vue-Toastification__toast--error.custom-toast-class {
  @apply bg-red-500;
}


</style>