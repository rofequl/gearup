<script setup>
import KTAside from "@/layouts/default-layout/components/aside/Aside.vue";
import {asideEnabled, themeDarkLogo, themeLightLogo} from "@/layouts/default-layout/config/helper";
import LayoutService from "@/core/services/LayoutService";
import {nextTick, onBeforeMount, onMounted, watch} from "vue";
import {reinitializeComponents} from "@/core/plugins/keenthemes.js";
import {useRoute} from "vue-router";

const route = useRoute()

onBeforeMount(() => {
  LayoutService.init()
})

onMounted(() => {
  nextTick(() => {
    reinitializeComponents()
  })
})

watch(() => route.path, () => {
  nextTick(() => {
    reinitializeComponents()
  })
})
</script>
<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <KTAside v-if="asideEnabled" :darkLogo="themeDarkLogo" :lightLogo="themeLightLogo"/>
    <!-- end:: Aside Left -->

  </div>
  <!-- end:: Body -->
</template>