<template>
  <header>
    <nav
        class="flex items-center border-opacity-25 justify-between flex-wrap bg-white p-6 fixed top-0 w-screen border-b border-blue-500 border-solid z-50">
      <div class="flex items-center flex-shrink-0 mr-6">

        <svg
            class="fill-current h-6 w-6 mr-2 text-blue-500 mt-1" enable-background="new 0 0 512 512"
            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
              d="m87.467 358.4c2.133 2.133 4.267 2.133 8.533 2.133s6.4 0 8.533-2.133l64-64c4.267-4.267 4.267-10.667 0-14.934l-64-64c-4.267-4.267-10.667-4.267-14.934 0s-4.267 10.667 0 14.934l55.467 55.467-55.466 55.467c-4.267 6.4-4.267 12.799-2.133 17.066z"/>
          <path class="animate-pulse-full-quick"
                d="m202.667 341.333h106.667c6.4 0 10.667-4.267 10.667-10.667s-4.267-10.667-10.667-10.667h-106.667c-6.4 0-10.667 4.267-10.667 10.667s4.267 10.667 10.667 10.667z"/>
          <path
              d="m458.667 0h-405.334c-29.866 0-53.333 23.467-53.333 53.333v405.333c0 29.867 23.467 53.334 53.333 53.334h405.333c29.867 0 53.334-23.467 53.334-53.333v-405.334c0-29.866-23.467-53.333-53.333-53.333zm-320 42.667c6.4 0 10.667 4.267 10.667 10.667s-4.268 10.666-10.667 10.666c-6.4 0-10.667-4.267-10.667-10.667s4.267-10.666 10.667-10.666zm-42.667 0c6.4 0 10.667 4.267 10.667 10.667s-4.267 10.666-10.667 10.666-10.667-4.267-10.667-10.667 4.267-10.666 10.667-10.666zm-42.667 0c6.4 0 10.667 4.267 10.667 10.667s-4.267 10.666-10.667 10.666-10.667-4.267-10.667-10.667 4.268-10.666 10.667-10.666zm437.334 416c0 17.066-14.934 32-32 32h-405.334c-17.066 0-32-14.934-32-32v-352h469.333v352z"/>
        </svg>

        <span class="font-semibold text-xl tracking-tight cursor-pointer" v-scroll-to="'#me'">Tyson McCarney</span>
      </div>

      <div class="block lg:hidden">
        <button @click="toggle"
                class="flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-blue-300 hover:border-blue-300">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      <div class="w-full flex-grow lg:flex sm:items-center md:items-center lg:w-auto" :class="{'hidden': !open, 'block': open }">
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
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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