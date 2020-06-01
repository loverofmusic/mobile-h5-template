<template>
  <div class="home">
    home
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="kkkkkkkkkk">kkkkkkkkkkk</div>
    <input type="text" value="tijiao" />

    <nut-datepicker
      :is-visible="isVisible"
      type="date"
      title="请选择日期"
      :is-show-chinese="false"
      @close="switchPicker('isVisible')"
      @choose="setChooseValue"
    ></nut-datepicker>

    <luck-draw></luck-draw>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LuckDraw from '../components/LuckDraw.vue'
export default {
  name: "Home",
  components: {
    // HelloWorld
    LuckDraw: LuckDraw
  },
  data() {
    return {
      isVisible: true,
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      date: null,
      date1: null,
      datetime: "2018-11-02 11:08",
      time: "01:07",
      time1: "09:06",
      time2: "10:30",
      amOrPm: "PM"
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue(param) {
      this.date = param[3];
    },
    setChooseValue1(param) {
      this.date1 = param[3];
    },
    setChooseValue2(param) {
      this.datetime = param[5];
    },
    setChooseValue3(param) {
      this.amOrPm = param[2] == "上午" ? "AM" : "PM";
      this.time = param[3];
    },
    setChooseValue4(param) {
      this.time1 = param[2];
    },
    setChooseValue5(param) {
      this.time2 = param[2];
    }
  }
};
</script>

<style>
.kkkkkkkkkk {
  width: 750px;
  border: 1px solid red; /*no*/
}
</style>
