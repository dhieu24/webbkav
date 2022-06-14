<template>
    <v-app> 
        <NavigationBar></NavigationBar>
        <MenuItem></MenuItem>
        <v-main class="mt-8">
            <v-container fluid class="mt-2 pa-0 mr-0">
                <v-row no-gutters class="d-flex justify-space-between pa-0 ma-0">
                    <h2 class="mb-4 ml-8 current-building-name">Quản Lý Công Trình</h2>
                    <div class="d-flex justify-end mr-6">
                        <SearchInput class="mr-4" placeholder="Nhập tên tòa nhà"></SearchInput>
                        <div @click="resetCurrentBuilding()">
                            <AddDialog></AddDialog>
                        </div>
                    </div>
                </v-row>
                    
                <v-row no-gutters class="pa-0 mr-5">
                    <v-col :cols="this.buildingCols" class="pa-0 ma-0 d-flex flex-wrap">
                        <BuildingComponent @doubleclick="test($event)" v-for="building in buildings" 
                            :key="building.id" 
                            :title="building.name" 
                            :numBuildings="building.numBuildings" 
                            :numCameras="building.numCameras"
                            :imgSrc="building.image"
                            :width="currentWidth"
                            :index="building.id">
                        </BuildingComponent>
                    </v-col>

                    <v-col cols="5" v-if="this.click">
                        <EditTab 
                            v-model="currentBuilding.name" 
                            :src="currentBuilding.image" 
                            :isNotAdding="isNotAdding"
                            @save="update()" @remove="remove()"
                        ></EditTab>
                    </v-col>
                </v-row>   
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
import axios from 'axios';

export default {
    data: () => ({
        clickBuilding: 0,
        click: false,
        buildingCols: 12,
        currentWidth: "31.5%",
        isNotAdding: true,
        currentBuilding: {
            name: "",
            numBuildings: "",
            numCameras: "",
            image: "",
            id: -1
        },
        buildings: [],
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
            console.log(this.currentBuilding.id)
            if(this.currentBuilding.id > -1){
                console.log(this.currentBuilding.id)
                this.buildings.splice(this.currentBuilding.id, 1)
                this.resetCurrentBuilding()
                this.reduceTemplateSize()
            }
            console.log(this.buildings)
        },
        test(index){
            alert(index)
            console.log(this.buildings)
        }
    },
    mounted () {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCa2F2Q29ycG9yYXRpb24iLCJpYXQiOjE2NTUxOTgxNTgsImV4cCI6MTkxNDM5ODE1OCwidXNlciI6ImFkbWluIiwidHlwZSI6ImFjY2VzcyIsInNlY3VyZSI6ImV5SnBkaUk2SW5OSE0wcHFjM2xWVWxsSldqQktkVkZrWTBsTVNrRTlQU0lzSW5aaGJIVmxJam9pTVZSSGVrSnBMMDh5TTBadUwyUjZkSGhCTjNST04xVm1NVGgzYWtOeFRXbDNNWGRuVjFkamRGbFNhV1U1UTBkNVNERlNSRWxOTld4SWVYaFNUWFl6YWtsUU55OW5VMVJ1U0U5VGRrd3pkRkY1UjA4d2JVSkZTazA1YlVzd1VsVkhaSGxCUzFOdVRsazFObkJaVGtSR1VYUkNXaTlMU1dZNFdEUTFPRWh2Y1cxdFQzQXZUV0ZwWlZOUFRYbGxhRlJsTm1zeFpVVlFkRXRhVEdzeGJVb3dXVzAyYUc1SE4yRlFhVmRyVEVkbWVYcHVlbVk1U2xNNFlWb3hPR1JqY2xWTVRXSnhTalV6S3poa2IzcGFXRkZHZUd4aFVGQnJVVDA5SWl3aWJXRmpJam9pWW1JM09ESTVaR1kwTXpVM05EZ3lZalpqWTJFek1USXhPVGhtWm1FeFpEZGtaRFl6TXpBMU1EVTFPV1JoWVRkaE9HUXdZMkkyTVdVek9HTTBPV1ptTmlJc0luUmhaeUk2SWlKOSJ9.0W_o_3bqJ3KcM7Cx8w84tyhHS5u0F3KEwhbKzgzXwck'
        const fetchBuilding = axios.create({
            baseURL: 'https://vms.hcdt.vn:20003',
            headers: {'authorization': 'Bearer ' + token}
        })

        fetchBuilding.get('/vms/api/ground/groups').then(res => {
            this.buildings = res.data
        })
        .catch(err => {
            console.log(err)
        })
    EventBus.$on('focusBuilding', (data) => {
        console.log(this.currentBuilding)
        if(!this.isNotAdding){
            this.isNotAdding = true
        }
        this.currentBuilding.id = data.currentIndex;
        this.currentBuilding.name = data.name;
        this.currentBuilding.image = data.src
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

