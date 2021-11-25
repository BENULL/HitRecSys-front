<template>
  <div class="home">
  <el-container>
    <el-header><Header/></el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer><Footer/></el-footer>
  </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'; 

@Options({
  components: {
    Header,
    Footer,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.el-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.el-header {
  padding: 0;
}
.el-main {
  height: 100%;
  overflow: hidden;
}
.el-footer {
  padding: 0;
  width: 100%;
  align-items: center;
}
</style>
