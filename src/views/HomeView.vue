<template>
  <div class="relative min-h-screen overflow-x-clip bg-white font-site text-lg leading-[1.4444444444] text-site-text">
    <SiteHeader />

    <div class="relative flex min-h-[350px] flex-col justify-end bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      <div class="relative mb-10 px-[30px]">
        <nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-2.5 text-sm font-semibold leading-5 text-white/60">
          <a href="#" class="transition-colors hover:text-white">Home</a>
          <span class="size-0.5 rounded-full bg-white/60" aria-hidden="true"></span>
          <span aria-current="page">{{ project.title }}</span>
        </nav>
      </div>
      <div class="relative h-[50px] rounded-t-[50px] bg-white" aria-hidden="true"></div>
    </div>

    <div class="site-container pt-[52px]">
      <a href="#location" class="inline-flex items-center gap-2.5 text-sm font-semibold text-site-ink transition-colors hover:text-site-muted">
        <SiteIcon name="marker" class="text-xl text-site-primary-hover" />
        {{ project.location }}
      </a>
      <h1 class="site-h2 mt-5! mb-0!">{{ project.title }}</h1>

      <dl class="mt-10 mb-[50px] flex flex-wrap gap-x-[65px] gap-y-[30px] border-t border-site-line pt-10">
        <div v-for="item in project.overview" :key="item.key" class="flex items-center gap-[15px]">
          <span class="flex size-[62px] shrink-0 items-center justify-center rounded-full border border-site-line text-site-ink">
            <SiteIcon :name="item.icon" class="text-2xl" />
          </span>
          <div class="text-base font-semibold leading-[1.5]">
            <dt class="text-site-muted">{{ item.label }}</dt>
            <dd class="text-site-ink">{{ item.value }}</dd>
          </div>
        </div>
      </dl>

      <img :src="featuredImage" :alt="project.title" width="1290" height="600" class="h-auto w-full rounded-[30px]" />

      <section class="mt-[50px] grid lg:grid-cols-[2fr_1fr]">
        <div class="lg:pr-20">
          <h2 class="site-h3 mb-[25px]">Project description</h2>
          <div class="space-y-7">
            <p v-for="paragraph in project.description" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
        <div class="pt-10">
          <h3 class="site-h6 mb-3">Key Details</h3>
          <ul class="space-y-2.5 text-lg leading-[1.56]">
            <li v-for="detail in project.keyDetails" :key="detail.label" class="flex gap-[15px]">
              <span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-site-primary-hover" aria-hidden="true"></span>
              <span><b class="text-site-ink">{{ detail.label }}</b> {{ detail.value }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="mb-[60px]" aria-labelledby="features-heading">
        <h2 id="features-heading" class="site-h3 mt-[30px] mb-[30px] border-t border-site-line pt-[30px] min-[55rem]:mt-[60px] min-[55rem]:mb-[50px] min-[55rem]:pt-[50px]">
          Features &amp; amenities
        </h2>
        <ul class="grid grid-cols-1 gap-x-[30px] gap-y-[60px] border-b border-site-line pt-[50px] pb-20 sm:grid-cols-2 min-[55rem]:grid-cols-3 lg:grid-cols-4 lg:gap-y-[110px]">
          <li v-for="feature in project.features" :key="feature.key"
            class="group relative flex flex-col items-center rounded-[30px] bg-gradient-to-b from-site-soft to-site-soft/0 px-[30px] pb-[30px] text-center">
            <svg class="absolute left-1/2 top-0 h-[47px] w-auto -translate-x-1/2" width="320" height="104" viewBox="0 0 320 104" fill="none" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" fill="white"
                d="M0 0H320C290.545 0 267.772 24.6753 253.628 49.8666C235.516 82.1247 200.378 104 160 104C119.622 104 84.4835 82.1247 66.3718 49.8666C52.228 24.6753 29.4552 0 0 0Z" />
            </svg>
            <span class="relative -mt-[45px] mb-[27px] flex size-20 items-center justify-center rounded-full bg-site-primary text-site-ink transition-transform duration-[400ms] group-hover:scale-110">
              <SiteIcon :name="feature.icon" class="text-[40px]" />
            </span>
            <h3 class="site-h6 mb-2.5">{{ feature.label }}</h3>
            <p class="text-site-muted">{{ feature.text }}</p>
          </li>
        </ul>
      </section>
    </div>

    <MediaGallery />

    <div class="site-container">
      <section id="location" class="scroll-mt-8" aria-labelledby="location-heading">
        <h2 id="location-heading" class="site-h3 mb-10">Location</h2>
        <div class="mb-[60px] grid gap-[30px] border-b border-site-line pb-[60px] lg:grid-cols-2">
          <div class="rounded-[30px] border border-site-line px-6 pt-[60px] pb-[30px] xl:px-20">
            <h3 class="mb-5 text-xs font-semibold uppercase leading-[1.167] text-site-ink">address</h3>
            <div class="flex flex-wrap items-center justify-between gap-5 border-b border-site-line pb-[30px]">
              <p class="site-h5 max-w-[250px]">{{ project.address }}</p>
              <a href="#request-info" class="site-button site-button-icon">
                get direction
                <span class="flex size-[50px] items-center justify-center rounded-full bg-white">
                  <SiteIcon name="arrow-long-right" class="-rotate-45 text-[13px]" />
                </span>
              </a>
            </div>
            <h3 class="site-h6 mt-[30px] mb-[15px]">Key transport</h3>
            <ul class="grid grid-cols-2 gap-x-5 gap-y-[26px]">
              <li v-for="place in project.distances" :key="place.label" class="text-base font-semibold leading-[1.5] text-site-muted">
                {{ place.label }}
                <span class="block text-site-ink">{{ place.value }}</span>
              </li>
            </ul>
          </div>
          <iframe :src="project.mapUrl" title="Project location map" loading="lazy" class="h-[420px] w-full rounded-[30px] border-0 bg-site-line lg:h-[680px]"></iframe>
        </div>
      </section>
    </div>

    <InquiryForm />

    <div class="site-container pb-[100px]">
      <nav aria-label="Project navigation" class="mt-5 grid grid-cols-2 divide-x divide-site-line rounded-[30px] border border-site-line">
        <a href="#" :title="project.previousProject" class="flex h-[70px] items-center justify-center gap-2 text-center text-base font-semibold text-site-ink transition-colors hover:text-site-muted">
          <SiteIcon name="chevron-left" class="text-sm text-site-primary-hover" />
          previous project
        </a>
        <a href="#" :title="project.nextProject" class="flex h-[70px] items-center justify-center gap-2 text-center text-base font-semibold text-site-ink transition-colors hover:text-site-muted">
          next project
          <SiteIcon name="chevron-right" class="text-sm text-site-primary-hover" />
        </a>
      </nav>
    </div>

    <SiteFooter />
  </div>
</template>

<script setup>
import featuredImage from '../assets/imgs/Greenview Apartments.png'
import heroImage from '../assets/imgs/hero.png'
import InquiryForm from '../components/project/InquiryForm.vue'
import MediaGallery from '../components/project/MediaGallery.vue'
import SiteFooter from '../components/project/SiteFooter.vue'
import SiteHeader from '../components/project/SiteHeader.vue'
import SiteIcon from '../components/project/SiteIcon.vue'
import { project } from '../data/projectDetails'
</script>

<style scoped>
/* Custom scrollbar for categories if needed */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
