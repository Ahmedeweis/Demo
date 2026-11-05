<template>
    <section id="request-info" class="site-container mb-[90px] flex flex-col items-center scroll-mt-8" aria-labelledby="inquiry-heading">
        <h2 id="inquiry-heading" class="site-h3 mb-[30px] w-full max-w-[465px] text-center">Request more information</h2>
        <form class="grid w-full max-w-[630px] gap-[30px] sm:grid-cols-2" @submit.prevent="submit">
            <input v-model="form.firstName" required type="text" autocomplete="given-name" maxlength="400"
                placeholder="First Name*" aria-label="First name" class="site-field" />
            <input v-model="form.lastName" required type="text" autocomplete="family-name" maxlength="400"
                placeholder="Last Name*" aria-label="Last name" class="site-field" />
            <input v-model="form.email" required type="email" autocomplete="email" maxlength="400"
                placeholder="Email*" aria-label="Email" class="site-field sm:col-span-2" />
            <textarea v-model="form.message" rows="6" maxlength="2000" placeholder="Message..." aria-label="Message"
                class="site-field sm:col-span-2"></textarea>
            <div class="text-center sm:col-span-2">
                <button type="submit" class="site-button site-button-icon">
                    submit
                    <span class="flex size-[50px] items-center justify-center rounded-full bg-white">
                        <ButtonArrow />
                    </span>
                </button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
import ButtonArrow from './ButtonArrow.vue'

const emptyForm = { firstName: '', lastName: '', email: '', message: '' }

const toast = useToast()
const form = reactive({ ...emptyForm })

// Demo only: there is no backend, so the message is not sent anywhere.
const submit = () => {
    toast.info('Demo form: this message was not sent.')
    Object.assign(form, emptyForm)
}
</script>
