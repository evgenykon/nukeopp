<script setup lang="ts">
defineProps<{
  page: "targets" | "scenarios"
}>()

const { t } = useI18n()
</script>

<template>
  <div class="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
    <p class="text-xs leading-relaxed text-red-400/80">
      ⚖ {{ page === "targets" ? t("disclaimers.targets") : t("disclaimers.scenarios") }}
    </p>
  </div>
</template>
