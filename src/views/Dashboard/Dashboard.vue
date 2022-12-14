<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-h5 q-mt-sm q-mb-xs text-left">Alwyn</div>
        <div class="text-left text-caption text-grey">Role:Admin</div>
      </q-card-section>
    </q-card-section>

    <q-separator />
  </q-card>
  <br />
  <div class="row">
    <div class="col-lg-3 col-md-4 col-md-4 col-sm-4 q-pa-md">
      <a-card title="Details" subtitle="Account Details">
        <pie-chart />
      </a-card>
    </div>
    <div class="col-lg-8 col-md-8 col-sm-4">
      <div class="row q-pa-md">
        <div class="col-lg-6 col-md-6 col-md-4 col-sm-4 q-pa-md">
          <a-card title="Total Balance">
            <h4 class="text-teal"><a class="text-black">$</a>20000</h4>
          </a-card>
        </div>
        <div class="col-lg-6 col-md-6 col-md-4 col-sm-4 q-pa-md">
          <a-card title="Total Spending">
            <h4 class="text-red"><a class="text-black">$</a>10000</h4>
          </a-card>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md">
          <a-card title="Expenditures">
             
          </a-card>
        </div>
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <a-card title="Briefing">
      <q-table
        flat
        title="Customers"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </a-card>
  </div>
</template>

<script>
import { ref } from "vue";
import pieChart from "./components/piechart.vue";


export default {
  components: { pieChart },

  setup() {
    let rows = ref([
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: "14%",
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: "8%",
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: "6%",
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: "3%",
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: "7%",
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: "0%",
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: "0%",
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: "0%",
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: "2%",
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: "12%",
        iron: "6%",
      },
    ]);
    let columns = [
      {
        name: "name",
        required: true,
        label: "Card No",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
        width:"100px"
      },
      {
        name: "Transaction Amount",
        align: "center",
        label: "Calories",
        field: "calories",
        sortable: true,
      },
      { name: "fat", label: "Transaction Type", field: "fat", sortable: true },
      { name: "carbs", label: "Status", field: "carbs" },
    ];
    return {
      rows,
      columns,
    };
  },
};
</script>

