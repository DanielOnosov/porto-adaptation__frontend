<template>
  <div>
    <div class="container profile" v-if="data.status === 'active'">
      <div class="card">
        <h3>Улица</h3>
        <input type="text" v-model="street" @click="change(data.street)">
        {{ data.street }}
        <button class="btn btn-dark" @click="change('street')">Изменить</button>
      </div>
      <div class="card">
        <h3>Квартира</h3>
        <input type="text" v-model="flat">
        {{ data.flat }}
        <button class="btn btn-dark" @click="change('flat')">Изменить</button>
      </div>
      <div class="card">
        <h3>Дом</h3>
        <input type="text" v-model="home">
        {{ data.home }}
        <button class="btn btn-dark" @click="change('home')">Изменить</button>
      </div>
      <div class="card">
        <h3>Местонахождение</h3>
        <input type="text" v-model="locality">
        {{ data.locality }}
        <button class="btn btn-dark" @click="change('locality')">Изменить</button>
      </div>
      <div class="card">
        <h3>Номер телефона</h3>
        <input type="text" v-model="phone">
        {{ data.phone }}
        <button class="btn btn-dark" @click="change('phone')">Изменить</button>
      </div>
      <div class="card">
        <h3>Email</h3>
        <input type="text" v-model="email">
        {{ data.email }}
        <button class="btn btn-dark" @click="change('email')">Изменить</button>
      </div>
      <div class="card">
        <h3>Пароль</h3>
        <button class="btn-dark btn mt-5" @click="getRecoveryLink">
          Изменить пароль
        </button>
      </div>
      <div class="card">
        <h3>Адрес</h3>
        <input type="text" v-model="address">
        {{ data.address }}
        <button class="btn btn-dark" @click="change('address')">Изменить</button>
      </div>
      <div class="card">
        <h3>Сорт</h3>
        <input type="text" v-model="sort">
        {{ data.sort }}
        <button class="btn btn-dark" @click="change('sort')">Изменить</button>
      </div>
      <div class="card" v-if="!data.personal_data_processing_agreements">
        <h3>Согласие на обработку персональных данных</h3>
        <input type="checkbox" v-model="personal_data_processing_agreements">
        {{ data.personal_data_processing_agreements }}
        <button class="btn btn-dark" @click="change('personal_data_processing_agreements')">Изменить</button>
      </div>
      <div class="card">
        <h3>Получать уведомления?</h3>
        <input type="checkbox" v-model="get_order_notification_agreements">
        {{ data.get_order_notification_agreements }}
        <button class="btn btn-dark" @click="change('get_order_notification_agreements')">Изменить</button>
      </div>
      <div class="card">
        <h3>Подписаться на рассылку</h3>
        <input type="checkbox" v-model="subscribe_news_agreements">
        {{ data.subscribe_news_agreements }}
        <button class="btn btn-dark" @click="change('subscribe_news_agreements')">Изменить</button>
      </div>
      <div class="card">
        <h3>Доставка</h3>
        <input type="checkbox" v-model="delivery">
        {{ data.delivery }}
        <button class="btn btn-dark" @click="change('delivery')">Изменить</button>
      </div>
      <button @click="deleteProfile" class="btn btn-danger h-25">
        Удалить профиль
      </button>
      <button @click="logout" class="btn btn-dark h-25">
        Выйти
      </button>
    </div>
    <div class="container" v-else>
      <div v-if="isSend !== true">
        <h3>Что бы перейти к профилю надо сначала подтвердить почту</h3>
        <button class="btn btn-dark" @click="handleAgree">Отправить подтверждение на почту</button>
      </div>
      <div v-else>
        <h3>Письмо было отправлено</h3>
      </div>
    </div>
  </div>
</template>

<script>
import MD5 from "crypto-js/md5";

export default {
  async asyncData({$axios, req, params}) {
    if (process.server) {
      const protocol = req.connection.encrypted ? "https" : "http";
      const host = `${protocol}://${req.headers.host}`;

      // create promise for get product

      var config_product = {
        method: 'get',
        url: `${host}/api/back/items/clients/${params.id}`,
      };

      var promiseGetLogin = await $axios(config_product).then((v) => {
        return v.data
      }).catch((e) => {
        redirect('/');
        console.log(e)
        return 'Product retrieve error'
      });

      return {
        data: promiseGetLogin.data,
        host
      }
    }
  },
  data() {
    return {
      delivery: null,
      subscribe_news_agreements: null,
      get_order_notification_agreements: null,
      personal_data_processing_agreements: null,
      sort: null,
      address: null,
      password: null,
      email: null,
      phone: null,
      locality: null,
      home: null,
      flat: null,
      street: null,
      isSend: false,
    }
  },
  async mounted() {
    if (localStorage.getItem('id') !== this.$route.params.id) {
      this.$router.push('/')
    }
  },
  methods: {
    async change(item) {
      let url = `${this.host}/api/back/items/clients/${this.$route.params.id}`
      if (item === 'delivery') {
        await this.$axios.$patch(url, {
          delivery: this.delivery
        })
      } else if (item === 'flat') {
        await this.$axios.$patch(url, {
          flat: this.flat
        })
      } else if (item === 'subscribe_news_agreements') {
        await this.$axios.$patch(url, {
          subscribe_news_agreements: this.subscribe_news_agreements
        })
      } else if (item === 'get_order_notification_agreements') {
        await this.$axios.$patch(url, {
          get_order_notification_agreements: this.get_order_notification_agreements
        })
      } else if (item === 'personal_data_processing_agreements') {
        await this.$axios.$patch(url, {
          personal_data_processing_agreements: this.personal_data_processing_agreements
        })
      } else if (item === 'sort') {
        await this.$axios.$patch(url, {
          sort: this.sort
        })
      } else if (item === 'address') {
        await this.$axios.$patch(url, {
          address: this.address
        })
      } else if (item === 'password') {
        await this.$axios.$patch(url, {
          password: this.password
        })
      } else if (item === 'email') {
        await this.$axios.$patch(url, {
          email: this.email
        })
      } else if (item === 'phone') {
        await this.$axios.$patch(url, {
          phone: this.phone
        })
      } else if (item === 'locality') {
        await this.$axios.$patch(url, {
          locality: this.locality
        })
      } else if (item === 'home') {
        await this.$axios.$patch(url, {
          home: this.home
        })
      } else if (item === 'street') {
        await this.$axios.$patch(url, {
          street: this.street
        })
      }
    },
    async deleteProfile() {
      let url = `${this.host}/api/back/items/clients/${this.$route.params.id}`
      await this.$axios.$patch(url, {
        status: 'draft'
      })
    },
    async getRecoveryLink() {
      let url = `${this.host}/api/back/items/clients/${this.$route.params.id}`

      const hash = MD5(this.data.id, this.data.email, this.data.date_created).toString()

      console.log(this.data.email)

      this.$mail.send({
        from: 'devtestbox@yandex.ru',
        subject: 'Contact form message',
        to: 'onosov20071@gmail.com',
        text: `http://${process.env.SITE_URL}/activate/?id=${this.data.email}&activate=${hash}`,
      })

      await this.$axios.$patch(url, {
        status: 'inactive',
        password_recovery_link: 'new_password.generate_some_strong_hash'
      })

    },
    logout(){
      localStorage.removeItem('id')
      this.$router.push('/pages/login')
      setTimeout(() => {
        location.reload()
      }, 1500)
    },
    async handleAgree(){
      let url = `${this.host}/api/back/items/clients/${this.$route.params.id}`

      const hash = MD5(this.data.id, this.data.email, this.data.date_created).toString()

      console.log(this.data.email)

      this.$mail.send({
        from: 'devtestbox@yandex.ru',
        subject: 'Contact form message',
        to: 'onosov20071@gmail.com',
        text: `http://${process.env.SITE_URL}/activate/?id=${this.data.email}&activate=${hash}`,
      })

      await this.$axios.$patch(url, {
        status: 'inactive',
        password_recovery_link: 'activate'
      })

      this.isSend = true
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 5px;

  .card {
    border: 2px solid #e7e7e7;
    padding: 10px;
    width: 343px;
    height: 230px;
    margin: 0 25px 25px 25px;
    color: black;

    input {
      border: 0px;
      border-bottom: 1px solid black;
      margin: 10px 0;
      padding: 5px 10px;
    }
  }
}

@media screen and (max-width: 810px) {
  .card {
    width: 100% !important;
  }
}
</style>
