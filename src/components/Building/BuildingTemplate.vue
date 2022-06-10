<template>
    <v-app>
        <v-container fluid class=" mt-8">
            <NavigationBar></NavigationBar>
            <v-row class="d-flex justify-start">
                <v-col md="2" class="pl-0 ma-0">
                    <MenuItem></MenuItem>
                </v-col>
                
                <v-col class="pa-0">
                    <v-container class="mt-2">
                        <v-row class="d-flex justify-space-between">
                            <h2 class="mb-4 ml-8 mt-4 current-building-name">Quản Lý Công Trình</h2>
                            <div class="d-flex justify-end">
                                <SearchInput class="mr-4 mt-2" placeholder="Nhập tên tòa nhà"></SearchInput>
                                <div @click="resetCurrentBuilding()">
                                    <AddDialog></AddDialog>
                                </div>
                            </div>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row>
                            <v-col :cols="this.buildingCols">   
                                <v-container>
                                    <v-row>
                                        <BuildingComponent v-for="(building, index) in buildings" 
                                            :key="index" 
                                            :title=building.title 
                                            :numBuildings=building.numBuildings 
                                            :numCameras=building.numCameras 
                                            :imgSrc=building.imgSrc
                                            :width=currentWidth
                                            :index="index">
                                        </BuildingComponent>
                                    </v-row>
                                </v-container>
                            </v-col>

                            <v-col cols="5" v-if="this.click">
                                <EditTab v-model=currentBuilding.title :src=currentBuilding.imgSrc :isNotAdding="isNotAdding"
                                @save=update()
                                ></EditTab>
                            </v-col>

                            <h1>{{currentBuilding.title}}</h1>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import BuildingComponent from './BuildingComponent.vue'
import SearchInput from '../Search/SearchInput.vue'
import MenuItem from '../Menu/MenuItem.vue'
import NavigationBar from '../NavBar/NavigationBar.vue'
import AddDialog from '../Dialog/AddDialog.vue'
import EditTab from '../Edit/EditTab.vue'
import {EventBus} from '../../main.js'

export default {
    data: () => ({
        click: false,
        buildingCols: 12,
        currentWidth: "31.5%",
        isNotAdding: true,
        currentBuilding: {
            title: "",
            numBuildings: "",
            numCameras: "",
            imgSrc: "",
            index: -1
        },
        buildings: [
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Ngân Hàng",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Đại Học Ngoại Thương",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            }
        ],
    }),
    components: {
        BuildingComponent,
        SearchInput,
        MenuItem,
        NavigationBar,
        AddDialog,
        EditTab
    },
    methods: {
        resetCurrentBuilding(){
            this.isNotAdding = false;
            this.currentBuilding.title = '';
            this.currentBuilding.imgSrc = '';
            this.currentBuilding.index = -1;
            this.enlargeTemplate()
        },
        enlargeTemplate(){
            this.click = true;
            this.buildingCols = 7;
            this.currentWidth = "47%";
        },
        reduceTemplateSize(){
            this.click = false;
            this.buildingCols = 12;
            this.currentWidth = "31.5%";
        },
        update(){
            if(this.currentBuilding.index > -1){
                this.buildings[this.currentBuilding.index].title = this.currentBuilding.title
            }else{
                this.buildings.push({
                    title: this.currentBuilding.title,
                    src: this.currentBuilding.imgSrc
                })
            }
        }
    },
    mounted () {
      EventBus.$on('focusBuilding', (data) => {
        if(!this.isNotAdding){
            this.isNotAdding = true
        }
        this.currentBuilding.index = data.currentIndex;
        this.currentBuilding.title = data.name;
        this.currentBuilding.imgSrc = data.src
        this.enlargeTemplate();
      });
      EventBus.$on('closeEdit', () => {
        if(!this.isNotAdding){
            this.isNotAdding = true
        }
        this.reduceTemplateSize()
      });
    },
}
</script>

<style scoped>
    .current-building-name{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;
    }
</style>

