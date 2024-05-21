<template>
  <div class="container">
    <div class="left-container" :style="{ flex: leftExpanded ? '1 1 100%' : '0 1 50%' }">
      <button @click="toggleExpansion">Expandir</button>
    </div>
    <div class="right-container" :style="{ flex: leftExpanded ? '0 1 0%' : '1 1 50%' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftExpanded: false
    };
  },
  methods: {
    toggleExpansion() {
      this.leftExpanded = !this.leftExpanded;
    }
  }
};
</script>

<style>
.container {
  display: flex;
}

.left-container, .right-container {
  height: 200px;
  transition: flex 0.5s ease;
}

.left-container {
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-container {
  background-color: lightcoral;
}
</style>