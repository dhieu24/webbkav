<template>
  <v-app-bar clipped-left app class="pa-0" color="#1B2027">
        <v-tabs>
           <v-tab v-for="header in headers" :key="header.icon">
            <v-icon>
              {{header.icon}}
            </v-icon>
          </v-tab>

          <v-spacer></v-spacer>

          <v-btn depressed v-for="control in controls" :key="control.icon" color="#1B2027" height="100%">
            <v-icon>
              {{control.icon}}
            </v-icon>
          </v-btn>
        </v-tabs>
    </v-app-bar>    
</template>

<script>

export default ({
    data: () => ({
      headers: [
        {
          icon: "mdi-dots-vertical"
        },
        {
          icon: "mdi-dots-vertical"
        },
        {
          icon: "mdi-clipboard-play"
        },
        {
          icon: "mdi-dots-vertical"
        },
        {
          icon: "mdi-dots-vertical"
        },
      ],
      controls: [
        {
          icon: "mdi-minus"
        },
        {
          icon: "mdi-checkbox-blank-outline"
        },
        {
          icon: "mdi-close"
        }
      ]

    })
})
</script>