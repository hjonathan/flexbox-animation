<template>
  <div id="app">
      <main class="d-flex flex-column h-100">
          <div
              class="d-flex justify-content-between align-items-center p-2 text-white bg-dark bg-opacity-75 shadow-sm">
              <div class="d-flex align-items-center">
                  <img
                      class="me-3"
                      src="https://jonathanquispe.developer.processmaker.net/img/processmaker_icon.png?id=8122489cabc54a228d6b8e8efb72dece"
                      alt=""
                      width="45"
                      height="48" />
                  <div class="lh-1">
                      <h1 class="h6 mb-0 text-white lh-1">ProcessMaker</h1>
                  </div>
              </div>

              <div class="d-flex align-items-center">
                  <div
                      class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <button
                          type="button"
                          class="btn btn-primary btn-sm px-4 gap-3">
                          Share SlideShow
                      </button>
                      <button
                          type="button"
                          class="btn btn-secondary btn-sm px-4">
                          Options
                      </button>
                  </div>
              </div>
          </div>

          <div class="d-flex bg-dark bg-opacity-10 h-100">
              <div class="left-container" :class="{ expanded: leftExpanded }">
                  <ModelerSection @pickup="pickup" />
              </div>

                  <div
                      class="d-flex flex-column right-container" :class="{ contracted: leftExpanded }">
                      <ScreenSection></ScreenSection>
                  </div>
          </div>
      </main>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import Carrousel from "./components/Carrousel.vue"
import ScreenSection from "./components/ScreenSection.vue"
import ModelerSection from "./components/ModelerSection.vue"
import { defineComponent, ref } from "vue"
import { defineModel } from "./utils/vue-utils"

export default defineComponent({
  components: {
      HelloWorld,
      Carrousel,
      ScreenSection,
      ModelerSection,
  },
  setup() {
      const showSreenSection = ref(true)

      const leftExpanded =ref(false)

      const pickup = ()=>{
        leftExpanded.value = !leftExpanded.value;
      }

      return {
          showSreenSection,
          leftExpanded,
          pickup
      }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.left-container, .right-container {
  width: 50%;
  transition: width 0.3s ease-in;
}

.left-container.expanded {
  width: 100%;
}

.right-container.contracted {
  width: 0%;
}

</style>
