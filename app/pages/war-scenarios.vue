<script setup lang="ts">
import type { Scenario, Conflict } from "~/utils/scenarios"
import { conflicts } from "~/utils/scenarios"

const { t, locale } = useI18n()

const selectedConflict = ref<Conflict | null>(null)
const selectedScenario = ref<Scenario | null>(null)
const scrolledTo = ref(false)

function pickConflict(c: Conflict) {
  selectedConflict.value = c
  selectedScenario.value = null
  scrolledTo.value = false
}

function pickScenario(s: Scenario) {
  selectedScenario.value = s
  if (!scrolledTo.value) {
    nextTick(() => {
      document.getElementById("scenario-detail")?.scrollIntoView({ behavior: "smooth", block: "start" })
      scrolledTo.value = true
    })
  }
}
</script>

<template>
  <div class="flex flex-col gap-6 px-6 py-8">
    <div>
      <h1 class="text-2xl font-bold">{{ t("pages.warScenarios") }}</h1>
      <p class="mt-1 text-sm text-muted-foreground">{{ t("scenarios.subtitle") }}</p>
    </div>

    <LegalDisclaimer page="scenarios" />

    <div class="scenarios-layout">
      <!-- Column 1: Conflicts -->
      <div class="scenarios-col">
        <h2 class="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.conflicts") }}</h2>
        <div class="flex flex-col gap-1.5">
          <button
            v-for="c in conflicts"
            :key="c.id"
            class="w-full rounded-lg border px-3.5 py-2.5 text-left text-sm font-medium transition-colors"
            :class="
              selectedConflict?.id === c.id
                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                : 'border-border text-muted-foreground hover:border-orange-500/40 hover:text-foreground'
            "
            @click="pickConflict(c)"
          >
            {{ c.name[locale] ?? c.name.en }}
          </button>
        </div>
      </div>

      <!-- Column 2: Scenarios -->
      <div class="scenarios-col">
        <h2 class="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.scenarios") }}</h2>
        <div v-if="!selectedConflict" class="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-border text-center">
          <p class="px-4 text-sm text-muted-foreground">{{ t("scenarios.pickConflict") }}</p>
        </div>
        <div v-else class="flex flex-col gap-1.5">
          <button
            v-for="s in selectedConflict.scenarios"
            :key="s.id"
            class="w-full rounded-lg border px-3.5 py-2.5 text-left text-sm font-medium transition-colors"
            :class="
              selectedScenario?.id === s.id
                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                : 'border-border text-muted-foreground hover:border-orange-500/40 hover:text-foreground'
            "
            @click="pickScenario(s)"
          >
            {{ s.name[locale] ?? s.name.en }}
          </button>
        </div>
      </div>

      <!-- Column 3: Detail -->
      <div id="scenario-detail" class="scenarios-col scenarios-col-main">
        <div v-if="!selectedScenario" class="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-border text-center">
          <p class="px-4 text-sm text-muted-foreground">{{ t("scenarios.pickScenario") }}</p>
        </div>
        <div v-else class="flex flex-col gap-4">
          <h2 class="text-lg font-bold">{{ selectedScenario.name[locale] ?? selectedScenario.name.en }}</h2>

          <div class="rounded-lg border border-border bg-card p-4">
            <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.description") }}</h3>
            <p class="whitespace-pre-line text-sm leading-relaxed text-foreground">{{ selectedScenario.description[locale] ?? selectedScenario.description.en }}</p>
          </div>

          <div class="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
            <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-yellow-400">{{ t("scenarios.harbingers") }}</h3>
            <p class="whitespace-pre-line text-sm leading-relaxed text-foreground">{{ selectedScenario.harbingers[locale] ?? selectedScenario.harbingers.en }}</p>
          </div>

          <div class="rounded-lg border border-border bg-card p-4">
            <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.participants") }}</h3>
            <p class="text-sm leading-relaxed text-foreground">{{ selectedScenario.participants[locale] ?? selectedScenario.participants.en }}</p>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.damage") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedScenario.damage[locale] ?? selectedScenario.damage.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.casualties") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedScenario.casualties[locale] ?? selectedScenario.casualties.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.planetary") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedScenario.planetary[locale] ?? selectedScenario.planetary.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.survival") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedScenario.survival[locale] ?? selectedScenario.survival.en }}</p>
            </div>
          </div>

          <div class="flex items-center justify-between rounded-lg border border-border bg-card p-4">
            <div>
              <h3 class="mb-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("scenarios.probability") }}</h3>
              <p class="text-sm font-medium text-foreground">{{ selectedScenario.probability[locale] ?? selectedScenario.probability.en }}</p>
            </div>
            <span
              class="rounded-full px-3 py-1 text-xs font-bold"
              :class="{
                'bg-green-500/15 text-green-400': selectedScenario.probabilityLabel.en === 'High',
                'bg-yellow-500/15 text-yellow-400': selectedScenario.probabilityLabel.en === 'Medium',
                'bg-orange-500/15 text-orange-400': selectedScenario.probabilityLabel.en === 'Low',
                'bg-red-500/15 text-red-400': selectedScenario.probabilityLabel.en === 'Very Low' || selectedScenario.probabilityLabel.en === 'Extremely Low',
              }"
            >
              {{ selectedScenario.probabilityLabel[locale] ?? selectedScenario.probabilityLabel.en }}
            </span>
          </div>

          <div class="text-right text-xs text-muted-foreground">
            {{ t("scenarios.probSource") }}: <a :href="selectedScenario.probabilitySource" target="_blank" rel="noopener noreferrer" class="text-orange-400 hover:text-orange-300">{{ selectedScenario.probabilitySource }}</a>
          </div>

          <div class="text-right text-xs text-muted-foreground">
            {{ t("scenarios.source") }}: <a :href="selectedScenario.source" target="_blank" rel="noopener noreferrer" class="text-orange-400 hover:text-orange-300">{{ selectedScenario.source }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scenarios-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.scenarios-col {
  min-width: 0;
}

@media (min-width: 1024px) {
  .scenarios-layout {
    flex-direction: row;
  }

  .scenarios-col {
    flex: 1;
  }

  .scenarios-col-main {
    flex: 4;
  }
}
</style>
