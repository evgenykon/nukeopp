<script setup lang="ts">
const { locale } = useI18n()

const quote = ref(randomQuote(locale.value))
const transitioning = ref(false)
const showText = ref(true)
const noise = ref(false)
const glitch = ref(false)
const scanlines = ref(false)
const strips = ref<{ offset: number; delay: number }[]>([])

watch(locale, (l) => {
  quote.value = randomQuote(l)
})

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  intervalId = setInterval(nextQuote, 10000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

function nextQuote() {
  if (transitioning.value) return
  transitioning.value = true

  noise.value = true
  scanlines.value = true

  const s: typeof strips.value = []
  for (let i = 0; i < 12; i++) {
    s.push({ offset: Math.random() * 100, delay: Math.random() * 0.3 })
  }
  strips.value = s

  setTimeout(() => {
    glitch.value = true
  }, 100)

  setTimeout(() => {
    showText.value = false
    noise.value = false
    glitch.value = false
    scanlines.value = false
    strips.value = []

    setTimeout(() => {
      quote.value = randomQuote(locale.value)

      setTimeout(() => {
        showText.value = true
        transitioning.value = false
      }, 80)
    }, 150)
  }, 500)
}
</script>

<template>
  <section class="relative flex min-h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]" />

    <!-- Static noise overlay -->
    <div
      v-if="noise"
      class="pointer-events-none absolute inset-0 z-10 opacity-40 noise-overlay"
    />

    <!-- Scanlines -->
    <div
      v-if="scanlines"
      class="pointer-events-none absolute inset-0 z-10 opacity-20"
      style="background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px);"
    />

    <!-- Glitch strips -->
    <div
      v-for="(s, i) in strips"
      :key="i"
      class="pointer-events-none absolute z-10 h-2 bg-white/10"
      :style="{
        left: '0',
        right: '0',
        top: `${s.offset}%`,
        animation: `strip-flash 0.4s ${s.delay}s ease-out forwards`,
      }"
    />

    <div class="relative z-0 mx-auto max-w-3xl px-6 text-center">
      <Transition name="enter">
        <div
          v-if="showText"
          :key="quote.text"
          class="transition-none"
          :class="{
            'animate-glitch': glitch,
          }"
        >
          <p class="font-serif text-lg leading-relaxed text-orange-200">"{{ quote.text }}"</p>
          <p class="font-serif mt-3 text-sm font-medium text-orange-400">— {{ quote.author }}</p>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style>
@keyframes noise-scroll {
  0% { background-position: 0 0; }
  100% { background-position: 0 128px; }
}

@keyframes strip-flash {
  0% { opacity: 0; }
  15% { opacity: 0.5; }
  40% { opacity: 0.3; }
  100% { opacity: 0; }
}

@keyframes glitch {
  0% { transform: translateX(0); filter: none; opacity: 1; }
  15% { transform: translateX(-4px); filter: hue-rotate(90deg) brightness(1.5); opacity: 0.7; }
  25% { transform: translateX(4px); filter: hue-rotate(-90deg) brightness(2); opacity: 1; }
  35% { transform: translateX(-2px); filter: none; opacity: 0.5; }
  50% { transform: translateX(2px); filter: brightness(0.2); opacity: 0.3; }
  65% { transform: translateX(0); filter: brightness(0); opacity: 0; }
  100% { transform: translateX(0); filter: brightness(0); opacity: 0; }
}

.animate-glitch {
  animation: glitch 0.4s ease-in-out forwards;
}

.noise-overlay {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  animation: noise-scroll 0.1s steps(4) infinite;
}

.enter-enter-active {
  transition: all 0.5s ease-out;
}
.enter-enter-from {
  opacity: 0;
  filter: blur(2px);
}
</style>
