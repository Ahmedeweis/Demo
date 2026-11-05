<template>
    <div class="flex items-center justify-center bg-gradient-to-br from-site-soft to-site-line text-site-muted text-base font-semibold"
        role="img" :aria-label="label">
        {{ label }}
    </div>
</template>

<script setup>
defineProps({
    label: { type: String, required: true },
})
</script>
