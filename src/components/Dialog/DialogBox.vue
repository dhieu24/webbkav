<template>
  <v-row justify="center">
    <v-dialog
      value=true
      persistent
      max-width="400px"
      color="#1B2027"
    >
      <v-card class="rounded-lg" color="#1B2027" height="280px" elevation="10">
        <div class="d-flex justify-end" color="#76828B">
          <v-icon @click="cancel()" class="mr-2 mt-1 close-btn" width="24px" height="24px">mdi-close</v-icon>
        </div>
        <div class="d-flex justify-center mt-10" style="height: 62px">
          <v-icon x-large color="#FF0E40">mdi-delete</v-icon>
        </div>
        <div>
          <v-card-text class="dialog-message text-center">Bạn muốn xóa chú?</v-card-text>
        </div>
        <div class="d-flex justify-space-around mt-10" max-height="150px">
          <v-btn
            color="#283038"
            @click="cancel()"
            width="136px"
            height="40px"
            class="rounded-lg ml-10"
          >
            Hủy
          </v-btn>
          <v-btn
            color="primary"
            @click="remove()"
            width="136px"
            height="40px"
            class="rounded-lg mr-10"
          >
            Xóa
          </v-btn>
        </div>       
      </v-card>      
    </v-dialog>
  </v-row>
</template>

<script>

export default {
    methods: {
        remove: function(){
          this.$emit("remove")
        },
        cancel: function(){
          this.$emit('cancel')
        }
    },    
}
</script>

<style scoped>
.dialog-message{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
}

.close-btn{
  border: 1px solid #222323;
}
</style>
