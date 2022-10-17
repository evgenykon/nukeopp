<template>
    <div class="notification bg-img" v-bind:style="quoteBgStyle">{{randomQuote}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Quote',
    data() {
        return {
            startBgPosition: 0,
            scroll: 0
        }
    },
    methods: {
        handleScroll() {
            this.scroll = window.scrollY;
        }
    },
    mounted() {
        this.startBgPosition = Math.floor(Math.random() * 98);
    },
    created () {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', this.handleScroll);
        } else {
            this.scroll = Math.floor(Math.random() * 1000);
        }
    },
    destroyed () {
        if (typeof window !== "undefined") {
            window.removeEventListener('scroll', this.handleScroll);
        }
    },
    computed: {
        randomQuote()  {
            const quotes = [
                `Nuclear opposition is all of us.`,
                `"Earth is the play ground of our children and their children. We cannot allow it to be the play ground of the nuclear arms of the evil forces." Amit Ray`,
                `"We have to prepare for the worst, and the worst is war." Bernard Kouchner`,
                `"Would be great if someday humanity stopped pointing nukes at itself that would destroy almost all life on Earth." Elon Musk`,
                `"The survivors (of a nuclear war) would envy the dead." Nikita Khrushchev`,
                `"Never forget that everything Hitler did in Germany was legal." Martin Luther King, Jr.`,
                `"It is madness for any country to build its policy with an eye to nuclear war." Leonid Brezhnev`,
                `"The weapons of war must be abolished before they abolish us." John F. Kennedy`,
                `"Now, I am become Death, the destroyer of worlds." J.R. Oppenheimer`,
                `"The only value in our two nations possessing nuclear weapons is to make sure they will never be used." R. Reagan`,
            ];
            return quotes[Math.floor(Math.random() * quotes.length)];
        },
        randomStyle() {
            const styles = [
                'bg-1',
                'bg-2',
                'bg-3'
            ];
        },
        quoteBgStyle() {
            const offset = this.startBgPosition + Math.floor(this.scroll * 0.01);
            return `background-position-y: ${offset}%;`;
        }
    }
});
</script>