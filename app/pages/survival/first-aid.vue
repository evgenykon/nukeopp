<script setup lang="ts">
const { t } = useI18n()

function md(text: string | undefined): string {
  return (text ?? "")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>")
}
</script>

<template>
  <div class="flex flex-col gap-6 px-6 py-8">
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div>
        <h1 class="text-2xl font-bold">{{ $t("pages.survival_firstAid") }}</h1>
        <p class="mt-1 text-sm text-muted-foreground">{{ $t("survivalIndex.firstAidDesc") }}</p>
      </div>

      <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('firstAid.intro'))" />

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("firstAid.radiationTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('firstAid.radiationText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("firstAid.burnsTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('firstAid.burnsText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("firstAid.blastTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('firstAid.blastText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("firstAid.hygieneTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('firstAid.hygieneText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("firstAid.stockpileTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('firstAid.stockpileText'))" />
      </div>

      <div class="rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
        <p class="text-xs leading-relaxed text-orange-400/80">{{ $t("firstAid.footer") }}</p>
      </div>
    </div>
  </div>
</template>
