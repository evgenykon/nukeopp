<template>
<a class="navbar-item" v-bind:href="href">
    <slot />
</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'NavbarItem',
    props: {
        href: { type: String, required: true }
    },
    setup(props) {
        props.href
    }
});
</script>