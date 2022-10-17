<template>
    <MessageBox v-bind:title="title">
        <div class="columns">
            <div class="column is-one-quarter">
                <img v-bind:src="portrait"/>
            </div>
            <div class="column">
                <slot />
            </div>
        </div>
    </MessageBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'WeaponOwner',
    props: {
        portrait: { type: String, required: true },
        title: { type: String, required: true },
    },
    setup(props) {
        props.portrait
        props.title
    }
});
</script>