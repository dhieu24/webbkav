<template>
    <v-form>
        <LoginInput/>
        <v-switch v-model="showMessages" label="Ghi nhớ đăng nhập"></v-switch>
    </v-form>
</template>

<script>
import LoginInput from './LoginInput.vue'

export default {
    components: {
        LoginInput
    }
}
</script>
