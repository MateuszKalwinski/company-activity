<template>
  <div class="row">
    <input
      :is="element"
      @input="update"
      class="input"
      :class="inputClass"
      :name="name"
      :type="type"
      :value="text"
      :placeholder="placeholder"
      v-bind="$attrs"
    >
  </div>
</template>

<script>
    export default {
        name: "FormInput",
      computed:{
          inputClass(){
            return {
              invalid: this.invalid
            }
          },
          element(){
            return this.type === 'textarea' ? this.type : 'input'
          }
      },
      props:{
        name: {
          type:String,
          default: 'text',
        },
        type:{
          type: String,
          default: 'text',
        },
        text:{
          required: true,
        },
        placeholder:{
          type: String,
        },
        invalid:{
          type: Boolean,
          default: false,
        }
      },
      methods: {
          update(event){
            this.$emit('update', event.currentTarget.value)
          }
      },
      model:{
        prop: 'text',
        event: 'update'
      }
    }
</script>

<style scoped>

</style>
