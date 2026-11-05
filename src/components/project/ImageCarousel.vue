<template>
    <div class="mx-auto w-full max-w-[850px]" role="group" aria-roledescription="carousel" :aria-label="label" tabindex="0"
        @keydown.left.prevent="goTo(activeIndex - 1)" @keydown.right.prevent="goTo(activeIndex + 1)"
        @pointerdown="dragStartX = $event.clientX" @pointerup="endDrag">
        <div class="flex gap-[30px] transition-transform duration-500 touch-pan-y select-none"
            :style="{ transform: `translateX(calc(${-activeIndex} * (100% + 30px)))` }">
            <button v-for="(item, index) in slides" :key="item.label" type="button"
                class="w-full shrink-0 cursor-pointer transition-opacity duration-500"
                :class="index !== activeIndex && blurInactive ? 'opacity-20' : 'opacity-100'"
                :aria-label="`Show ${item.label}`" :aria-current="index === activeIndex" @click="selectSlide(index)">
                <img v-if="item.src" :src="item.src" alt="" width="850" height="620" draggable="false" class="h-auto w-full rounded-[30px]" />
                <ImagePlaceholder v-else :label="item.label" class="aspect-[850/620] rounded-[30px]" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ImagePlaceholder from './ImagePlaceholder.vue'

const props = defineProps({
    items: { type: Array, required: true },
    label: { type: String, required: true },
    blurInactive: { type: Boolean, default: false },
})

const SWIPE_THRESHOLD = 50

// The last slide sits first so a neighbour shows on both sides of the opening slide
const slides = [...props.items.slice(-1), ...props.items.slice(0, -1)]
const activeIndex = ref(1)
const dragStartX = ref(0)
let didSwipe = false

const goTo = (index) => {
    activeIndex.value = Math.min(Math.max(index, 0), slides.length - 1)
}

const endDrag = (event) => {
    const distance = event.clientX - dragStartX.value
    didSwipe = Math.abs(distance) >= SWIPE_THRESHOLD
    if (didSwipe) {
        goTo(activeIndex.value + (distance < 0 ? 1 : -1))
    }
}

// A mouse swipe ends with a click on the slide it started on, which must not undo the swipe
const selectSlide = (index) => {
    if (!didSwipe) {
        goTo(index)
    }
    didSwipe = false
}
</script>
