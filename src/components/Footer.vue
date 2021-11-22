<template>
<el-divider></el-divider>
  <div class="footer">
     <div class="copyright">Copyright © 2021 BENULL. </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  
})
export default class Footer extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    background-color:white(231, 229, 229);
    .copyright {
      text-align: center;
    }
}
.el-divider {
  margin: 10px 0;
}

</style>
