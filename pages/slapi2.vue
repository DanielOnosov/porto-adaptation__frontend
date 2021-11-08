<template>
    <div class="container my-4">
        <h2 class="h2 mt-4">Get product</h2>
        <pre v-html="product" />

        <h2 class="h2 mt-4">Get views count</h2>
        <pre v-html="views" />

        <h2 class="h2 mt-4">Get views count from backend after update(patch)</h2>
        <pre v-html="views_updated" />
    </div>
</template>
<script>
export default {

    async asyncData({ $axios, route, app, params, req, res, redirect }) {
		// USE ONLY SERVER SIDE
        if(process.server){
            // on production set this to params.id and check it for truth
            const id = params.id ? params.id : "a6ec5d3c-5d43-4585-bc71-8f40d09ff6d3";  
            
            // static url to self will fastify request
            const protocol = req.connection.encrypted ? "https" : "http";               
            const host = `${protocol}://${req.headers.host}`;
            

                // create promise for get product
                var config_product = {
                    method: 'get',
                    url: `${host}/api/products/collections/products/documents/${id}`,
                };
                var promiseGetProduct = await $axios(config_product).then((v) => { return v.data }).catch(() => { redirect('/'); return 'Product retrieve error' });


                // create promise for get product views count
                const urlGetViews = `${host}/api/slapi2/?product_id=${id}`;
                const promiseGetViews = await $axios.$get(urlGetViews).then((v) => { return v.data }).catch(() => {});
                
                
                // Get views and product
                Promise.all([promiseGetProduct, promiseGetViews]).then((v) => {}).catch(() => {});
                
                // Check if viewc sount data is set
                if(promiseGetViews){
                    // creating configuration for axios
                    var data = JSON.stringify({
                        "views": promiseGetViews.product.views
                    });
                    var url = `${host}/api/back/items/products/${id}`
                    var config = {
                        method: 'patch',
                        url: url,
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        data : data
                    };
                    // Set views count on backend data server
                    var promiseSetViews = await $axios(config).then((v) => { return v.data }).catch(() => { return 'Update vievs on backend failed' });
                    Promise.all([promiseSetViews]).then((v) => {}).catch((e) => { console.log(e); });
                }



            // Retrieve data
            return {
                product: promiseGetProduct,
                views: promiseGetViews,
                views_updated: promiseSetViews
            };
        }
	},

	mounted() {

		console.log(this.product);
		console.log(this.views);
		console.log(this.views_updated);

	}
};
</script>
