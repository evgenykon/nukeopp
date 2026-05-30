<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const route = useRoute()
const survivalOpen = ref(false)
const survivalRef = ref<HTMLElement | null>(null)

const locales = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
]

function isActive(path: string) {
  return route.path === path
}

function isSurvivalActive() {
  return route.path.startsWith("/survival/")
}

function toggleSurvival() {
  survivalOpen.value = !survivalOpen.value
}

function closeSurvival() {
  survivalOpen.value = false
}

onClickOutside(survivalRef, closeSurvival)
</script>

<template>
  <header class="flex h-14 shrink-0 items-center justify-between border-b border-border bg-card px-4">
    <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
      <Icon name="i-mdi-radioactive" class="h-5 w-5 text-orange-500" />
      <span class="text-sm font-semibold">{{ t("app.title") }}</span>
    </NuxtLink>

    <nav class="flex items-center gap-1 text-sm">
      <NuxtLink
        v-for="item in [
          { to: '/war-targets', label: t('nav.warTargets') },
          { to: '/war-scenarios', label: t('nav.warScenarios') },
          { to: '/weapons', label: t('nav.weapons') },
          { to: '/safety-models', label: t('nav.safetyModels') },
        ]"
        :key="item.to"
        :to="item.to"
        class="rounded px-3 py-1.5 transition-colors"
        :class="isActive(item.to) ? 'text-orange-500' : 'text-muted-foreground hover:bg-orange-500/10 hover:text-orange-500'"
      >
        {{ item.label }}
      </NuxtLink>

      <div ref="survivalRef" class="relative">
        <button
          class="flex items-center gap-1 rounded px-3 py-1.5 transition-colors"
          :class="isSurvivalActive() ? 'text-orange-500' : 'text-muted-foreground hover:bg-orange-500/10 hover:text-orange-500'"
          @click="toggleSurvival"
        >
          {{ t("nav.survival") }}
          <Icon
            :name="survivalOpen ? 'i-mdi-chevron-up' : 'i-mdi-chevron-down'"
            class="h-4 w-4"
          />
        </button>
        <div
          v-if="survivalOpen"
          class="absolute right-0 top-full z-30 mt-1 w-48 rounded-lg border border-border bg-card py-1 shadow-lg"
        >
          <NuxtLink
            v-for="sub in [
              { to: '/survival/first-aid', label: t('nav.survival_firstAid') },
              { to: '/survival/cheatsheet', label: t('nav.survival_cheatsheet') },
              { to: '/survival/prepare', label: t('nav.survival_prepare') },
              { to: '/survival/communication', label: t('nav.survival_communication') },
              { to: '/survival/society', label: t('nav.survival_society') },
            ]"
            :key="sub.to"
            :to="sub.to"
            class="block px-3 py-1.5 text-xs transition-colors"
            :class="isActive(sub.to) ? 'text-orange-500' : 'hover:bg-orange-500/10 hover:text-orange-500'"
            @click="closeSurvival"
          >
            {{ sub.label }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <div class="flex items-center gap-1">
      <button
        v-for="l in locales"
        :key="l.code"
        class="rounded px-2 py-1 text-xs font-medium transition-colors"
        :class="locale === l.code ? 'bg-accent text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground'"
        @click="setLocale(l.code)"
      >
        {{ l.label }}
      </button>
    </div>
  </header>
</template>
