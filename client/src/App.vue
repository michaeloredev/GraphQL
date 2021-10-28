<template>
  <div id="app">
     <h1>Mike's Reading List</h1>
    <!-- <hello-world /> -->
    <book-list />
   
  </div>
</template>



<script>
// import HelloWorld from './components/HelloWorld.vue'
import BookList from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    BookList
  }
}
</script>



<style>
body{
  background:darkgrey
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6e6e6;
  margin-top: 60px;
}

</style>
