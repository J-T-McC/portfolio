<template>
  <div class="relative bg-blue-500 overflow-hidden -mb-px">
    <div class="lg:w-1/2 max-w-screen-xl h-screen">
      <div class="relative pb-8 bg-blue-500 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 ">
        <svg class="hidden z-10 lg:block absolute right-0 inset-y-0 h-full w-64 text-blue-500 transform angle-split"
             fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100"/>
        </svg>
        <main class="mx-auto max-w-screen-xl xl:py-30 lg:py-20 py-5 px-10 h-screen flex items-center justify-center">
          <div class="sm:text-center lg:text-left z-20 text-white">
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-5xl">
              Full Stack Developer
            </h2>
            <p class="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Add a brief description of what it is you do. Make sure its long enough to wrap on a few lines so the
              content is balanced.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow" v-scroll-to="'#about'">
                <a href="#"
                   class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  About
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3" v-scroll-to="'#contact'">
                <a href="#"
                   class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full banner-img"
          src="@/assets/images/banner.jpg"
          alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Me",
  data() {
    return {}
  }

}
</script>

<style scoped>

.angle-split {
  --transform-translate-x: 44%;
}

.banner-img {
  object-position: -1rem 4rem;
  -webkit-filter: grayscale(50%);
  filter: grayscale(50%);
}

</style>