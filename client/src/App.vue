<template>
  <div id="app">
     <h1>Mike's Reading List</h1>
    <!-- <hello-world /> -->
    <book-list />
    <add-book />
  </div>
</template>



<script>
  import BookList from './components/BookList.vue';
  import AddBook from './components/AddBook.vue'

  export default {
    name: 'App',
    components: {
      BookList,
      AddBook
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
    /* text-align: center; */
    color: #e6e6e6;
    margin-top: 60px;
  }
</style>
