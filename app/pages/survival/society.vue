<template>
  <div class="flex flex-col gap-6 px-6 py-8">
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div>
        <h1 class="text-2xl font-bold">{{ $t("pages.survival_society") }}</h1>
        <p class="mt-1 text-sm text-muted-foreground">{{ $t("survivalIndex.societyDesc") }}</p>
      </div>

      <div class="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
        <p class="text-xs leading-relaxed text-red-400/80">⚠ {{ $t("society.disclaimer") }}</p>
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("society.phase1Title") }}</h2>
        <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{{ $t("society.phase1Text") }}</p>
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("society.phase2Title") }}</h2>
        <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{{ $t("society.phase2Text") }}</p>
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("society.phase3Title") }}</h2>
        <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{{ $t("society.phase3Text") }}</p>
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("society.phase4Title") }}</h2>
        <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{{ $t("society.phase4Text") }}</p>
      </div>

      <div class="rounded-lg border border-border bg-card p-5">
        <h2 class="mb-3 text-sm font-bold">{{ $t("society.phase5Title") }}</h2>
        <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{{ $t("society.phase5Text") }}</p>
      </div>

      <div class="rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
        <p class="text-xs leading-relaxed text-orange-400/80">{{ $t("society.footer") }}</p>
      </div>
    </div>
  </div>
</template>
