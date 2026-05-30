<script setup lang="ts">
import type { Weapon, Country } from "~/utils/weapons"
import { countries } from "~/utils/weapons"

const { t, locale } = useI18n()

const selectedCountry = ref<Country | null>(null)
const selectedWeapon = ref<Weapon | null>(null)
const scrolledTo = ref(false)

const maxWarheads = computed(() => Math.max(...countries.map((c) => c.warheads)))
const maxWeaponWarheads = computed(() =>
  selectedCountry.value ? Math.max(...selectedCountry.value.weapons.map((w) => w.warheads)) : 1
)

function pickCountry(c: Country) {
  selectedCountry.value = c
  selectedWeapon.value = null
  scrolledTo.value = false
}

function pickWeapon(w: Weapon) {
  selectedWeapon.value = w
  if (!scrolledTo.value) {
    nextTick(() => {
      document.getElementById("weapon-detail")?.scrollIntoView({ behavior: "smooth", block: "start" })
      scrolledTo.value = true
    })
  }
}
</script>

<template>
  <div class="flex flex-col gap-6 px-6 py-8">
    <div>
      <h1 class="text-2xl font-bold">{{ t("pages.weapons") }}</h1>
      <p class="mt-1 text-sm text-muted-foreground">{{ t("weapons.subtitle") }}</p>
    </div>

    <div class="scenarios-layout">
      <!-- Column 1: Countries -->
      <div class="scenarios-col">
        <h2 class="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.countries") }}</h2>
        <div class="flex flex-col gap-1.5">
          <button
            v-for="c in countries"
            :key="c.id"
            class="w-full rounded-lg border px-3.5 py-2.5 text-left text-sm font-medium transition-colors"
            :class="
              selectedCountry?.id === c.id
                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                : 'border-border text-muted-foreground hover:border-orange-500/40 hover:text-foreground'
            "
            @click="pickCountry(c)"
          >
            <div class="flex items-center justify-between">
              <span>{{ c.name[locale] ?? c.name.en }}</span>
              <span class="text-xs text-muted-foreground">{{ c.warheads.toLocaleString() }}</span>
            </div>
            <div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div
                class="h-full rounded-full bg-orange-500/70 transition-all duration-300"
                :style="{ width: (c.warheads / maxWarheads) * 100 + '%' }"
              />
            </div>
          </button>
        </div>
      </div>

      <!-- Column 2: Weapons -->
      <div class="scenarios-col">
        <h2 class="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.weapons") }}</h2>
        <div v-if="!selectedCountry" class="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-border text-center">
          <p class="px-4 text-sm text-muted-foreground">{{ t("weapons.pickCountry") }}</p>
        </div>
        <div v-else class="flex flex-col gap-1.5">
          <button
            v-for="w in selectedCountry.weapons"
            :key="w.id"
            class="w-full rounded-lg border px-3.5 py-2.5 text-left text-sm font-medium transition-colors"
            :class="
              selectedWeapon?.id === w.id
                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                : 'border-border text-muted-foreground hover:border-orange-500/40 hover:text-foreground'
            "
            @click="pickWeapon(w)"
          >
            <div class="flex items-center justify-between">
              <span>{{ w.name[locale] ?? w.name.en }}</span>
              <span class="text-xs text-muted-foreground">{{ w.warheads.toLocaleString() }}</span>
            </div>
            <div class="mt-1 h-1 w-full overflow-hidden rounded-full bg-border">
              <div
                class="h-full rounded-full transition-all duration-300"
                :class="selectedWeapon?.id === w.id ? 'bg-orange-500/70' : 'bg-muted-foreground/20'"
                :style="{ width: (w.warheads / maxWeaponWarheads) * 100 + '%' }"
              />
            </div>
          </button>
        </div>
      </div>

      <!-- Column 3: Detail -->
      <div id="weapon-detail" class="scenarios-col scenarios-col-main">
        <div v-if="!selectedWeapon" class="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-border text-center">
          <p class="px-4 text-sm text-muted-foreground">{{ t("weapons.pickWeapon") }}</p>
        </div>
        <div v-else class="flex flex-col gap-4">
          <h2 class="text-lg font-bold">{{ selectedWeapon.name[locale] ?? selectedWeapon.name.en }}</h2>

          <div class="rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
            <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-orange-400">{{ t("weapons.versions") }}</h3>
            <p class="text-sm leading-relaxed text-foreground">{{ selectedWeapon.versions[locale] ?? selectedWeapon.versions.en }}</p>
          </div>

          <div class="rounded-lg border border-border bg-card p-4">
            <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.description") }}</h3>
            <p class="whitespace-pre-line text-sm leading-relaxed text-foreground">{{ selectedWeapon.description[locale] ?? selectedWeapon.description.en }}</p>
          </div>

          <div class="rounded-lg border border-border bg-card p-4">
            <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.specs") }}</h3>
            <table class="w-full">
              <tbody>
                <tr v-for="spec in selectedWeapon.specs" :key="spec.label.en" class="border-b border-border last:border-b-0">
                  <td class="w-1/3 py-1.5 pr-4 text-xs font-medium text-muted-foreground">{{ spec.label[locale] ?? spec.label.en }}</td>
                  <td class="py-1.5 text-sm text-foreground">{{ spec.value[locale] ?? spec.value.en }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.upgrades") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedWeapon.upgrades[locale] ?? selectedWeapon.upgrades.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.history") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedWeapon.history[locale] ?? selectedWeapon.history.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.designers") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedWeapon.designers[locale] ?? selectedWeapon.designers.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.inventory") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedWeapon.inventory[locale] ?? selectedWeapon.inventory.en }}</p>
            </div>
            <div class="rounded-lg border border-border bg-card p-4">
              <h3 class="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{{ t("weapons.tests") }}</h3>
              <p class="text-sm leading-relaxed text-foreground">{{ selectedWeapon.tests[locale] ?? selectedWeapon.tests.en }}</p>
            </div>
          </div>

          <div class="text-right text-xs text-muted-foreground">
            {{ t("weapons.source") }}: <a :href="selectedWeapon.source" target="_blank" rel="noopener noreferrer" class="text-orange-400 hover:text-orange-300">{{ selectedWeapon.source }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scenarios-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.scenarios-col {
  min-width: 0;
}

@media (min-width: 1024px) {
  .scenarios-layout {
    flex-direction: row;
  }

  .scenarios-col {
    flex: 1;
  }

  .scenarios-col-main {
    flex: 4;
  }
}
</style>
