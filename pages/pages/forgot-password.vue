<template>
	<main class="main">
		<div class="page-header">
			<div class="container d-flex flex-column align-items-center">
				<nav
					aria-label="breadcrumb"
					class="breadcrumb-nav"
				>
					<div class="container">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<nuxt-link to="/">
									<i class="icon-home"></i>
								</nuxt-link>
							</li>
							<li class="breadcrumb-item">
								<nuxt-link to="/shop">Shop</nuxt-link>
							</li>
							<li
								class="breadcrumb-item active"
								aria-current="page"
							>My Account</li>
						</ol>
					</div>
				</nav>

				<h1>My Account</h1>
			</div>
		</div>

		<div class="container reset-password-container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<div class="feature-box border-top-primary">
						<div class="feature-box-content">
							<form
								class="mb-0"
								action="#"
                @submit.prevent="getRecoveryLink"
							>
								<p>
                  Забыли пароль? Пожалуйста, введите ваш адрес электронной почты. Вы получите
                  ссылку для создания нового пароля по электронной почте.
								</p>
								<div class="form-group mb-0">
									<label
										for="reset-email"
										class="font-weight-normal"
									>Email</label>
									<input
										type="email"
										class="form-control"
										id="reset-email"
										name="reset-email"
										required
                    v-model="email"
									/>
								</div>

								<div class="form-footer mb-0">
									<nuxt-link to="/pages/login">Нажмите здесь, чтобы войти</nuxt-link>

									<button
										type="submit"
										class="btn btn-md btn-primary form-footer-right font-weight-normal text-transform-none mr-0"
									>Отправить письмо</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import MD5 from "crypto-js/md5";

export default {
  async asyncData({ req}){
    if(process.server){
      const protocol = req.connection.encrypted ? "https" : "http";
      const host = `${protocol}://${req.headers.host}`;

      return {
        host
      }
    }
  },
  methods: {
    async getRecoveryLink() {
      let url = `${this.host}/api/back/items/clients/${this.$route.params.id}`

      const hash = MD5(this.email).toString()

      this.$mail.send({
        from: 'devtestbox@yandex.ru',
        subject: 'Contact form message',
        to: this.email,
        text: `http://${process.env.SITE_URL}/activate/?email=${this.email}&activate=${hash}`,
      })

      await this.$axios.$patch(url, {
        status: 'inactive',
        password_recovery_link: 'new_password.generate_some_strong_hash'
      })
    },
  },
  data(){
    return {
      email: ''
    }
  }
}
</script>
