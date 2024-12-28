<script setup>
import {getAssetPath} from "@/core/helpers/assets";
import KTUserMenu from "@/layouts/default-layout/components/menus/UserAccountMenu.vue";
</script>
<template>
  <!-- begin:: Primary Aside -->
  <div class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
    <!-- begin:: Primary Aside Logo-->
    <div id="kt_aside_logo" class="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10">
      <a href="#">
        <img :src="getAssetPath('media/logos/demo7.svg')" alt="Logo" class="h-30px"/>
      </a>
    </div>
    <!-- end:: Primary Aside Logo-->
    <!-- begin:: Primary Aside Top Menu-->
    <div id="kt_aside_nav" class="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0">
      <div class="hover-scroll-y mb-10" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
           data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
           data-kt-scroll-height="auto" data-kt-scroll-offset="0px" data-kt-scroll-wrappers="#kt_aside_nav">
        <ul class="nav flex-column">
          <li class="nav-item mb-2" data-bs-dismiss="click" data-bs-original-title="Projects" data-bs-placement="right" data-bs-toggle="tooltip"
              data-bs-trigger="hover" @click="enableSecondarySidebar">
            <a class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light active" data-bs-toggle="tab"
               href="#kt_aside_nav_tab_projects">
              <KTIcon icon-class="fs-2x" icon-name="element-11"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- end:: Primary Aside Top Menu-->
    <!-- begin:: Primary Aside Profile Section-->
    <div id="kt_aside_footer" class="aside-footer d-flex flex-column align-items-center flex-column-auto">
      <div id="kt_header_user_menu_toggle" class="d-flex align-items-center mb-10">
        <div class="cursor-pointer symbol symbol-40px" data-bs-dismiss="click" data-bs-placement="right" data-bs-toggle="tooltip"
             data-kt-menu-flip="top-end" data-kt-menu-overflow="true" data-kt-menu-placement="top-start" data-kt-menu-trigger="click" title="User profile">
          <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="metronic"/>
        </div>
        <KTUserMenu></KTUserMenu>
      </div>
    </div>
    <!-- end:: Primary Aside Profile Section-->
  </div>
  <!-- end:: Primary Aside -->
</template>