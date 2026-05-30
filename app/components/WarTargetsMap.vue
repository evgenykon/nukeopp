<script setup lang="ts">
import "maplibre-gl/dist/maplibre-gl.css"
import maplibregl from "maplibre-gl"
import type { MilitaryTarget } from "~/utils/targets"

const props = defineProps<{
  targets: MilitaryTarget[]
}>()

const emit = defineEmits<{
  select: [target: MilitaryTarget]
}>()

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<maplibregl.Map | null>(null)
const markers = ref<maplibregl.Marker[]>([])
const selectedId = ref<string | null>(null)

function flyTo(target: MilitaryTarget) {
  map.value?.flyTo({ center: [target.lng, target.lat], zoom: 10, duration: 1000 })
}

function addMarkers() {
  clearMarkers()

  markers.value = props.targets.map((target) => {
    const el = document.createElement("div")
    el.className = "marker-dot"
    el.title = target.name.en

    const tooltip = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 12,
    }).setHTML(`<span class="text-xs font-medium">${target.name.en}</span>`)

    el.addEventListener("mouseenter", () => {
      tooltip.setLngLat([target.lng, target.lat]).addTo(map.value!)
    })

    el.addEventListener("mouseleave", () => {
      tooltip.remove()
    })

    el.addEventListener("click", () => {
      selectedId.value = target.id
      tooltip.remove()
      emit("select", target)
      flyTo(target)
    })

    const marker = new maplibregl.Marker({ element: el })
      .setLngLat([target.lng, target.lat])
      .addTo(map.value!)

    return marker
  })
}

function clearMarkers() {
  markers.value.forEach((m) => m.remove())
  markers.value = []
}

function fitBounds() {
  if (props.targets.length === 0) return
  const bounds = new maplibregl.LngLatBounds()
  props.targets.forEach((t) => bounds.extend([t.lng, t.lat]))
  map.value?.fitBounds(bounds, { padding: 60, maxZoom: 6, duration: 1000 })
}

onMounted(() => {
  if (!mapContainer.value) return

  map.value = new maplibregl.Map({
    container: mapContainer.value,
    style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    center: [30, 45],
    zoom: 2,
  })

  map.value.addControl(new maplibregl.NavigationControl(), "top-right")

  map.value.on("load", () => {
    addMarkers()
    fitBounds()
  })
})

onUnmounted(() => {
  clearMarkers()
  map.value?.remove()
})

watch(
  () => props.targets,
  () => {
    if (map.value?.loaded()) {
      addMarkers()
      fitBounds()
    }
  },
  { deep: true },
)

defineExpose({ flyTo })
</script>

<template>
  <div ref="mapContainer" class="h-full w-full rounded-lg" />
</template>

<style>
.marker-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f97316;
  border: 2px solid #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.marker-dot:hover {
  background: #fb923c;
  box-shadow:
    0 0 0 4px rgba(249, 115, 22, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.5);
}

.maplibregl-popup {
  background: transparent;
  box-shadow: none;
}
.maplibregl-popup-content {
  background: #1c1917;
  color: #f5f5f4;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #292524;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  font-size: 12px;
  white-space: nowrap;
}
.maplibregl-popup-tip {
  border-top-color: #1c1917 !important;
}
</style>
