<script setup lang="ts">
import type { PlanFactors } from "~/utils/survivalPlan"
import { locationTypes, factors as factorDefs, generatePlan } from "~/utils/survivalPlan"
import { conflicts } from "~/utils/scenarios"
import type { Conflict } from "~/utils/scenarios"

const { t, locale } = useI18n()

const countries = [
  { en: "Russia", ru: "Россия" },
  { en: "USA", ru: "США" },
  { en: "China", ru: "Китай" },
  { en: "UK", ru: "Великобритания" },
  { en: "France", ru: "Франция" },
  { en: "India", ru: "Индия" },
  { en: "Pakistan", ru: "Пакистан" },
  { en: "North Korea", ru: "КНДР" },
  { en: "Israel", ru: "Израиль" },
  { en: "Ukraine", ru: "Украина" },
  { en: "Germany", ru: "Германия" },
  { en: "Japan", ru: "Япония" },
  { en: "South Korea", ru: "Южная Корея" },
  { en: "Other European", ru: "Другая европейская" },
  { en: "Other Asian", ru: "Другая азиатская" },
  { en: "Other", ru: "Другая" },
]

const checked = ref<Record<string, boolean>>({})
const selectedCountry = ref("")
const selectedLocation = ref("")
const selectedScenario = ref("")
const generated = ref(false)
const plan = ref<ReturnType<typeof generatePlan>>([])

const allScenarios = computed(() => {
  const list: { id: string; name: Record<string, string> }[] = []
  for (const c of conflicts) {
    for (const s of c.scenarios) {
      list.push({ id: s.id, name: s.name })
    }
  }
  return list
})

function generate() {
  if (!selectedCountry.value || !selectedLocation.value || !selectedScenario.value) return
  const factors: PlanFactors = {
    countryId: selectedCountry.value,
    locationId: selectedLocation.value,
    scenarioId: selectedScenario.value,
    checked: { ...checked.value },
  }
  plan.value = generatePlan(factors, locale.value)
  generated.value = true
}

function reset() {
  checked.value = {}
  selectedCountry.value = ""
  selectedLocation.value = ""
  selectedScenario.value = ""
  generated.value = false
  plan.value = []
}

function md(text: string | undefined): string {
  return (text ?? "")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>")
}
</script>

<template>
  <div class="flex flex-col gap-6 px-6 py-8">
    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <div>
        <h1 class="text-2xl font-bold">{{ t("pages.survival_prepare") }}</h1>
        <p class="mt-1 text-sm text-muted-foreground">{{ t("survivalIndex.prepareDesc") }}</p>
      </div>

      <!-- Form -->
      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-4 text-sm font-bold">{{ t("prepare.formTitle") }}</h2>
        <p class="mb-4 text-xs text-muted-foreground">{{ t("prepare.formDesc") }}</p>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label class="mb-1.5 block text-xs font-medium text-muted-foreground">{{ t("prepare.country") }}</label>
            <select
              v-model="selectedCountry"
              class="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-orange-500 focus:outline-none"
            >
              <option value="" disabled>&nbsp;</option>
              <option v-for="c in countries" :key="c.en" :value="c.en">
                {{ c[locale] ?? c.en }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-1.5 block text-xs font-medium text-muted-foreground">{{ t("prepare.location") }}</label>
            <select
              v-model="selectedLocation"
              class="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-orange-500 focus:outline-none"
            >
              <option value="" disabled>&nbsp;</option>
              <option v-for="loc in locationTypes" :key="loc.id" :value="loc.id">
                {{ loc[locale] ?? loc.en }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-1.5 block text-xs font-medium text-muted-foreground">{{ t("prepare.scenario") }}</label>
            <select
              v-model="selectedScenario"
              class="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-orange-500 focus:outline-none"
            >
              <option value="" disabled>&nbsp;</option>
              <option v-for="s in allScenarios" :key="s.id" :value="s.id">
                {{ s.name[locale] ?? s.name.en }}
              </option>
            </select>
          </div>
        </div>

        <div class="mt-5">
          <label class="mb-2 block text-xs font-medium text-muted-foreground">{{ t("prepare.factors") }}</label>
          <div class="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
            <label
              v-for="f in factorDefs"
              :key="f.id"
              class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition-colors hover:bg-accent"
            >
              <input
                type="checkbox"
                :checked="checked[f.id] ?? false"
                class="h-4 w-4 rounded border-border text-orange-500 focus:ring-orange-500"
                @change="checked[f.id] = ($event.target as HTMLInputElement).checked"
              />
              <span class="text-xs text-foreground">{{ f[locale] ?? f.en }}</span>
            </label>
          </div>
        </div>

        <div class="mt-5 flex gap-3">
          <button
            class="rounded-lg bg-orange-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600 disabled:opacity-40"
            :disabled="!selectedCountry || !selectedLocation || !selectedScenario"
            @click="generate"
          >
            {{ t("prepare.generate") }}
          </button>
          <button
            class="rounded-lg border border-border px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent"
            @click="reset"
          >
            {{ t("prepare.reset") }}
          </button>
        </div>
      </div>

      <!-- Results -->
      <div v-if="!generated" class="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-border text-center">
        <p class="px-4 text-sm text-muted-foreground">{{ t("prepare.selectPrompt") }}</p>
      </div>

      <div v-else class="flex flex-col gap-4">
        <h2 class="text-sm font-bold">{{ t("prepare.planTitle") }}</h2>

        <div v-for="(section, si) in plan" :key="si" class="rounded-lg border border-border bg-card p-4">
          <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-orange-400">{{ section.title[locale] ?? section.title.en }}</h3>
          <ul class="flex flex-col gap-2">
            <li v-for="(item, ii) in section.items" :key="ii" class="flex gap-2 text-xs leading-relaxed text-muted-foreground">
              <span class="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/50" />
              <span v-html="md(item[locale] ?? item.en)" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
