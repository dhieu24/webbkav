<template>
    <v-card class="rounded-lg ml-5 mb-3 d-inline-block" @click="focus()" @dblclick="doubleClick()" color="#1B2027" :width="width" height="147px">
      <v-container class="pa-0 ma-0">
        <v-row>
          <v-col cols="5">
            <v-img height="139px" width="196px" class="rounded-lg pa-0 mb-1 mt-1" :src="imgSrc"></v-img>
          </v-col>
          <v-col cols="7">
            <div class="mt-3 mr-6">
              <v-card-title class="white--text pa-0 building-title font-weight-bold caption " width="265px" height="36px">{{title}}</v-card-title>
              <v-card-text class="pa-0 building-subtitle caption grey--text">Số lượng tòa nhà: {{numBuildings}}</v-card-text>
              <v-card-text class="pa-0 building-subtitle caption grey--text">Số lượng camera: {{numCameras}}</v-card-text>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>
import {EventBus} from '../../main.js'
export default {
    props: ["index", "width", "title", "numBuildings", "numCameras", "imgSrc"],
    methods: {
      focus(){
        EventBus.$emit('focusBuilding', {
          name: this.title,
          src: this.imgSrc,
          currentIndex: this.index
        })
      },
      doubleClick(){
        this.$emit('doubleclick', this.index)
      }
    }
}
</script>

<style>
  .building-title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }

</style>
