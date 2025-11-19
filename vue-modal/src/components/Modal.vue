<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme=== 'sale'}">
      <!-- <h1>{{header}}</h1>
      <p>{{text}}</p>       -->
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "AppModal",
    //props: ['header','text','theme','showModal'],
    props: ['theme'],
    methods: {
      closeModal(){
        this.$emit('close')//the arguments are going to be the name of the function we want to emit 
      }
    }
  }
  
</script>

<style scoped>
.modal{
  width: 400px;
  padding:20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop{
  top: 0;
  position:fixed;
  background:rgba(30, 30, 30, 0.5);
  width: 100%;
  height: 100%;  
}

h1{
  color: green;
}

.modal.sale{
  background:red;
  color: white;
}

/* .backdrop.show{
  display: block;
} */
</style>
