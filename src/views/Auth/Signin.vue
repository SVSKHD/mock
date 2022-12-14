<template>
  <q-card flat>
    <q-card-section>
      <q-input outlined dense v-model="hello" label="Standout" />
      <br />
      <q-input outlined dense v-model="password" label="Standout" />
    </q-card-section>
    <q-card-actions>
      <q-btn
        flat
        label="Signin"
        class="full-width bg-deep-purple-7 text-white"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let email = ref("");
    let password = ref("");
    return {
      email,
      password,
    };
  },
};
</script>
>