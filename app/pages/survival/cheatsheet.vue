<script setup lang="ts">
const { t } = useI18n()

function md(text: string | undefined): string {
  return (text ?? "")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>")
}
</script>

<template>
  <div class="flex flex-col gap-4 px-4 py-6">
    <div class="mx-auto flex w-full max-w-5xl flex-col gap-4">
      <div>
        <h1 class="text-xl font-bold">{{ $t("pages.survival_cheatsheet") }}</h1>
        <p class="mt-1 text-xs text-muted-foreground">{{ $t("survivalIndex.cheatsheetDesc") }}</p>
      </div>

      <div class="flex flex-col gap-3">
        <div class="rounded-lg border border-border bg-card p-3">
          <p class="mb-1 text-xs font-bold">{{ $t("cheatsheet.threatTitle") }}</p>
          <p class="text-xs leading-relaxed text-muted-foreground" v-html="md($t('cheatsheet.threatText'))" />
        </div>

        <div class="rounded-lg border border-border bg-card p-3">
          <p class="mb-1 text-xs font-bold">{{ $t("cheatsheet.goBagTitle") }}</p>
          <p class="text-xs leading-relaxed text-muted-foreground" v-html="md($t('cheatsheet.goBagText'))" />
        </div>

        <div class="rounded-lg border border-border bg-card p-3">
          <p class="mb-1 text-xs font-bold">{{ $t("cheatsheet.shelterTitle") }}</p>
          <p class="text-xs leading-relaxed text-muted-foreground" v-html="md($t('cheatsheet.shelterText'))" />
        </div>

        <div class="rounded-lg border border-border bg-card p-3">
          <p class="mb-1 text-xs font-bold">{{ $t("cheatsheet.suppliesTitle") }}</p>
          <p class="text-xs leading-relaxed text-muted-foreground" v-html="md($t('cheatsheet.suppliesText'))" />
        </div>

        <div class="rounded-lg border border-border bg-card p-3">
          <p class="mb-1 text-xs font-bold">{{ $t("cheatsheet.radRulesTitle") }}</p>
          <p class="text-xs leading-relaxed text-muted-foreground" v-html="md($t('cheatsheet.radRulesText'))" />
        </div>

        <div class="rounded-lg border border-border bg-card p-3">
          <p class="mb-1 text-xs font-bold">{{ $t("cheatsheet.freqTitle") }}</p>
          <p class="text-xs leading-relaxed text-muted-foreground" v-html="md($t('cheatsheet.freqText'))" />
        </div>

        <div class="rounded-lg border border-border bg-card p-3">
          <p class="mb-1 text-xs font-bold">{{ $t("cheatsheet.signalsTitle") }}</p>
          <p class="text-xs leading-relaxed text-muted-foreground" v-html="md($t('cheatsheet.signalsText'))" />
        </div>
      </div>
    </div>
  </div>
</template>
