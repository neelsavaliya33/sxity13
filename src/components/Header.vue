<template>
  <header class="fixed w-full top-0 bg-white dark:bg-gray-800">
    <div
      class="lg:container mx-auto flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white dark:bg-gray-800 py-6 px-3 lg:px-6 relative"
    >
      <a href="#" class="block">
        <span class="sr-only">themes.dev</span>
        <img class="h-9 md:h-12" src="./../assets/images/logo.png" />
      </a>
      <!-- @click="mobileMenuOpen = !mobileMenuOpen" -->
      <button
        v-on:click="heder()"
        class="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <nav
        class="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0"
        :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
      >
        <a href="#" class="header-items block py-1 text-green-theme dark:text-gray-400 hover:text-green-theme active"
          >Home</a
        >
        <a href="#" class="header-items block py-1 text-gray-600 dark:text-gray-400 hover:text-green-theme"
          >About us</a
        >
        <a href="#" class="header-items block py-1 text-gray-600 dark:text-gray-400 hover:text-green-theme"
          >Our Services</a
        >
        <a href="#" class="header-items block py-1 text-gray-600 dark:text-gray-400 hover:text-green-theme"
          >Portfolio</a
        >
        <a href="#" class="header-items block py-1 text-gray-600 dark:text-gray-400 hover:text-green-theme"
          >Career</a
        >
        <a href="#" class="header-items block py-1 text-gray-600 dark:text-gray-400 hover:text-green-theme"
          >Contact Us</a
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    heder() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>
