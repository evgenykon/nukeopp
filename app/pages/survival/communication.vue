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
        <h1 class="text-2xl font-bold">{{ $t("pages.survival_communication") }}</h1>
        <p class="mt-1 text-sm text-muted-foreground">{{ $t("survivalIndex.communicationDesc") }}</p>
      </div>

      <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.intro'))" />

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.radioTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.radioText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.gearTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.gearText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.antennaTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.antennaText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.powerTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.powerText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.protocolTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.protocolText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.stockpileTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.stockpileText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.buildTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.buildText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.phoneTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.phoneText'))" />
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("communication.nonRadioTitle") }}</h2>
        <p class="text-sm leading-relaxed text-muted-foreground" v-html="md($t('communication.nonRadioText'))" />
      </div>

      <div class="rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
        <p class="text-xs leading-relaxed text-orange-400/80">{{ $t("communication.footer") }}</p>
      </div>
    </div>
  </div>
</template>
