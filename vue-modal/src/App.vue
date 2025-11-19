<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <h1>{{title}}</h1> 
    <!-- <input type= "text" ref="name">
    <button @click="handleClick">Click me</button> -->
    <teleport to=".modal" v-if="showModal">
     <Modal theme="sale" @close="toggleModal" ><!--:header='header' :text="text" -->
       <h1>Sign up for the Giveaway!</h1> 
       <p>Grab the offer</p>
       <template v-slot:links>     
        <a href="#">sign up now</a><br>
        <a href="#">more info</a>
      </template>
     </Modal>
    </teleport>
    <button @click="toggleModal">open modal</button>
    <!-- CHALLENGE
    <div v-if="showModalTwo">
      <Modal theme="sale" @close="toggleModalTwo">
        <h1>Hello this is the second modal</h1>
        <p>Nailed itt</p>
        <select>
          <option>A</option>
          <option>B</option>
        </select>
      </Modal>
    </div>
    <button @click="toggleModalTwo">open Modal 2</button> -->        
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
  //   HelloWorld
    Modal
  },
  data(){
    return{
     title: 'My First Vue App ;)',
     header: 'Sign up for the Giveaway!',
     text: 'Grab the offer',
     showModal: false,
    //  CHALLENGE showModalTwo: false
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    },
    /*CHALLENGE
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }*/
  }
 
 /*methods:{
      handleClick(){
      console.log(this.$refs.name)
      //to address the ref use $
      this.$refs.name.classList.add('input-ref')
      this.$refs.name.focus()
      }
  }*/
   
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


