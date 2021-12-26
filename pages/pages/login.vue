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

		<div class="container login-container">
			<div class="row">
				<div class="col-lg-10 mx-auto">
					<div class="row">
						<div class="col-md-6">
							<div class="heading mb-1">
								<h2 class="title">Войти</h2>
							</div>

							<form action="#" @submit.prevent="login">
								<label for="login-email">
									Email
									<span class="required">*</span>
								</label>
								<input
									type="email"
									class="form-input form-wide"
									id="login-email"
                  v-model="emailForLogin"
									required
								/>

								<label for="login-password">
									Пароль
									<span class="required">*</span>
								</label>
								<input
									type="password"
									class="form-input form-wide"
									id="login-password"
                  v-model="passwordForLogin"
									required
								/>

								<div class="form-footer">
									<div class="custom-control custom-checkbox mb-0">
										<input
											type="checkbox"
											class="custom-control-input"
											id="lost-password"
										/>
										<label
											class="custom-control-label mb-0"
											for="lost-password"
										>
											Запомнить меня
										</label>
									</div>

									<nuxt-link
										to="/pages/forgot-password"
										class="forget-password text-dark form-footer-right"
									>
										Забыли пароль?
									</nuxt-link>
								</div>
								<button
									type="submit"
									class="btn btn-dark btn-md w-100"
								>Войти</button>
							</form>
						</div>
						<div class="col-md-6">
							<div class="heading mb-1">
								<h2 class="title">Регистрация</h2>
							</div>

							<form @submit.prevent="onSubmit">
								<label for="register-email">
                  Email
									<span class="required">*</span>
								</label>
								<input
									type="email"
									class="form-input form-wide"
									id="register-email"
                  v-model="email"
									required
								/>

                <label for="register-email">
                  Номер телефона
                  <span class="required">*</span>
                </label>
                <input
                    pattern="^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$"
                    type="text"
                    class="form-input form-wide"
                    id="register-phoneNumber"
                    v-model="phone"
                    required
                />

                <label for="register-email">
                  Имя
                  <span class="required">*</span>
                </label>
                <input
                    type="text"
                    class="form-input form-wide"
                    id="register-name"
                    v-model="name"
                    required
                />

								<label for="input_test">
									Пароль
									<span class="required">*</span>
								</label>
								<input
									type="password"
									class="form-input form-wide"
									id="input_test"
                  v-model="password"
									required
								/>

                <label for="register-email">
                  Согласие на обработку персональных данных
                  <span class="required">*</span>
                </label>
                <input
                    type="checkbox"
                    class="form-input form-wide align-self-baseline"
                    id="register-agree"
                    v-model="personalDataAgree"
                    required
                />

								<div class="form-footer mb-2">
									<button
                    id="block_check"
										type="submit"
										class="btn btn-dark btn-md w-100 mr-0"
                    :disabled="isDisabled"
									>Регистрация</button>
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
  data(){
    return {
      name: '',
      phone: '',
      password: '',
      email: '',
      personalDataAgree: false,
      emailForLogin: '',
      passwordForLogin: '',
      isDisabled: false
    }
  },
  methods: {
    async onSubmit() {
      try{
        const data = {
          name: this.name,
          phone: this.phone,
          password: this.password,
          email: this.email,
          personalDataAgree: this.personalDataAgree,
          status: 'inactive',
          password_recovery_link: "activate.generate_some_strong_hash"
        }

        const res = await this.$axios.$post(`${this.host}/api/back/items/clients`, data)
        localStorage.setItem('id', res.data.id)
        this.$router.push('/profile/' + res.data.id)
        setTimeout(() => {location.reload()},100)
      } catch (e) {
        console.log(e)
        this.$store.dispatch('message/setMessage', {
          value: 'Аккаунт с данной почтой или с данным номером телефона уже зарегистрирован',
          type: 'warning'
        })
      }
    },
    async login(){
      try {
        const res = await this.$axios.$get(`${this.host}/api/back/items/clients?limit=1000&meta=*&filter={ "email": { "_eq": "${this.emailForLogin}", "password": { "_eq": "${this.passwordForLogin}" } }}`)
        localStorage.setItem('id', res.data[0].id)
        this.$store.dispatch('message/setMessage', {
          value: 'Вы успешно вошли',
          type: 'primary'
        })
        setTimeout(() => {
          this.$router.push('/profile/' + res.data[0].id)
        },3000)
      } catch (e) {
        this.$store.dispatch('message/setMessage', {
          value: 'Вы ввели не коректнные данные',
          type: 'danger'
        })
      }
    }
  },
  mounted() {
    let id = localStorage.getItem('id')
    if(id){
      this.$router.push('/profile/' + id)
    }
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы

    var input_test = document.getElementById('input_test');//получаем поле
    var block_check = document.getElementById('block_check');//получаем блок с индикатором

    input_test.addEventListener('keyup', function(evt){
      var input_test_val = input_test.value;//получаем значение из поля

      var is_s = false; // Есть ли в пароле буквы в нижнем регистре
      var is_b = false; // Есть ли в пароле буквы в верхнем регистре
      var is_d = false; // Есть ли в пароле цифры
      var is_sp = false; // Есть ли в пароле спецсимволы

      for (var i = 0; i < input_test_val.length; i++) {
        /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
        if (!is_s && s_letters.indexOf(input_test_val[i]) != -1) {
          is_s = true
        }
        else if (!is_b && b_letters.indexOf(input_test_val[i]) != -1) {
          is_b = true
        }
        else if (!is_d && digits.indexOf(input_test_val[i]) != -1) {
          is_d = true
        }
        else if (!is_sp && specials.indexOf(input_test_val[i]) != -1) {
          is_sp = true
        }
      }

      var rating = 0;
      if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
      if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
      if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
      if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
      /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
      if (input_test_val.length < 6 && rating < 3) {
        block_check.style.width = "10%";
        block_check.style.backgroundColor = '#e7140d';
        this.isDisabled === true
      }
      else if (input_test_val.length < 6 && rating >= 3) {
        block_check.style.width = "50%";
        block_check.style.backgroundColor = '#ffdb00';
      }
      else if (input_test_val.length >= 8 && rating < 3) {
        block_check.style.width = "50%";
        block_check.style.backgroundColor = '#ffdb00';
      }
      else if (input_test_val.length >= 8 && rating >= 3) {
        block_check.style.width = "100%";
        block_check.style.backgroundColor = '#61ac27';
      }
      else if (input_test_val.length >= 6 && rating == 1) {
        block_check.style.width = "10%";
        block_check.style.backgroundColor = '#e7140d';
      }
      else if (input_test_val.length >= 6 && rating > 1 && rating < 4) {
        block_check.style.width = "50%";
        block_check.style.backgroundColor = '#ffdb00';
      }
      else if (input_test_val.length >= 6 && rating == 4) {
        block_check.style.width = "100%";
        block_check.style.backgroundColor = '#61ac27';
      };
    });
  }
}
</script>
