<script setup lang="ts">
import type { MilitaryTarget } from "~/utils/targets"
import { targetTabs } from "~/utils/targets"

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

const activeTab = ref(targetTabs[0].id)
const selectedTarget = ref<MilitaryTarget | null>(null)
const mapRef = ref<InstanceType<typeof WarTargetsMap> | null>(null)

const currentTargets = computed(() => {
  const tab = targetTabs.find((t) => t.id === activeTab.value)
  return tab?.targets ?? []
})

function tabFromHash() {
  const hash = route.hash?.replace("#", "")
  const tab = targetTabs.find((t) => t.id === hash)
  if (tab) activeTab.value = tab.id
}

watch(activeTab, (id) => {
  router.replace({ hash: `#${id}` })
  selectedTarget.value = null
})

onMounted(tabFromHash)

function onSelect(target: MilitaryTarget) {
  selectedTarget.value = target
}

function onClose() {
  selectedTarget.value = null
}
</script>

<template>
  <div class="flex flex-col gap-6 px-6 py-8">
    <div>
      <h1 class="text-2xl font-bold">{{ t("pages.warTargets") }}</h1>
      <p class="mt-1 text-sm text-muted-foreground">
        {{ t("targets.subtitle") }}
      </p>
    </div>

    <!-- Why know targets -->
    <div class="rounded-lg border border-border bg-card px-5 py-4">
      <h2 class="mb-2 text-sm font-bold uppercase tracking-wider text-orange-400">{{ t("targets.reasonTitle") }}</h2>
      <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {{ t("targets.reasonText") }}
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tab in targetTabs"
        :key="tab.id"
        class="rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors"
        :class="
          activeTab === tab.id
            ? 'border-orange-500 bg-orange-500/10 text-orange-400'
            : 'border-border text-muted-foreground hover:border-orange-500/40 hover:text-foreground'
        "
        @click="activeTab = tab.id"
      >
        {{ tab.icon }}
        {{ tab.label[locale] ?? tab.label.en }}
      </button>
    </div>

    <!-- Map + Info Panel -->
    <div class="flex flex-row h-[520px] gap-4">
      <div class="min-w-0 flex-1">
        <ClientOnly>
          <div class="h-full overflow-hidden rounded-lg border border-border">
            <WarTargetsMap
              ref="mapRef"
              :targets="currentTargets"
              @select="onSelect"
            />
          </div>
        </ClientOnly>
      </div>
      <div class="w-80 shrink-0 overflow-y-auto">
        <TargetInfoPanel
          :target="selectedTarget"
          @close="onClose"
        />
      </div>
    </div>
  </div>
</template>
