<template>
  <div class="py-10 dark:bg-gray-800 dark:text-white">
    <div class="lg:container mx-auto px-4 lg:px-0">
      <h3 class="text-3xl lg:text-5xl font-bold text-center">
        Technologies we work with
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5">
      <div
        class="
          col-span-12
          mx-auto
          order-2
          lg:order-2
          dm:mt-0
          overflow-hidden
          dark:text-white
          pl-10
        "
      >
        <p class="text-sm sm:text-xl text-cnter">
          A skilful combination of brand new technologies with dignified
          classic. Only the most stable solutions for your businesses.
        </p>
        <div class="tec-tab mt-12">
          <div class="flex justify-between">
            <div
              class="cursor-pointer tabs hover:text-green-600"
              :class="{ active: activeTacTab == 'UI/UX' }"
              v-on:click="activeTab('UI/UX')"
            >
              UI/UX
            </div>
            <div
              class="cursor-pointer tabs hover:text-green-600"
              :class="{ active: activeTacTab == 'Front End' }"
              v-on:click="activeTab('Front End')"
            >
              Front End
            </div>
            <div
              class="cursor-pointer tabs hover:text-green-600"
              :class="{ active: activeTacTab == 'Backend' }"
              v-on:click="activeTab('Backend')"
            >
              Backend
            </div>
            <div
              class="cursor-pointer tabs hover:text-green-600"
              :class="{ active: activeTacTab == 'Database' }"
              v-on:click="activeTab('Database')"
            >
              Database
            </div>
            <div
              class="cursor-pointer tabs hover:text-green-600"
              :class="{ active: activeTacTab == 'Mobile' }"
              v-on:click="activeTab('Mobile')"
            >
              Mobile
            </div>
            <div
              class="cursor-pointer tabs hover:text-green-600"
              :class="{ active: activeTacTab == 'Infra and DevOps' }"
              v-on:click="activeTab('Infra and DevOps')"
            >
              Infra
            </div>
          </div>
          <div class="tab-content">
            <div
              class="mt-8 justify-evenly"
              :class="{
                flex: activeTacTab == 'UI/UX',
                hidden: activeTacTab != 'UI/UX',
              }"
            >
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/adobe-photoshop-logo.png"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Photoshop</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img src="./../assets/images/XD.png" class="mx-auto" alt="" />
                </div>
                <p>XD</p>
              </div>
            </div>

            <div
              class="mt-8 justify-evenly"
              :class="{
                flex: activeTacTab == 'Front End',
                hidden: activeTacTab != 'Front End',
              }"
            >
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/angular.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Angular</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/react.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>React</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/vue.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Vue</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/html.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>HTML</p>
              </div>
            </div>

            <div
              class="mt-8 justify-evenly"
              :class="{
                flex: activeTacTab == 'Backend',
                hidden: activeTacTab != 'Backend',
              }"
            >
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/php.png"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>PHP</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/node.png"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>node js</p>
              </div>
            </div>

            <div
              class="mt-8 justify-evenly"
              :class="{
                flex: activeTacTab == 'Database',
                hidden: activeTacTab != 'Database',
              }"
            >
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/mysql.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Mysql</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/node.png"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>node js</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/mongo.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Mongo db</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/firebase.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Firebase</p>
              </div>
            </div>

            <div
              class="mt-8 justify-evenly"
              :class="{
                flex: activeTacTab == 'Mobile',
                hidden: activeTacTab != 'Mobile',
              }"
            >
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/ios.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>ios</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/andriod.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Andriod</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/flutter.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Flutter</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/kotlin.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Kotlin</p>
              </div>
            </div>

            <div
              class="mt-8 justify-evenly"
              :class="{
                flex: activeTacTab == 'Infra and DevOps',
                hidden: activeTacTab != 'Infra and DevOps',
              }"
            >
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/googlecloud.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Google Cloud</p>
              </div>
              <div class="item text-center">
                <div class="image">
                  <img
                    src="./../assets/images/DigitalOcean_logo.svg"
                    class="mx-auto"
                    alt=""
                  />
                </div>
                <p>Digitalocean</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Technologies",
  data() {
    return {
      activeTacTab: "UI/UX",
    };
  },
  methods: {
    activeTab(tab) {
      this.activeTacTab = tab;
    },
  },
};
</script>