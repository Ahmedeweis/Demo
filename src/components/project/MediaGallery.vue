<template>
    <section class="mb-[60px]" aria-labelledby="media-heading">
        <div class="site-container">
            <h2 id="media-heading" class="site-h3 text-[clamp(42px,5.8vmax,60px)]!">Media</h2>

            <div role="tablist" aria-label="Media type" class="mt-6 md:-mt-[55px] flex flex-wrap justify-start md:justify-end gap-2.5">
                <button v-for="tab in tabs" :id="`media-tab-${tab.id}`" :key="tab.id" type="button" role="tab"
                    :aria-selected="activeTab === tab.id" :aria-controls="`media-panel-${tab.id}`"
                    class="inline-flex items-center gap-2.5 rounded-[30px] border px-[30px] py-3 font-site-heading! capitalize! text-base! leading-6! font-bold text-site-ink transition-colors cursor-pointer"
                    :class="activeTab === tab.id ? 'border-site-primary bg-site-primary' : 'border-site-line hover:border-site-primary hover:bg-site-primary'"
                    @click="activeTab = tab.id">
                    <SiteIcon :name="tab.icon" class="text-2xl" />
                    {{ tab.label }}
                </button>
            </div>
        </div>

        <div class="mt-[50px] overflow-x-clip">
            <div class="site-container">
                <div id="media-panel-photos" v-show="activeTab === 'photos'" role="tabpanel" aria-labelledby="media-tab-photos">
                    <ImageCarousel :items="photos" label="Project photos" blur-inactive />
                </div>
                <div id="media-panel-plans" v-show="activeTab === 'plans'" role="tabpanel" aria-labelledby="media-tab-plans">
                    <ImageCarousel :items="plans" label="Floor plans" />
                </div>
                <div id="media-panel-video" v-show="activeTab === 'video'" role="tabpanel" aria-labelledby="media-tab-video">
                    <div class="relative aspect-video overflow-hidden rounded-[30px]">
                        <iframe v-if="isVideoPlaying" class="absolute inset-0 size-full"
                            :src="`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1`" title="Project video"
                            allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
                        <button v-else type="button" class="absolute inset-0 cursor-pointer" aria-label="Play project video" @click="isVideoPlaying = true">
                            <ImagePlaceholder label="Video cover" class="size-full" />
                            <span class="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-site-primary text-site-ink">
                                <SiteIcon name="video-play" class="text-3xl" />
                            </span>
                        </button>
                    </div>
                </div>
                <div id="media-panel-street" v-show="activeTab === 'street'" role="tabpanel" aria-labelledby="media-tab-street">
                    <iframe v-if="activeTab === 'street'" :src="project.streetViewUrl" title="Street view" class="h-[600px] w-full rounded-[30px] border-0"
                        allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import media1 from '../../assets/imgs/Media.png'
import media2 from '../../assets/imgs/Media2.png'
import media3 from '../../assets/imgs/Media3.png'
import media4 from '../../assets/imgs/Media4.png'
import ImageCarousel from './ImageCarousel.vue'
import ImagePlaceholder from './ImagePlaceholder.vue'
import SiteIcon from './SiteIcon.vue'
import { project } from '../../data/projectDetails'

const photos = [media1, media2, media3, media4].map((src, i) => ({ label: `Photo ${i + 1}`, src }))
const plans = Array.from({ length: 3 }, (_, i) => ({ label: `Floor plan ${i + 1}` }))

const tabs = [
    { id: 'photos', label: 'Photos', icon: 'gallery' },
    { id: 'plans', label: 'Plans', icon: 'expand-1' },
    { id: 'video', label: 'Video', icon: 'video-play' },
    { id: 'street', label: 'Street view', icon: 'picture-frame' },
]

const activeTab = ref('photos')
const isVideoPlaying = ref(false)
</script>
