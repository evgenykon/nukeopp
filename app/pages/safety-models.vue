<script setup lang="ts">
import type { SafetyModel } from "~/utils/safetyModels"
import { safetyModels } from "~/utils/safetyModels"

const { t, locale } = useI18n()

const selectedModel = ref<SafetyModel | null>(null)
const scrolledTo = ref(false)

function pickModel(m: SafetyModel) {
  selectedModel.value = m
  if (!scrolledTo.value) {
    nextTick(() => {
      document.getElementById("model-detail")?.scrollIntoView({ behavior: "smooth", block: "start" })
      scrolledTo.value = true
    })
  }
}

function renderMd(text: string | undefined): string {
  return (text ?? "")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>")
}
</script>

<template>
  <div class="flex flex-col gap-6 px-6 py-8">
    <div>
      <h1 class="text-2xl font-bold">{{ t("pages.safetyModels") }}</h1>
      <p class="mt-1 text-sm text-muted-foreground">{{ t("safetyModels.subtitle") }}</p>
    </div>

    <div class="models-layout">
      <!-- Column 1: Models list -->
      <div class="models-col">
        <h2 class="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("safetyModels.models") }}</h2>
        <div class="flex flex-col gap-1.5">
          <button
            v-for="m in safetyModels"
            :key="m.id"
            class="w-full rounded-lg border px-3.5 py-2.5 text-left text-sm font-medium transition-colors"
            :class="
              selectedModel?.id === m.id
                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                : 'border-border text-muted-foreground hover:border-orange-500/40 hover:text-foreground'
            "
            @click="pickModel(m)"
          >
            {{ m.name[locale] ?? m.name.en }}
          </button>
        </div>
      </div>

      <!-- Column 2: Detail -->
      <div id="model-detail" class="models-col models-col-main">
        <div v-if="!selectedModel" class="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-border text-center">
          <p class="px-4 text-sm text-muted-foreground">{{ t("safetyModels.pickModel") }}</p>
        </div>
        <div v-else class="flex flex-col gap-4">
          <h2 class="text-lg font-bold">{{ selectedModel.name[locale] ?? selectedModel.name.en }}</h2>

          <div class="rounded-lg border border-border bg-card p-4">
            <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("safetyModels.description") }}</h3>
            <p class="whitespace-pre-line text-sm leading-relaxed text-foreground">{{ selectedModel.description[locale] ?? selectedModel.description.en }}</p>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("safetyModels.authors") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedModel.authors[locale] ?? selectedModel.authors.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("safetyModels.guarantors") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedModel.guarantors[locale] ?? selectedModel.guarantors.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("safetyModels.requirements") }}</h3>
              <p class="whitespace-pre-line text-sm leading-relaxed text-foreground">{{ selectedModel.requirements[locale] ?? selectedModel.requirements.en }}</p>
            </div>
            <div class="rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-orange-400">{{ t("safetyModels.breachProbability") }}</h3>
              <p class="text-sm leading-relaxed text-foreground" v-html="renderMd(selectedModel.breachProbability[locale] ?? selectedModel.breachProbability.en)" />
            </div>
          </div>

          <div class="text-right text-xs text-muted-foreground">
            {{ t("safetyModels.source") }}: <a :href="selectedModel.source" target="_blank" rel="noopener noreferrer" class="text-orange-400 hover:text-orange-300">{{ selectedModel.source }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.models-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.models-col {
  min-width: 0;
}

@media (min-width: 1024px) {
  .models-layout {
    flex-direction: row;
  }

  .models-col {
    flex: 1;
  }

  .models-col-main {
    flex: 5;
  }
}
</style>
