<script setup lang="ts">
const { t, locale } = useI18n()

const sectionList = computed(() =>
  newsSections.map((s) => ({
    icon: s.icon,
    title: s.title[locale.value] ?? s.title.en,
    items: s.items.map((item) => ({
      icon: s.icon,
      label: item.label[locale.value] ?? item.label.en,
      desc: item.desc[locale.value] ?? item.desc.en,
      url: item.url,
    })),
  })),
)
</script>

<template>
  <div class="flex flex-col">
    <QuoteBanner />

    <section class="border-t border-border px-6 py-16">
      <div class="mx-auto max-w-3xl">
        <h2 class="mb-6 text-xl font-bold">{{ t("home.purpose") }}</h2>
        <p class="whitespace-pre-line leading-relaxed text-muted-foreground">{{ t("home.purposeText") }}</p>
      </div>
    </section>

    <section class="border-t border-border bg-card px-6 py-16">
      <div class="mx-auto max-w-3xl">
        <h2 class="mb-6 text-xl font-bold">{{ t("home.generalInfo") }}</h2>
        <i18n-t keypath="home.generalInfoText" tag="p" class="whitespace-pre-line leading-relaxed text-muted-foreground">
          <template #link>
            <a href="https://thebulletin.org/doomsday-clock/" target="_blank" rel="noopener noreferrer" class="underline text-orange-400 hover:text-orange-300">{{ t("home.clockLink") }}</a>
          </template>
        </i18n-t>
      </div>
    </section>

    <section class="border-t border-border px-6 py-16">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-8 text-xl font-bold">{{ t("home.newsTitle") }}</h2>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
          <div
            v-for="section in sectionList"
            :key="section.title"
            class="contents"
          >
            <div
              class="col-span-full mb-1"
            >
              <h3 class="text-sm font-bold text-orange-400">{{ section.icon }} {{ section.title }}</h3>
            </div>
            <div
              v-for="item in section.items"
              :key="item.label"
              class="flex flex-col gap-2 rounded-lg border border-border bg-card p-3"
            >
              <div class="flex items-start gap-1.5">
                <span class="mt-0.5 shrink-0 text-xs">{{ item.icon }}</span>
                <div class="min-w-0">
                  <h4 class="text-sm font-semibold leading-snug">{{ item.label }}</h4>
                  <p class="mt-1 text-xs leading-relaxed text-muted-foreground">{{ item.desc }}</p>
                </div>
              </div>
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-auto self-start text-xs text-orange-400 hover:text-orange-300 transition-colors"
              >
                {{ t("home.source") }} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
