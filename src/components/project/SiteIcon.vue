<template>
    <i class="site-icon" aria-hidden="true">{{ glyphs[name] }}</i>
</template>

<script setup>
defineProps({
    name: { type: String, required: true },
})

// Code points in spaciaz-icon-1.2.3.woff2, keyed by the theme's own icon names
const glyphs = {
    'arrow-long-right': '\ue002',
    'bars': '\ue041',
    'buliding-2': '\ue006',
    'calendar-2': '\ue007',
    'chevron-left': '\ue00c',
    'chevron-right': '\ue00d',
    'dollar-circle': '\ue011',
    'expand-1': '\ue013',
    'firefighting': '\ue017',
    'format-square': '\ue018',
    'gallery': '\ue019',
    'guard': '\ue01a',
    'layer-2': '\ue01b',
    'maintenance': '\ue01e',
    'marker': '\ue020',
    'picture-frame': '\ue024',
    'security': '\ue02c',
    'swimming-pool': '\ue032',
    'system': '\ue033',
    'times': '\ue07b',
    'tree': '\ue035',
    'video-play': '\ue038',
    'weight': '\ue03a',
}
</script>
