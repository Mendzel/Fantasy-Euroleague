<template>
  <div class="faq">
    <h1 class="faq-title">FAQ</h1>
    <Accordion class="faq-list">
            <AccordionTab v-for="question in constantsData.FAQquestions" :key="title" :header="question.title">
                <p>{{question.text}}</p>
            </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup>
import { constantsStore } from '../../stores/constants';
const constantsData = constantsStore();
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.faq {
    background-color: white;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
        color: $primary;
    }

    &-list {
        padding: 20px !important;
        width: 70% !important;
    }
}
</style>