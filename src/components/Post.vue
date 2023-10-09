<template>
  <div>

  <h1>Post Details</h1>
  <router-link :to="`/post/${$route.params.id}/comments`">View Comments</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Post"
}
</script>

<style scoped>

</style>