<template>
  <header>
    <nav class="flex items-center border-opacity-25 justify-between flex-wrap bg-white p-6 fixed top-0 w-screen border-b border-blue-500 border-solid z-50">

      <div class="flex items-center flex-shrink-0 mr-6">
        <svg-logo></svg-logo>
        <span class="font-semibold text-xl tracking-tight cursor-pointer" v-scroll-to="'#me'">Tyson McCarney</span>
      </div>

      <div class="block lg:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-blue-300 hover:border-blue-300">
            <svg-menu></svg-menu>
        </button>
      </div>

      <div class="transition-all duration-500 ease-in-out w-full flex-grow lg:flex sm:items-center md:items-center lg:w-auto"
           :class="{'hidden': !open, 'block': open }">
        <div class="text-gray-700 text-md font-light tlg:flex-grow">
          <a v-scroll-to="'#about'" href="#about" class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-400 mr-4">
            About
          </a>
          <a v-scroll-to="'#contact'" href="#contact" class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-400 mr-4">
            Contact
          </a>
        </div>
      </div>

    </nav>
  </header>
</template>

<script>
import SvgMenu from "@/components/vector/SvgMenu";
import SvgLogo from "@/components/vector/SvgLogo";
export default {
  name: "Header",
  components: {SvgLogo, SvgMenu},
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped>

</style>