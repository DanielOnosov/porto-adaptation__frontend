<template>
  <div class="container card-body">
    <form @submit.prevent="patchData" v-if="isPasswordRecovery">
      <input v-model="newPassword" class="form-control" type="password" placeholder="Введите новый пароль">
      <button class="btn btn-dark">Сохранить</button>
    </form>
    <form @submit.prevent="handleAgree" v-else>
      <button @click="" class="btn btn-dark" id="accept">Подтвердить почту</button>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({$axios, req, query}) {
    if (process.server) {
      const protocol = req.connection.encrypted ? "https" : "http";
      const host = `${protocol}://${req.headers.host}`;

      // create promise for get product

      var config_product = {
        method: 'get',
        url: `${host}/api/back/items/clients?limit=1000&meta=*&filter={ "email": { "_eq": "${query.email}", "password": { "_eq": null } }}`,
      };

      var promiseGetLogin = await $axios(config_product).then((v) => {
        return v.data
      }).catch((e) => {
        console.log(e)
        return 'Product retrieve error'
      });

      return {
        data: promiseGetLogin.data,
        host
      }
    }
  },
  data(){
    return {
      newPassword: '',
      isPasswordRecovery: null
    }
  },
  mounted() {
    if(this.data[0].status === 'new_password.generate_some_strong_hash'){
      this.isPasswordRecovery = false
    }
  },
  methods: {
    async patchData(){
      let url = `${this.host}/api/back/items/clients/${this.data[0].id}`

      await this.$axios.$patch(url, {
        status: 'active',
        password_recovery_link: null,
        password: this.newPassword
      })

      this.$router.push('/pages/login')
    },
    async handleAgree(){
      this.$mail.send({
        from: 'devtestbox@yandex.ru',
        subject: 'подтвердить почту',
        to: this.data.email
      })

      this.$router.push('/pages/login')
    }
  }
}
</script>

<style scoped>

</style>
