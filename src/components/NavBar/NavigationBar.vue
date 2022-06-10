<template>
  <v-system-bar app class="pa-0" color="primary">
        <v-tabs>
           <v-tab v-for="header in headers" :key="header.icon">
            <v-icon>
              {{header.icon}}
            </v-icon>
          </v-tab>

          <v-spacer></v-spacer>

          <v-btn depressed v-for="control in controls" :key="control.icon">
            <v-icon>
              {{control.icon}}
            </v-icon>
          </v-btn>
        </v-tabs>
    </v-system-bar>    
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