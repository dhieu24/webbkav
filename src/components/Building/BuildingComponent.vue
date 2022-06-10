<template>
    <v-card class="rounded-lg ml-5 mb-3" @click="focus" color="#1B2027" :width=width>
      <v-container height="100%">
        <v-row>
          <v-col cols="5">
            <v-img height="100%" class="rounded-lg pa-0" :src=imgSrc></v-img>
          </v-col>
          <v-col cols="7">
            <v-card-title class="white--text pa-0 building-title font-weight-bold caption">{{title}}</v-card-title>
            <v-card-text class="pa-0 building-subtitle caption grey--text">Số lượng tòa nhà: {{numBuildings}}</v-card-text>
            <v-card-text class="pa-0 building-subtitle caption grey--text">Số lượng camera: {{numCameras}}</v-card-text>
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
      }
    }
}
</script>

<style>
  .building-title{
    color: black;
    text-align: left;
  }

  .building-subtitle{
    text-align: left;
  }
</style>
