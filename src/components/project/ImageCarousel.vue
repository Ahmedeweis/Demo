<template>
    <div class="mx-auto w-full max-w-[850px]" role="group" aria-roledescription="carousel" :aria-label="label" tabindex="0"
        @keydown.left.prevent="moveTo(position - 1)" @keydown.right.prevent="moveTo(position + 1)"
        @pointerdown="dragStartX = $event.clientX" @pointerup="endDrag">
        <div ref="track" class="flex gap-[30px] touch-pan-y select-none"
            :class="isJumping ? 'transition-none' : 'transition-transform duration-500'"
            :style="{ transform: `translateX(calc(${-position} * (100% + 30px)))` }"
            @transitionend.self="wrapPosition">
            <button v-for="(item, index) in slides" :key="index" type="button" :tabindex="index === position ? 0 : -1"
                class="w-full shrink-0 cursor-pointer"
                :class="[isJumping ? 'transition-none' : 'transition-opacity duration-500', index !== position && blurInactive ? 'opacity-20' : 'opacity-100']"
                :aria-label="`Show ${item.label}`" :aria-current="index === position" @click="selectSlide(index)">
                <img v-if="item.src" :src="item.src" alt="" width="850" height="620" draggable="false" class="h-auto w-full rounded-[30px]" />
                <ImagePlaceholder v-else :label="item.label" class="aspect-[850/620] rounded-[30px]" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { nextTick, ref, useTemplateRef } from 'vue'
import ImagePlaceholder from './ImagePlaceholder.vue'

const props = defineProps({
    items: { type: Array, required: true },
    label: { type: String, required: true },
    blurInactive: { type: Boolean, default: false },
})

const SWIPE_THRESHOLD = 50

// Three copies of the slides: the view stays in the middle copy and jumps back to it
// after each move, so there is always a slide on both sides.
const count = props.items.length
const slides = [...props.items, ...props.items, ...props.items]

const track = useTemplateRef('track')
const position = ref(count)
const isJumping = ref(false)
const dragStartX = ref(0)
let didSwipe = false

const moveTo = (index) => {
    position.value = Math.min(Math.max(index, 0), slides.length - 1)
}

const wrapPosition = async () => {
    if (position.value >= count && position.value < count * 2) return
    isJumping.value = true
    position.value = count + (position.value % count)
    await nextTick()
    track.value.getBoundingClientRect() // Apply the jump before transitions come back
    isJumping.value = false
}

const endDrag = (event) => {
    const distance = event.clientX - dragStartX.value
    didSwipe = Math.abs(distance) >= SWIPE_THRESHOLD
    if (didSwipe) {
        moveTo(position.value + (distance < 0 ? 1 : -1))
    }
}

// A mouse swipe ends with a click on the slide it started on, which must not undo the swipe
const selectSlide = (index) => {
    if (!didSwipe) {
        moveTo(index)
    }
    didSwipe = false
}
</script>
