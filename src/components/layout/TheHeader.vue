<template>
  <header>
    <nav class="
           flex
           items-center
           border-opacity-25
           justify-between
           flex-wrap bg-white
           p-6
           fixed
           top-0
           w-screen
           border-b
           border-blue-500
           border-solid
           z-50">
      <div class="flex items-center flex-shrink-0 mr-6">
        <svg-logo></svg-logo>
        <span class="font-semibold text-xl tracking-tight cursor-pointer" v-scroll-to="'#me'">Tyson McCarney</span>
      </div>

      <div class="block lg:hidden">
        <button @click="toggle"
                class="
                  flex
                  items-center
                  px-3
                  py-2
                  border
                  rounded
                  text-blue-500
                  border-blue-500
                  hover:text-blue-300
                  hover:border-blue-300">
          <svg-menu></svg-menu>
        </button>
      </div>

      <div
          class="
            transition-all
            duration-500
            ease-in-out
            w-full
            justify-between
            flex-grow
            lg:flex
            sm:items-center
            md:items-center
            lg:w-auto"
          :class="{'hidden': !open, 'block': open }">

        <div class="text-gray-700 text-md font-light tlg:flex-grow">
          <a v-scroll-to="'#about'"
             href="#about"
             class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-400 mr-4">
            About
          </a>
          <a v-scroll-to="'#contact'"
             href="#contact"
             class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-400 mr-4">
            Contact
          </a>
        </div>

        <div class="flex flex-row sm:mt-4 lg:mt-0">
          <a href="https://www.linkedin.com/in/tyson-mccarney-7582ba71/" class="mr-3" target="_blank">
            <img alt="LinkedIn" class="w-5 inline" src="@/assets/images/linkedin-logo.svg">
          </a>
          <a href="https://github.com/J-T-McC" target="_blank">
            <img alt="GitHub" class="w-5 inline" src="@/assets/images/github-logo.svg">
          </a>
        </div>
      </div>

    </nav>
  </header>
</template>

<script>
import SvgMenu from "@/components/icons/SvgMenu";
import SvgLogo from "@/components/icons/SvgLogo";

import {ref} from 'vue'

export default {
  name: "Header",
  components: {SvgLogo, SvgMenu},
  setup() {
    const open = ref(false)
    const toggle = () => {
      open.value = !open.value
    }
    return {
      open,
      toggle
    };
  },
}
</script>