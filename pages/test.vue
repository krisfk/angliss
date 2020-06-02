<template>
  <div>
    <div>
      {{ total_num }}
      <br />
      {{ ttt }}
      <br />
      {{ dummy_json }}
    </div>

    <button v-on:click="add" value="1">Add 1</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
  computed: {
    total_num() {
      return this.$store.state.counter;
    },
    ...mapState({ ttt: "testing_num" })
  },
  methods: {
    ...mapMutations({
      add: "increment"
    })
  },
  asyncData(context) {
    return axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        return { dummy_json: res.data };
      });
  }
};
</script>

<style></style>
