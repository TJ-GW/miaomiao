
<template>
        <div>
             <Header></Header>
             <Content></Content>
             <Nav></Nav>
        </div>
   
</template>
<script>
import Content from './components/Content.vue';
import  Header from './components/Header.vue';
import  Nav from './components/Nav.vue';
import router from 'vue-router'

export default {
      components:{
              Content,
              Header,
              Nav

      }
      

   
      }  
</script>