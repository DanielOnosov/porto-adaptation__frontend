<template>
	<footer class="footer bg-dark">
		<div class="footer-middle">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-sm-6">
						<div class="widget">
							<h4 class="widget-title">Contact Info</h4>
							<ul class="contact-info">
								<li>
									<span class="contact-info-label">Address:</span>123 Street Name, City, England
								</li>
								<li>
									<span class="contact-info-label">Phone:</span>
									<a href="javascript:;">
										(123)
										456-7890
									</a>
								</li>
								<li>
									<span class="contact-info-label">Email:</span>
									<a href="javascript:;">mail@example.com</a>
								</li>
								<li>
									<span class="contact-info-label">Working Days/Hours:</span>
									Mon - Sun / 9:00 AM - 8:00 PM
								</li>
							</ul>
							<div class="social-icons">
								<a
									href="javascript:;"
									class="social-icon social-facebook icon-facebook"
									
									title="Facebook"
								></a>
								<a
									href="javascript:;"
									class="social-icon social-twitter icon-twitter"
									
									title="Twitter"
								></a>
								<a
									href="javascript:;"
									class="social-icon social-instagram icon-instagram"
									
									title="Instagram"
								></a>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="widget">
							<h4 class="widget-title">Customer Service</h4>

							<ul class="links">
								<li>
									<a href="javascript:;">Help & FAQs</a>
								</li>
								<li>
									<a href="javascript:;">Order Tracking</a>
								</li>
								<li>
									<a href="javascript:;">Shipping & Delivery</a>
								</li>
								<li>
									<a href="javascript:;">Orders History</a>
								</li>
								<li>
									<a href="javascript:;">Advanced Search</a>
								</li>
								<li>
									<nuxt-link to="/pages/account">My Account</nuxt-link>
								</li>
								<li>
									<a href="javascript:;">Careers</a>
								</li>
								<li>
									<nuxt-link to="/pages/about-us">About Us</nuxt-link>
								</li>
								<li>
									<a href="javascript:;">Corporate Sales</a>
								</li>
								<li>
									<a href="javascript:;">Privacy</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="widget">
							<h4 class="widget-title">Popular Tags</h4>

							<div class="tagcloud">
								<nuxt-link :to="{path: '/shop', query: {tag: 'bag'}}">Bag</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'black'}}">Black</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'blue'}}">Blue</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'clothes'}}">Clothes</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'fashion'}}">Fashion</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'hub'}}">Hub</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'shirt'}}">Shirt</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'shoes'}}">Shoes</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'skirt'}}">Skirt</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'sports'}}">Sports</nuxt-link>
								<nuxt-link :to="{path: '/shop', query: {tag: 'sweater'}}">Sweater</nuxt-link>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="widget widget-newsletter">
							<h4 class="widget-title">Subscribe newsletter</h4>
							<p>Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
							<form
								action="#"
								class="mb-0"
							>
								<input
									type="email"
									class="form-control m-b-3"
									placeholder="Email address"
									required
								/>

								<input
									type="submit"
									class="btn btn-primary shadow-none"
									value="Subscribe"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="footer-bottom">
				<div class="container d-sm-flex align-items-center">
					<div class="footer-left">
						<span class="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
					</div>

					<div class="footer-right ml-auto mt-1 mt-sm-0">
						<div class="payment-icons">
							<span
								class="payment-icon visa"
								v-lazy:background-image="'./images/payments/payment-visa.svg'"
							></span>
							<span
								class="payment-icon paypal"
								v-lazy:background-image="'./images/payments/payment-paypal.svg'"
							></span>
							<span
								class="payment-icon stripe"
								v-lazy:background-image="'./images/payments/payment-stripe.png'"
							></span>
							<span
								class="payment-icon verisign"
								v-lazy:background-image="'./images/payments/payment-verisign.svg'"
							></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>