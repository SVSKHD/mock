<template>
  <div>
    <Layout>
      <q-parallax
      src="@/assets/images/creditcard.jpg"
    >
      <h4 class="text-black">Banking Made Easy</h4>
      <q-btn color="primary" label="Signup" to="/auth"/>
    </q-parallax>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/layouts/Layout.vue';


export default {
  components: { Layout },
    setup() {
    },
    
}
</script>