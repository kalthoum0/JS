<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{title}}</h1>
  <input type= "text" ref="name">
  <button @click="handleClick">Click me</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data(){
    return{
     title: 'My First Vue App ;)'
    }
  },
  methods:{
    handleClick(){
    console.log(this.$refs.name)
    this.$refs.name.classList.add('input-ref')
    this.$refs.name.focus()
    }
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
