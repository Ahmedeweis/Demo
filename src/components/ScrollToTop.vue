<template>
    <div class="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4">

        <!-- Scroll Button -->
        <button :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'"
            @click="scrollToTop"
            class="p-3 rounded-full bg-white shadow-lg border border-gray-100 text-brand-primary hover:text-brand-dark hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none cursor-pointer"
            aria-label="Scroll to top">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
    isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
/* Switched to Tailwind utility classes, no custom CSS required for transition */
</style>
