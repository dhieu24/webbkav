<template>
  <v-row justify="center">
    <v-dialog
      :value="value"
      @input="toggle($event)"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
          >
            Hủy
          </v-btn>
          <v-btn
            color="green darken-1"
            text
          >
            Xóa
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
    props: ['value'],
    // data () {
    //   return {
    //     dialog: true,
    //   }
    // },
    methods: {
        toggle: function(value){
            console.log('oh yay')
            this.$emit('input', value)
        },
        test: function(){
            console.log(this.dialog)
        }
    },
    updated(){
        console.log(this.dialog)
    }
    
}
</script>
