<script setup lang="ts">
import type { MilitaryTarget } from "~/utils/targets"

const { t, locale } = useI18n()

const props = defineProps<{
  target: MilitaryTarget | null
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Transition name="panel" mode="out-in">
    <div
      v-if="target"
      key="info"
      class="rounded-lg border border-border bg-card p-5"
    >
      <div class="mb-1 flex items-start justify-between gap-3">
        <h3 class="text-base font-bold">
          {{ target.name[locale] ?? target.name.en }}
        </h3>
        <button
          class="shrink-0 rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
          @click="emit('close')"
        >
          <span class="i-mdi-close text-lg" />
        </button>
      </div>
      <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
        {{ target.description[locale] ?? target.description.en }}
      </p>
      <div class="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span><span class="font-medium text-foreground">{{ t("targets.coordinates") }}:</span> {{ target.lat.toFixed(4) }}, {{ target.lng.toFixed(4) }}</span>
        <span><span class="font-medium text-foreground">{{ t("targets.date") }}:</span> {{ target.date }}</span>
      </div>
      <a
        :href="target.source"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm text-orange-400 transition-colors hover:text-orange-300"
      >
        <span class="i-mdi-open-in-new text-base" />
        {{ target.sourceLabel[locale] ?? target.sourceLabel.en }}
      </a>
    </div>
    <div
      v-else
      key="empty"
      class="flex h-full items-center justify-center rounded-lg border border-dashed border-border text-center"
    >
      <p class="px-4 text-sm text-muted-foreground">
        {{ t("targets.clickHint") }}
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.panel-enter-active,
.panel-leave-active {
  transition: all 0.3s ease-out;
}
.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
