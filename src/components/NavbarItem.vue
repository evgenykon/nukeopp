<template>
<a class="navbar-item" v-bind:href="href">{{name}}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'NavbarItem',
    props: {
        name: { type: String, required: true },
        href: { type: String, required: true }
    },
    setup(props) {
        props.name // type: string | undefined
        props.href
    }
});
</script>