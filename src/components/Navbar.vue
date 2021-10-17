<template>
  <div class='navbar'>
    <div @click='$router.push("/")'>
      Akson-vue
    </div>
    <div class='navbar__btns'>
      <it-button
          @click='$router.push("/pages")'
      >
        Posts
      </it-button>
      <it-button
          @click='$router.push("/store")'
      >
        Store
      </it-button>
    </div>
  </div>
</template>

<script>
import ItButton from './UI/ItButton';
export default {
  components: {ItButton}
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>