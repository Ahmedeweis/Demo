<template>
    <header class="absolute inset-x-0 top-0 z-40 p-[15px] font-site md:p-[30px]">
        <div class="relative flex items-center justify-between rounded-[20px] bg-white p-[15px] md:rounded-[80px] md:pl-[30px] min-[64.0625rem]:py-0 min-[64.0625rem]:pl-[15px] min-[75.0625rem]:pl-[30px]">
            <button ref="menuButton" type="button" class="order-last flex rounded-[10px] bg-site-primary px-[15px] py-[13px] text-site-ink cursor-pointer md:order-first min-[64.0625rem]:hidden"
                :aria-expanded="isMenuOpen" aria-controls="mobile-menu" aria-label="Open menu" @click="openMenu">
                <SiteIcon name="bars" class="text-[15px]" />
            </button>

            <div class="flex items-center">
                <a href="#" class="block shrink-0 md:ml-[100px] min-[64.0625rem]:ml-0 min-[64.0625rem]:border-r min-[64.0625rem]:border-site-line min-[64.0625rem]:pr-2.5 min-[75.0625rem]:pr-5 min-[85.4375rem]:pr-[30px]">
                    <img :src="logo" :alt="brandName" width="174" height="40" class="h-10 w-[174px]" />
                </a>

                <nav class="hidden pl-2.5 min-[64.0625rem]:flex min-[75.0625rem]:pl-[30px]" aria-label="Main">
                    <div v-for="item in navItems" :key="item.label" class="group" :class="item.mega ? '' : 'relative'">
                        <a href="#" class="group/link flex items-center px-2.5 py-[30px] text-base font-semibold capitalize text-site-ink min-[85.4375rem]:px-5" :aria-current="item.active ? 'true' : undefined">
                            <span class="relative before:absolute before:bottom-0 before:left-0 before:h-px before:bg-site-primary before:transition-all before:duration-[400ms] group-hover/link:before:w-full"
                                :class="item.active ? 'before:w-full' : 'before:w-0'">{{ item.label }}</span>
                        </a>

                        <div v-if="item.mega"
                            class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute inset-x-0 top-full grid grid-cols-5 gap-[30px] rounded-[20px] bg-[#1B1F12] p-[50px] shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                            <a v-for="(child, index) in item.children" :key="child" href="#" class="mb-2.5 text-center text-base font-semibold text-white transition-colors duration-[400ms] hover:text-site-primary">
                                <img :src="menuImages[`../../assets/imgs/nav_icon/${index + 1}.png`]" alt="" width="384" height="290" class="mb-[18px] aspect-[384/290] w-full rounded-[20px] object-cover" />
                                {{ child.split(' ')[0] }} <b class="text-site-primary">{{ child.split(' ')[1] }}</b>
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

            <div class="hidden items-center md:flex">
                <span class="mr-2.5 hidden text-base font-semibold capitalize leading-6 text-site-ink min-[75.0625rem]:inline">Call us:</span>
                <a :href="`tel:${phoneHref}`" class="whitespace-nowrap border-b border-site-primary text-base font-semibold leading-6 text-site-muted">{{ phone }}</a>
                <a href="#request-info" class="site-button ml-2.5 whitespace-nowrap min-[75.0625rem]:ml-5">get in touch</a>
            </div>
        </div>

        <div class="fixed inset-0 z-[997] bg-black/70 transition-opacity duration-[250ms] min-[64.0625rem]:hidden"
            :class="isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'" aria-hidden="true" @click="closeMenu"></div>

        <nav id="mobile-menu" :inert="!isMenuOpen" aria-label="Mobile"
            class="fixed inset-y-0 left-0 z-[9999] w-[330px] overflow-y-auto bg-white pt-[22px] transition-transform duration-[250ms] min-[25.625rem]:w-[410px] min-[64.0625rem]:hidden"
            :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'">
            <a href="#" class="mx-auto mb-[15px] block w-fit">
                <img :src="logo" :alt="brandName" width="174" height="40" class="h-10 w-[174px]" />
            </a>
            <button ref="closeButton" type="button" class="absolute right-5 top-[18px] flex text-site-ink cursor-pointer" aria-label="Close menu" @click="closeMenu">
                <SiteIcon name="times" class="text-2xl" />
            </button>

            <ul class="px-[30px] py-[15px]">
                <li v-for="item in navItems" :key="item.label" class="relative">
                    <a :href="item.children.length ? '#' : '#request-info'" class="block py-3 text-base font-semibold leading-[1.4444] text-site-ink" @click="closeMenu">{{ item.label }}</a>
                    <template v-if="item.children.length">
                        <button type="button" class="absolute right-0 top-0 w-[30px] py-3 text-right text-site-ink cursor-pointer"
                            :aria-expanded="!!openItems[item.label]" :aria-label="`Toggle ${item.label} menu`" @click="openItems[item.label] = !openItems[item.label]">
                            <SiteIcon name="chevron-down" class="text-xs transition-transform" :class="openItems[item.label] ? 'rotate-180' : ''" />
                        </button>
                        <ul v-show="openItems[item.label]" class="mb-[15px]">
                            <li v-for="(child, index) in item.children" :key="child">
                                <a href="#" class="block border-b border-site-line py-2 text-sm leading-[1.8571428571] text-site-ink transition-colors hover:text-site-primary" @click="closeMenu">
                                    {{ item.mega ? `Home ${index + 1}` : child }}
                                </a>
                            </li>
                        </ul>
                    </template>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, reactive, ref, useTemplateRef } from 'vue'
import logo from '../../assets/imgs/real logo.png'
import SiteIcon from './SiteIcon.vue'
import { brandName, navItems, phone, phoneHref } from '../../data/projectDetails'

const menuImages = import.meta.glob('../../assets/imgs/nav_icon/*.png', { eager: true, import: 'default' })

const menuButton = useTemplateRef('menuButton')
const closeButton = useTemplateRef('closeButton')
const isMenuOpen = ref(false)
const openItems = reactive({})

const openMenu = async () => {
    isMenuOpen.value = true
    await nextTick()
    closeButton.value.focus()
}

const closeMenu = () => {
    if (!isMenuOpen.value) return
    isMenuOpen.value = false
    menuButton.value.focus()
}

const closeOnEscape = (event) => {
    if (event.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', closeOnEscape))
onUnmounted(() => window.removeEventListener('keydown', closeOnEscape))
</script>
