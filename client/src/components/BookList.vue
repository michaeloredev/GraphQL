<template>
<div>
    <ul id="book-list">
        <li v-for="book in books" :key="book.id">
            {{book.name}}
        </li>
    </ul>
</div>
    
</template>

<script>
import gql from 'graphql-tag';



export default {
    name:'BookList',
    apollo:{
        books: gql`query{
            books{
                   name
                   id
               }
        }`
    }
    
}
</script>