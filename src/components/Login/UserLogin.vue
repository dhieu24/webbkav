<template>
<v-app>
    <v-form>
        <LoginInput/>
        <v-switch v-model="showMessages" label="Ghi nhớ đăng nhập"></v-switch>
    </v-form>
    <v-img src="https://vms.hcdt.vn:20003/vms/api/ground/group/image/41"></v-img>
</v-app>
</template>

<script>
import LoginInput from './LoginInput.vue'

export default {
    components: {
        LoginInput
    }
}
</script>
