<template>
  <el-row class="header">
    <div class="header-logo-container">
        <a href="/"
          ><img class="logo" src="@/assets/logo.png" alt="HitRecSys Logo"
        /></a>
      </div>
      <div class="header-search-container">
        <el-input
          v-model="search_input"
          placeholder="input to search"
          clearable
        >
          <template #append>
            <el-button type="info" plain
              ><el-icon><Search /></el-icon
            ></el-button>
          </template>
        </el-input></div>
  </el-row>
  <el-divider></el-divider>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { Search } from "@element-plus/icons";

export default defineComponent({
  name: "h_header",
  components: {
    Search,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
  padding-left: 10px;
  padding-top: 10px;
  .header-logo-container {
    background-color: white;
    width:200px;
    .logo {
      height: 100%;
      width: 200px;
    }
  } 
  .header-search-container {
    padding-left: 30px;
    padding-top: 10px;
  }
}
.el-divider {
  margin: 10px 0;
}

</style>
