<template>

<form id="add-book">

        <div className="field">
          <label>Book name:</label>
          <input type="text" v-model="inputName" />
        </div>
        
        <div className="field">
          <label>Genre:</label>
          <input type="text" v-model="inputGenre" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select v-model="selected">
            <option value=''>Select Author</option>
            <option
                v-for="author in authors"
                :value="author.id"
                :key="author.id"
            >
               
               {{ author.name }}              
            </option>
               
          </select>
        </div>
        <button> + </button>

      </form>
    
</template>

<script>
import gql from 'graphql-tag';

export default {
    name:'AddBook',
    data: function(){
        return{
            selected:'',
            inputName:'',
            inputGenre:''
        }
    },
    watch:{
        selected:function(val){
            console.log(val)
        },
        inputName:function(val){
            console.log(val)
        },
        inputGenre:function(val){
            console.log(val)
        }
    },
    apollo:{
        authors: gql`query{
            authors{
                   name
                   age
                   id
               }
        }`
    }
    
}
</script>