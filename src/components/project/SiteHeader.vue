<template>
    <header class="absolute inset-x-0 top-0 z-40 p-[30px] font-site">
        <div class="relative flex items-center justify-between rounded-[80px] bg-white pl-[30px] pr-[15px] py-[15px] xl:py-0">
            <div class="flex items-center">
                <a href="#" class="block xl:border-r xl:border-site-line xl:pr-[30px]">
                    <img :src="logo" :alt="brandName" width="174" height="40" class="h-10 w-[174px]" />
                </a>

                <nav class="hidden xl:flex pl-[30px]" aria-label="Main">
                    <div v-for="item in navItems" :key="item.label" class="group" :class="item.mega ? '' : 'relative'">
                        <a href="#" class="flex items-center gap-1 px-5 py-[30px] text-base font-semibold capitalize text-site-ink transition-colors hover:text-site-muted">
                            {{ item.label }}
                        </a>

                        <div v-if="item.mega"
                            class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute inset-x-0 top-full grid grid-cols-5 gap-5 rounded-[20px] bg-white p-[30px] shadow-lg">
                            <a v-for="child in item.children" :key="child" href="#" class="text-center text-base font-semibold text-site-ink">
                                <ImagePlaceholder :label="child" class="aspect-[4/5] rounded-[20px] mb-2.5" />
                                {{ child }}
                            </a>
                        </div>

                        <ul v-else-if="item.children.length"
                            class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute left-0 top-full min-w-56 rounded-[20px] bg-white py-4 shadow-lg">
                            <li v-for="child in item.children" :key="child">
                                <a href="#" class="block px-[30px] py-1.5 text-base font-semibold text-site-text transition-colors hover:text-site-ink">{{ child }}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div class="hidden xl:flex items-center">
                <span class="mr-2.5 text-base font-semibold leading-6 text-site-ink">Call us:</span>
                <a :href="`tel:${phoneHref}`" class="text-base font-semibold leading-6 text-site-muted">{{ phone }}</a>
                <a href="#request-info" class="site-button ml-5">get in touch</a>
            </div>

            <button type="button" class="xl:hidden rounded-[10px] bg-site-primary px-[15px] py-[13px] text-site-ink cursor-pointer"
                :aria-expanded="isMenuOpen" aria-controls="mobile-menu" :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
                @click="isMenuOpen = !isMenuOpen">
                <SiteIcon v-if="isMenuOpen" name="times" class="block text-xl" />
                <SiteIcon v-else name="bars" class="block text-xl" />
            </button>
        </div>

        <nav v-if="isMenuOpen" id="mobile-menu" class="xl:hidden mt-3 max-h-[calc(100vh-9rem)] overflow-y-auto rounded-[20px] bg-white p-6 shadow-lg" aria-label="Mobile">
            <template v-for="item in navItems" :key="item.label">
                <details v-if="item.children.length" class="border-b border-site-line">
                    <summary class="py-3 font-semibold text-site-ink cursor-pointer">{{ item.label }}</summary>
                    <a v-for="child in item.children" :key="child" href="#" class="block pl-4 py-2 text-base text-site-text">{{ child }}</a>
                </details>
                <a v-else href="#request-info" class="block py-3 font-semibold text-site-ink" @click="isMenuOpen = false">{{ item.label }}</a>
            </template>
            <a :href="`tel:${phoneHref}`" class="mt-3 block text-base font-semibold text-site-muted">Call us: {{ phone }}</a>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../../assets/imgs/real logo.png'
import ImagePlaceholder from './ImagePlaceholder.vue'
import SiteIcon from './SiteIcon.vue'
import { brandName, navItems, phone, phoneHref } from '../../data/projectDetails'

const isMenuOpen = ref(false)
</script>
