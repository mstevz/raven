<template>
    <div>
        <section v-if="isLoggedIn">
            Welcome to the mighty home!
        </section>
        <login v-else></login>
    </div>
</template>

<script>
import Login from '@/components/organisms/login/Login.vue';

export default {
    name: 'home',
    components: {
        Login
    },
    data: function() {
        return {
            isLoggedIn: false
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
