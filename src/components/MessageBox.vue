<template>
    <article class="message">
        <div class="message-header">
            <p>{{title}}</p>
        </div>
        <div class="message-body">
            <slot />
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MessageBox',
    props: {
        title: { type: String, required: true }
    },
    setup(props) {
        props.title
    }
});
</script>