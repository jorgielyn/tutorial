<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
    <Sidebar></Sidebar>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

import Header from './components/frame/Header.vue';
import Body from './components/frame/Body.vue';
import Sidebar from './components/frame/Sidebar.vue';

export default {
  name: 'app',
  components: {
    Header,
    Body,
    Sidebar
  }
}

</script>

