<template>
  <div class="alert" v-if="message.message">
    <div :class="['alert', message.message.type]">
      <p class="alert-title" v-if="title">{{title}}</p>
      <p v-if="message.message.value">{{message.message.value}}</p>
      <span class="alert-close" @click="close">&times;</span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      TITLE_MAP: {
        primary: 'Успешно!',
        danger: 'Ошибка!',
        warning: 'Внимание!'
      },
      close: () => this.$store.commit('message/clearMessage')
    }
  },
  computed: {
    message(){
      return this.$store.state.message
    },
    title(){
      return this.message ? this.TITLE_MAP[this.message.type] : null
    }
  }
}
</script>

<style scoped>


.alert.primary {
  border-color: #42b983;
  background-color: #f8f8f8;
}

.alert.danger {
  border-color: #e53935;
  background-color: #f8f8f8;
}

.alert.warning {
  border-color: #c25205;
  background-color: #f8f8f8;
}

.alert p {
  color: #222;
  line-height: 1.7;
}

.alert-title {
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: -.4rem;
  color: #222;
}

.alert-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 60px;
  width: 600px;
  padding: 1rem;
  background: #fff;
  z-index: 1000;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .35);
  z-index: 100;
}

.alert {
  padding: 1rem 1.5rem;
  border-left-width: .5rem;
  border-left-style: solid;
  margin: 1rem 0;
  position: fixed;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  bottom: 30px;
  right: 30px;
  width: 300px;
}

</style>
