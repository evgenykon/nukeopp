<template>
    <a v-bind:href="to"><slot /></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'GLink',
    props: {
        to: { type: String, required: true }
    },
    setup(props) {
        props.to
    }
});
</script>