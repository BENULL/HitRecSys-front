<template>
  <div class="container">
    <div class="movie-info-container" v-if="movieInfo">
      <!-- <pre>{{movieInfo}}</pre> -->
      <h3>{{ movieInfo.title }}</h3>
      <div class="movie" style="width:40%">
        <img :src="`/static/posters/${movieInfo.movieId}.jpg`" />
        <div class="info" style="float:right">
          <p>上映年份：{{ movieInfo.releaseYear }}</p>
          <p>题材：{{ movieInfo.genres.join('/') }}</p>
          <p>评分: {{movieInfo.averageRating}}</p>
          <!-- <el-rate :colors="['#99A9BF', '#F7BA2A', '#FF9900']" v-model="movieInfo.averageRating"></el-rate> -->
        </div>
      </div>
    </div>
    <div class="similar-container">
      <span class="list-title">Similar Movies</span>
      <el-divider></el-divider>
      <el-row>
        <el-col
          v-for="(movie, i) in recMovieList"
          :key="movie.movieId"
          :span="4"
          :offset="i > 0 ? 1 : 0"
        >
          <el-card
            shadow="hover"
            :body-style="{ padding: '0px' }"
            @click="clickCard(movie.movieId)"
          >
            <img :src="`/static/posters/${movie.movieId}.jpg`" />
            <div style="padding: 14px">
              <h4>{{ movie.title }}</h4>
              <p>{{ movie.releaseYear }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { fetchMovieById, fetchSimilarMovieRec } from "@/api";
export default defineComponent({
  setup() {
    const route = useRoute();
    const movieInfo = ref();
    const recMovieList = ref();
    const fetchRecMovieList = () => {
      fetchSimilarMovieRec({
        movieId: route.params.id,
        size: 5,
        model: "emb",
      }).then((response) => {
        recMovieList.value = response.data;
      });
    };
    const fetchMovie = () => {
      fetchMovieById(+route.params.id).then((response) => {
        movieInfo.value = response.data;
      });
    };
    onMounted(() => {
      fetchMovie();
      console.log(movieInfo);
      console.log(recMovieList);
      fetchRecMovieList();
    });
    return {
      movieInfo,
      recMovieList,
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .list-title {
    font-size: 18px;
    line-height: 1.5;
    font-weight: bolder;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
}
</style>
