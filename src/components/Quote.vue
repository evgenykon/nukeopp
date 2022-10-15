<template>
    <div class="notification bg-1">{{randomQuote}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Quote',
    computed: {
        randomQuote()  {
            const quotes = [
                `Nuclear opposition is all of us.`,
                `"Earth is the play ground of our children and their children. We cannot allow it to be the play ground of the nuclear arms of the evil forces." Amit Ray`,
                `"We have to prepare for the worst, and the worst is war." Bernard Kouchner`
            ];
            return quotes[Math.floor(Math.random() * quotes.length)];
        }
    }
});
</script>