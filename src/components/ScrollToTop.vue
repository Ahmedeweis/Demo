<template>
    <button :class="isVisible ? 'scale-100' : 'scale-0 pointer-events-none'" @click="scrollToTop"
        class="fixed bottom-[30px] right-[30px] z-50 flex size-[70px] items-center justify-center rounded-full border border-site-primary bg-site-primary text-site-ink shadow-[0_0_30px_rgba(0,0,0,0.05)] transition-all duration-[350ms] hover:text-white cursor-pointer"
        aria-label="Scroll to top">
        <SiteIcon name="arrow-up" class="text-sm" />
    </button>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SiteIcon from './project/SiteIcon.vue';

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
