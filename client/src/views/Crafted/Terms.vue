<script setup>
import {getAssetPath} from "@/core/helpers/assets";
</script>
<template>
  <!--begin::Terms and Conditions card-->
  <div class="card">
    <!--begin::Body-->
    <div class="card-body p-lg-17">
      <!--begin::About-->
      <div class="mb-18">
        <!--begin::Wrapper-->
        <div class="mb-10">
          <!--begin::Top-->
          <div class="text-center mb-0">
            <!--begin::Title-->
            <h3 class="fs-2hx text-gray-900 mb-5">GEARUP Terms and Conditions</h3>
            <!--end::Title-->
            <!--begin::Text-->
            <div class="fs-5 text-muted fw-semibold">This document outlines the terms and conditions for the use of GEARUP, a task management software.</div>
            <!--end::Text-->
          </div>
          <!--end::Top-->
          <!--begin::Overlay-->
          <div class="overlay">
            <!--begin::Image-->
            <img class="w-100 card-rounded" :src="getAssetPath('media/stock/img-1.svg')" alt="" />
            <!--end::Image-->
          </div>
          <!--end::Overlay-->
        </div>
        <!--end::Wrapper-->
        <!--begin::Description-->
        <div class="fs-5 fw-semibold text-gray-600">
          <div class="section-title">1. Acceptance of Terms</div>
          <div class="section-content">
            By accessing or using <span class="text-primary-200">GEARUP</span>, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, you may
            not access or use <span class="text-primary-200">GEARUP</span>.
          </div>

          <div class="section-title">2. Account Registration</div>
          <div class="section-content">
            You may be required to create an account to use certain features of <span class="text-primary-200">GEARUP</span>. You are responsible for maintaining the confidentiality of your
            account information and for any activity that occurs under your account.
          </div>

          <div class="section-title">3. Use of GEARUP</div>
          <div class="section-content">
            You agree to use <span class="text-primary-200">GEARUP</span> only for lawful purposes and in accordance with these Terms and Conditions. You may not use <span class="text-primary-200">GEARUP</span> in any manner that
            could damage, disable, overburden, or impair <span class="text-primary-200">GEARUP</span> or interfere with any other party's use and enjoyment of <span class="text-primary-200">GEARUP</span>.
          </div>

          <div class="section-title">4. Intellectual Property</div>
          <div class="section-content">
            <span class="text-primary-200">GEARUP</span> and its content, including but not limited to text, software, images, and logos, are protected by copyright, trademark, and other
            intellectual property laws. You may not use <span class="text-primary-200">GEARUP</span> or its content for any commercial purpose without our prior written consent.
          </div>

          <div class="section-title">5. Disclaimer of Warranties</div>
          <div class="section-content">
            <span class="text-primary-200">GEARUP</span> is provided "as is" and "as available" without warranty of any kind, express or implied, including but not limited to the implied
            warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </div>

          <div class="section-title">6. Limitation of Liability</div>
          <div class="section-content">
            In no event shall we be liable for any damages whatsoever, including but not limited to direct, indirect, incidental, consequential, special,
            exemplary, or punitive damages, arising out of or in any way connected with the use of <span class="text-primary-200">GEARUP</span>.
          </div>

          <div class="section-title">7. Indemnification</div>
          <div class="section-content">
            You agree to indemnify and hold us harmless from any claims, liabilities, damages, losses, and expenses arising out of or in any way connected
            with your use of <span class="text-primary-200">GEARUP</span>.
          </div>

          <div class="section-title">8. Changes to Terms and Conditions</div>
          <div class="section-content">
            We may revise these Terms and Conditions from time to time. We will notify you of any material changes by posting the revised Terms and
            Conditions on <span class="text-primary-200">GEARUP</span>.
          </div>

          <div class="section-title">9. Governing Law</div>
          <div class="section-content">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
          </div>

          <div class="section-title">10. Contact Us</div>
          <div class="section-content">
            If you have any questions about these Terms andConditions, please contact us at [Your Email Address].
          </div>
        </div>
        <!--end::Description-->
      </div>
      <!--end::About-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Terms and Conditions card-->
</template>
<style scoped>
.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

.section-content {
  margin-top: 10px;
}
</style>