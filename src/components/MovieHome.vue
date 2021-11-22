<template>
  <div>
    <span class="category">Adventure</span>
    <el-divider></el-divider>
    <el-row>
      <el-col
        v-for="(o, index) in 5"
        :key="o"
        :span="4"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div>
    <span class="category">Drama</span>
    <el-divider></el-divider>
    <el-row>
      <el-col
        v-for="(o, index) in 5"
        :key="o"
        :span="4"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div>
    <span class="category">Comedy</span>
    <el-divider></el-divider>
    <el-row>
      <el-col
        v-for="(o, index) in 5"
        :key="o"
        :span="4"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div>
    <span class="category">Thriller</span>
    <el-divider></el-divider>
    <el-row>
      <el-col
        v-for="(o, index) in 5"
        :key="o"
        :span="4"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div>
    <span class="category">Romance</span>
    <el-divider></el-divider>
    <el-row>
      <el-col
        v-for="(o, index) in 5"
        :key="o"
        :span="4"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div>
    <span class="category">Action</span>
    <el-divider></el-divider>
    <el-row>
      <el-col
        v-for="(o, index) in 5"
        :key="o"
        :span="4"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.category {
    font-size: 18px;
    line-height: 1.5;
    font-weight: bolder;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
.el-divider {
  margin: 10px 0;
}
.el-row {
  margin-bottom: 10px;
}
.el-card {
  min-width: 100%;
  height: 100%;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
