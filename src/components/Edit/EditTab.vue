<template>
    <v-card class="rounded-lg pa-5 mr-5 ml-3" color="#1B2027" height="100%">
        <div class="d-flex justify-space-between mb-4">
            <h2 id="edit-title">Chỉnh sửa công trình</h2>
            <div class="d-flex justify-end">
                <v-btn v-if="this.isNotAdding" depressed class="d-inline pa-0" color="#1B2027" v-on:click="closeEdit">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn v-if="this.isNotAdding" depressed class="d-inline pa-0" color="#1B2027" v-on:click="toggleDialog()">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn depressed class="d-inline pa-0" color="#1B2027" v-on:click="closeEdit">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>  
        </div>
        <div v-if="this.isNotAdding">
            <h5 class="text-left">Icon: </h5>
            <v-select class="d-inline" :items="items"/>
        </div>
        <div class="mb-2 ml-1">
            <h5 class="text-left">Tên công trình: </h5>
        </div>
        <v-text-field :value="value" class="current-building-name rounded-lg shrink mb-4" background="#2B3542" filled dense
        @input="updateValue($event)">
        </v-text-field>
        <div class="mb-3">
            <h5 class="text-left mb-2">Ảnh công trình:</h5>
            <v-img class="rounded-lg building-img" max-height="150" max-width="250" :src=src></v-img>
        </div>
        
        <h5 class="text-left" v-if="this.isNotAdding">Tọa độ: </h5>
        <div class="d-flex justify-end">
            <v-btn color="primary rounded-lg mt-4 pl-3 pr-3" dark tile v-on:click="save">
                Lưu Thay Đổi
            </v-btn>
        </div>
        <div v-if="this.dialog">
            <DialogBox @remove="remove()" @cancel="toggleDialog()"
             v-on="$listeners"></DialogBox>
        </div>
    </v-card>
</template>

<script>
import {EventBus} from '../../main.js'
import DialogBox from '../Dialog/DialogBox.vue'

export default {
    props: ['isNotAdding', 'value', 'src'],
    data: () => ({
        items: [
            'mdi-home',
            'mdi-settings'
        ],
        dialog: false
    }),
    components: {
        DialogBox,
    },
    methods: {
        closeEdit: function(){
            EventBus.$emit("closeEdit", this.isNotAdding)
        },
        save: function(){
            this.closeEdit()
            this.$emit("save")
        },
        updateValue: function(value){
            this.$emit('input', value)
        },
        remove: function(){
            this.toggleDialog();
        },
        toggleDialog: function(){
            this.dialog = !this.dialog;
        }
    },
}
</script>

<style scoped>
    #edit-title{
        color: #1293F6;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
    }
    .current-building-name{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
    }
</style>
