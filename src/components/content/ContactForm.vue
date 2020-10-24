<template>
  <form class="w-full max-w-lg" name="contact" @submit.prevent="handleSubmit">
    <div class="flex flex-wrap ">
      <div class="w-full">
        <label class="sr-only" for="email">
          E-mail
        </label>
        <input
            v-model="form.email"
            class="
                appearance-none
                block
                w-full
                text-gray-700
                border
                border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
            "
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
            class="
               block
               w-full
               h-24
               xl:h-48
               text-gray-700
               border
               rounded
               border-gray-200
               py-3
               px-4
               focus:outline-none
               focus:bg-white
               focus:border-gray-500"
            placeholder="Message..."
            id="message"
            required>
        </textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
            class="
               font-medium
               rounded-md
               text-blue-700
               bg-indigo-100
               hover:text-indigo-600
               hover:bg-indigo-200
               focus:outline-none
               transition duration-150
               ease-in-out
               py-2
               px-4
               mt-3"
            type="submit">Send
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>
  </form>

</template>

<script>

import axios from "axios";
import {useToast, POSITION} from "vue-toastification";

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        email: null,
        message: null,
        "form-name": "contact",
      },
    }
  },
  setup() {
    return {
      toast: useToast()
    }
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
      axios.post("/", new URLSearchParams(
          this.createFormDataObj(this.form)
      ).toString(), {
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(response => {
        if (response.status === 200) {
          this.resetForm();
          this.toastMessage('success', 'E-mail Sent!');
        } else {
          throw new Error(response.statusText)
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
        position: POSITION.BOTTOM_RIGHT,
        toastClassName: "custom-toast-class",
        pauseOnFocusLoss: false
      });

      // required for dismiss - toast library timeout dismiss currently broken
      // see: https://github.com/Maronato/vue-toastification/issues/137
      setTimeout(() => {
        this.toast.dismiss(toastID);
      }, toastTimeout);
    }
  }
}

</script>

<style>


</style>