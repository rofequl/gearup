<script setup>
import KTAsidePrimary from "@/layouts/default-layout/components/aside/AsidePrimary.vue";
</script>
<template>
  <div id="kt_aside" class="aside aside-extended" data-kt-drawer="true" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-direction="start"
       data-kt-drawer-name="aside" data-kt-drawer-overlay="true" data-kt-drawer-toggle="#kt_aside_toggle" data-kt-drawer-width="auto">
    <KTAsidePrimary></KTAsidePrimary>
  </div>
</template>