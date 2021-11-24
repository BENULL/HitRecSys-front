<template>
  <div v-for="(category, index) in categoryList" :key="index">
    <span class="category">{{ category }}</span>
    <el-divider></el-divider>
    <el-row v-if="status">
      <el-col
        v-for="(movie, i) in moviesLists[index]"
        :key="movie.movieId"
        :span="4"
        :offset="i > 0 ? 1 : 0"
      >
        <el-card
          shadow="hover"
          :body-style="{ padding: '0px' }"
          @click="clickCard(index, i, movie.movieId)"
        >
          <img
            :src="`/static/posters/${movie.movieId}.jpg`"
          />
          <div style="padding: 14px">
            <span>{{ movie.title }}</span>
            <!-- <span>{{ movie.releaseYear }}</span> -->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { recMovieByGenre } from "@/api";
import { MovieCardProps } from "@/store";
export default defineComponent({
  setup() {
    let status = ref(false);
    const moviesLists = ref([] as Array<Array<MovieCardProps>>);
    const categoryList = [
      "Adventure",
      "Drama",
      "Comedy",
      "Thriller",
      "Romance",
      "Action",
    ];

    onMounted(() => {
      fetchMovieLists();
      console.log("mounted");
    });

    // watch(moviesLists, ()=>{
    //   nextTick(()=>{
    //     console.log('watch')
    //   });
    // })

    const clickCard = (catIndex: number, colIndex: number, movieId: number) => {
      console.log(`click ${catIndex} ${colIndex} ${movieId}`);
    };

    const fetchMovieLists = () => {
      // let res = [] as any[];
      categoryList.map((category) => {
        recMovieByGenre({
          genre: category,
          size: 5,
          sortBy: "rating",
        }).then((response) => {
          console.log(response.data);
          // res.push(response.data);
          console.log(moviesLists.value);
          moviesLists.value.push(response.data);
        });
      });
      // moviesLists.value = res;
      status.value = true;
    };

    return {
      status,
      categoryList,
      moviesLists,
      clickCard,
    };
  },
});
</script>
<style lang="scss" scoped>
.category {
  font-size: 18px;
  line-height: 1.5;
  font-weight: bolder;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
