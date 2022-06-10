<template>
    <v-text-field class="rounded-lg shrink" filled dense :label=placeholder>
        <v-icon slot="append">mdi-magnify</v-icon>
    </v-text-field>
</template>

<script>

export default {
    props: ['placeholder']
}
</script>
