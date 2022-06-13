<template>
    <v-app> 
        <NavigationBar></NavigationBar>
        <MenuItem></MenuItem>
        <v-main class="mt-8">
                <v-container fluid class="mt-2 pa-0 mr-0">
                    <v-row no-gutters class="d-flex justify-space-between pa-0 ma-0">
                        <h2 class="mb-4 ml-8 current-building-name">Quản Lý Công Trình</h2>
                        <div class="d-flex justify-end mr-3">
                            <SearchInput class="mr-4" placeholder="Nhập tên tòa nhà"></SearchInput>
                            <div @click="resetCurrentBuilding()">
                                 <AddDialog></AddDialog>
                            </div>
                        </div>
                    </v-row>
                    
                    <v-row no-gutters class="pa-0 ma-0">
                        <v-col :cols="this.buildingCols" class="pa-0 ma-0 d-flex justify-center flex-wrap">
                            <!-- <v-container> -->
                                <!-- <v-row no-gutters> -->
                                    <BuildingComponent @doubleclick="test($event)" v-for="building in buildings" 
                                        :key="building.index" 
                                        :title="building.title" 
                                        :numBuildings="building.numBuildings" 
                                        :numCameras="building.numCameras"
                                        :imgSrc="building.imgSrc"
                                        :width="currentWidth"
                                        :index="building.index">
                                    </BuildingComponent>
                                
                                <!-- </v-row> -->
                            <!-- </v-container> -->
                        </v-col>

                        <v-col cols="5" v-if="this.click">
                            <EditTab v-model="currentBuilding.title" :src="currentBuilding.imgSrc" :isNotAdding="isNotAdding"
                            @save="update()" @remove="remove()"
                            ></EditTab>
                        </v-col>
                    </v-row>

                    
                </v-container>
                <v-container class="pa-0 ma-0" style="background-color: red; max-width: 100%;">
                     <!-- <v-row no-gutters>
                        <v-col :cols="this.buildingCols">
                            <v-container>
                                <v-row no-gutters>
                                    <BuildingComponent @doubleclick="test($event)" v-for="(building, index) in buildings" 
                                        :key="index" 
                                        :title="building.title" 
                                        :numBuildings="building.numBuildings" 
                                        :numCameras="building.numCameras"
                                        :imgSrc="building.imgSrc"
                                        :width="currentWidth"
                                        :index="index">
                                    </BuildingComponent>
                                </v-row>
                            </v-container>
                        </v-col>

                        <v-col cols="5" v-if="this.click">
                            <EditTab v-model="currentBuilding.title" :src="currentBuilding.imgSrc" :isNotAdding="isNotAdding"
                            @save="update()" @remove="remove()"
                            ></EditTab>
                        </v-col>
                    </v-row> -->
                </v-container>
        </v-main>
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
        clickBuilding: 0,
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
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 0
            },
            {
                title: "Học Viện Ngân Hàng",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 1
            },
            {
                title: "Đại Học Ngoại Thương",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 2
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 3
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 4
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 5
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 6
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 7
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 8
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 9
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 10
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 11
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 12
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 13
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 14
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 15
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 16
            },
            {
                title: "Học Viện Công Nghệ Bưu Chính Viễn Thông",
                numBuildings: "3",
                numCameras: "24",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                index: 17
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
        },
        remove(){
            if(this.currentBuilding.index > -1){
                this.buildings.splice(this.currentBuilding.index, 1)
                this.resetCurrentBuilding()
                this.reduceTemplateSize()
            }
        },
        test(index){
            alert(index)
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

