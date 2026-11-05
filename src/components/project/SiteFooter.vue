<template>
    <footer class="relative overflow-hidden bg-[#1d211c] bg-cover bg-no-repeat pb-[30px] font-site" :style="{ backgroundImage: `url(${footerImage})` }">
        <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div class="relative h-[50px] rounded-b-[80px] bg-white" aria-hidden="true"></div>

        <div class="relative site-container flex flex-col items-center text-center text-white">
            <h2 class="mt-20 mb-3 max-w-[526px] font-site-heading text-[42px] font-bold leading-[1.06] tracking-[-1px] md:text-[56px] xl:text-[70px] xl:tracking-[-2px]">
                Your dream home awaits
            </h2>
            <p class="mb-[30px] max-w-[526px] text-lg leading-7">
                Whether you’re exploring our homes or envisioning something custom, we’re here to bring your dream to life.
            </p>
            <a href="#request-info"
                class="relative z-10 mb-[calc(8px-min(11vw,250px))] flex size-40 items-center justify-center rounded-full border border-white/10 bg-black/[.02]! px-8 font-site-heading text-xl font-bold capitalize leading-6 text-white backdrop-blur-[60px] transition-colors hover:bg-site-primary! hover:text-site-ink">
                Get your free quote
            </a>
            <p class="-mb-[min(9vw,130px)] inline-block whitespace-nowrap bg-gradient-to-b from-white to-white/0 bg-clip-text font-site-heading text-[clamp(80px,20vw,380px)] font-bold leading-none text-transparent" aria-hidden="true">
                {{ brandName.toLowerCase() }}
            </p>
        </div>

        <div class="relative px-[30px]">
            <div class="rounded-[40px] bg-white px-[30px] pt-[60px] pb-10">
                <div class="mx-auto max-w-[1290px]">
                <div class="grid border-b border-site-line pb-[60px] gap-y-10 lg:grid-cols-3">
                    <div class="flex flex-col justify-between gap-[30px] pb-5 lg:pr-10">
                        <a href="#" class="block w-fit">
                            <img :src="logo" :alt="brandName" width="174" height="40" class="h-10 w-[174px]" />
                        </a>
                        <p class="text-lg leading-7 text-site-muted">We are creators of transformative spaces that inspire, innovate, and endure.</p>
                    </div>

                    <div class="flex justify-between gap-6 pb-5 lg:border-x lg:border-site-line lg:px-10">
                        <ul v-for="(links, index) in footerLinks" :key="index" class="space-y-5">
                            <li v-for="link in links" :key="link">
                                <a href="#" class="text-base font-semibold text-site-ink transition-colors hover:text-site-muted">{{ link }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="flex flex-col justify-between gap-[30px] pb-5 lg:pl-10">
                        <div class="flex flex-col gap-2">
                            <a :href="`tel:${phoneHref}`" class="text-[26px] font-semibold lowercase leading-[1.5] tracking-[-2px] text-site-ink xl:text-4xl">{{ phone }}</a>
                            <a href="mailto:info@example.com" class="text-[26px] font-semibold lowercase leading-[1.5] tracking-[-2px] text-site-ink xl:text-4xl">info@example.com</a>
                        </div>
                        <ul class="flex flex-wrap gap-x-3 text-sm font-semibold leading-5 text-site-muted">
                            <li v-for="social in socials" :key="social"><a href="#" class="transition-colors hover:text-site-ink">{{ social }}</a></li>
                        </ul>
                    </div>
                </div>

                <div class="mt-10 flex flex-wrap justify-between gap-4 text-base text-site-muted">
                    <p>© 2026 {{ brandName }}. All Rights Reserved.</p>
                    <p>Template Designed by <span class="font-semibold text-site-ink">Opal_WP</span></p>
                </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import footerImage from '../../assets/imgs/foote.png'
import logo from '../../assets/imgs/real logo.png'
import { brandName, footerLinks, phone, phoneHref, socials } from '../../data/projectDetails'
</script>
