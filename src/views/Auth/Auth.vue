<template>
  <q-layout view="lHh Lpr fff">
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
        style="
          background-color: #4158d0;
          background-image: linear-gradient(
            43deg,
            #4158d0 0%,
            #c850c0 61%,
            #ffcc70 89%
          );
        "
      >
        <div class="column q-pa-lg">
          <div class="row">
            <q-card class="shadow-24" style="width: 450px; height: 420px">
              <q-card-section class="bg-deep-purple-7">
                <h4 class="text-h5 text-white text-left q-my-md">Zaryan</h4>
              </q-card-section>
              <q-card-section>
                <div v-if="authChange">
                  <Signup />
                </div>
                <div v-else>
                  <Signin />
                </div>
              </q-card-section>
              <q-card-actions>
                <q-btn
                  @click="manupulate"
                  flat
                  class="full-width"
                  :label="label"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, watch } from "vue";
import Signin from "../Auth/Signin.vue";
import Signup from "../Auth/Signup.vue";
export default {
  components: { Signin, Signup },
  setup() {
    let label = ref("Don't have an Account ..? Signup");
    let authChange = ref(false);
    let authicon = ref("eva-person");
    const manupulate = () => {
      authChange.value = !authChange.value;
    };
    watch(authChange, () => {
      authChange.value
        ? (label.value = "Already have an Account..? Signin")
        : (label.value = "Don't have an Account ..? Signup");
      authChange.value
        ? (authicon.value = "eva-person-add")
        : (authicon.value = "eva-person");
    });
    return {
      label,
      authChange,
      authicon,
      manupulate,
    };
  },
};
</script>