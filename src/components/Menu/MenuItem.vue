<template>
  <v-navigation-drawer permanent height="100%" width="100%" color="#1B2027" class="pa-0">
    <v-list>
      <v-list-item
         v-for="item in items"
          :key="item.title"
          link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="menu-item caption">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

       <v-list-group
          prepend-icon="mdi-map"
          no-action
        >
          <template v-slot:activator>
              <v-list-item-title class="menu-item caption">Bản Đồ</v-list-item-title>
          </template>

          <v-list-item
            v-for="item in map"
            :key="item.title"
            link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-item caption" v-text="item.title"></v-list-item-title>  
          </v-list-item>
        </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    data () {
      return {
        items: [
          { title: 'Cấu Hình', icon: 'mdi-view-dashboard' },
          { title: 'Quản lý profile', icon: 'mdi-forum' },
          { title: 'Quản lý tài khoản', icon: 'mdi-account' },
          { title: 'Quản lý góc nhìn', icon: 'mdi-forum' },
          { title: 'Thống kê', icon: 'mdi-forum' },
          { title: 'License', icon: 'mdi-forum' },
        ],
        map: [
          {title: "Bản Đồ", icon: 'mdi-checkbox-blank-circle'},
          {title: "Quản lý mặt bằng", icon: 'mdi-checkbox-blank-circle'},
        ]
      }
    },
  }
</script>

<style>
.menu-item{
  text-align: left;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
</style>