<template>
    <v-card class="rounded-lg ml-6 mb-3" @click="focus()" @dblclick="doubleClick()" color="#1B2027" :width="width" height="147px">
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
      <v-img height="200px" src="imgUrl"></v-img>
    </v-card>
</template>

<script>
import {EventBus} from '../../main.js'
import axios from 'axios'
export default {
    props: ["index", "width", "title", "numBuildings", "numCameras", "imgSrc"],
    data: () => ({
      imgUrl: ''
    }),
    methods: {
      focus(){
        EventBus.$emit('focusBuilding', {
          name: this.title,
          src: this.imgSrc,
          currentIndex: this.index
        })
        console.log(this.imgSrc)
      },
      doubleClick(){
        this.$emit('doubleclick', this.index)
      }
    },
    created(){
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCa2F2Q29ycG9yYXRpb24iLCJpYXQiOjE2NTUxOTgxNTgsImV4cCI6MTkxNDM5ODE1OCwidXNlciI6ImFkbWluIiwidHlwZSI6ImFjY2VzcyIsInNlY3VyZSI6ImV5SnBkaUk2SW5OSE0wcHFjM2xWVWxsSldqQktkVkZrWTBsTVNrRTlQU0lzSW5aaGJIVmxJam9pTVZSSGVrSnBMMDh5TTBadUwyUjZkSGhCTjNST04xVm1NVGgzYWtOeFRXbDNNWGRuVjFkamRGbFNhV1U1UTBkNVNERlNSRWxOTld4SWVYaFNUWFl6YWtsUU55OW5VMVJ1U0U5VGRrd3pkRkY1UjA4d2JVSkZTazA1YlVzd1VsVkhaSGxCUzFOdVRsazFObkJaVGtSR1VYUkNXaTlMU1dZNFdEUTFPRWh2Y1cxdFQzQXZUV0ZwWlZOUFRYbGxhRlJsTm1zeFpVVlFkRXRhVEdzeGJVb3dXVzAyYUc1SE4yRlFhVmRyVEVkbWVYcHVlbVk1U2xNNFlWb3hPR1JqY2xWTVRXSnhTalV6S3poa2IzcGFXRkZHZUd4aFVGQnJVVDA5SWl3aWJXRmpJam9pWW1JM09ESTVaR1kwTXpVM05EZ3lZalpqWTJFek1USXhPVGhtWm1FeFpEZGtaRFl6TXpBMU1EVTFPV1JoWVRkaE9HUXdZMkkyTVdVek9HTTBPV1ptTmlJc0luUmhaeUk2SWlKOSJ9.0W_o_3bqJ3KcM7Cx8w84tyhHS5u0F3KEwhbKzgzXwck'
      const fetchImage = axios.create({
          baseURL: 'https://vms.hcdt.vn:20003',
          headers: {'authorization': 'Bearer ' + token},
          responseType: 'blob',
      })

      fetchImage.get('vms/api/ground/group/image/1').then(res => {
       const imgObjectURL = URL.createObjectURL(res.data)
       console.log(imgObjectURL)
       this.imgUrl = imgObjectURL;
      })
      .catch(err => {
        console.log(err)
      })
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
