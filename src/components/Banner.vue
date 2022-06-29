<template>
  <div class="bg-white dark:bg-gray-800 py-10">
    <div class="lg:container mx-auto px-4 lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div
          class="col-span-12 lg:col-span-5 mx-auto order-2 lg:order-1 mt-5 dm:mt-0 overflow-hidden dark:text-white"
        >
          <p class="text-sm sm:text-xl ">
            Top Web and Mobile Apps Development Company
          </p>
          <h1 class="text-5xl lg:text-7xl font-bold mt-8">
            Your Trusted Development Partner
          </h1>
          <p class="mt-8 text-sm sm:text-xl">
            We deliver web and mobile app development services to global
            businesses since 2017, with 100% project delivery success. Hire the
            best programmers at affordable prices. Our design-focused approach and
            project execution processes help you to deliver the right solutions.
          </p>
          <button
            class="text-sm sm:text-xl bg-green-theme hover:bg-transparent py-2 lg:py-3 px-3 lg:px-5 rounded-2xl text-white hover:text-green-theme font bold border-2 border-green-theme duration-500 mt-8"
          >
            What we do
          </button>
        </div>
        <div class="col-span-12 lg:col-span-7 banner-image order-1 lg:order-2">
          <img src="./../assets/images/rocket.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>