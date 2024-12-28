<script setup>
import {getAssetPath} from "@/core/helpers/assets";
import {ErrorMessage, Field, Form as VForm} from "vee-validate";
</script>
<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10 bg-white border shadow-sm rounded-4">
    <!--begin::Form-->
    <VForm id="kt_login_signup_form" :validation-schema="registration" class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" novalidate
           @submit="onSubmitRegister">
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="text-gray-900 mb-3">Create an Account</h1>
        <!--end::Title-->
        <!--begin::Link-->
        <div class="text-gray-500 fw-semibold fs-4">
          Already have an account?
          <router-link class="link-primary fw-bold" to="/sign-in">
            Sign in here
          </router-link>
        </div>
        <!--end::Link-->
      </div>
      <!--end::Heading-->

      <!--begin::Action-->
      <button class="btn btn-light-primary fw-bold w-100 mb-10" type="button">
        <img :src="getAssetPath('media/svg/brand-logos/google-icon.svg')" alt="Logo" class="h-20px me-3"/>
        Sign in with Google
      </button>
      <!--end::Action-->

      <!--begin::Separator-->
      <div class="d-flex align-items-center mb-10">
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
        <span class="fw-semibold text-gray-400 fs-7 mx-2">OR</span>
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
      </div>
      <!--end::Separator-->

      <!--begin::Input group-->
      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bold text-gray-900 fs-6">First Name</label>
          <Field autocomplete="off" class="form-control form-control-lg form-control-solid" name="first_name" placeholder="" type="text"/>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="first_name"/>
            </div>
          </div>
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bold text-gray-900 fs-6">Last Name</label>
          <Field autocomplete="off" class="form-control form-control-lg form-control-solid" name="last_name" placeholder="" type="text"/>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="last_name"/>
            </div>
          </div>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="fv-row mb-7">
        <label class="form-label fw-bold text-gray-900 fs-6">Email</label>
        <Field autocomplete="off" class="form-control form-control-lg form-control-solid" name="email" placeholder="" type="email"/>
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email"/>
          </div>
        </div>
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="mb-10 fv-row" data-kt-password-meter="true">
        <!--begin::Wrapper-->
        <div class="mb-1">
          <!--begin::Label-->
          <label class="form-label fw-bold text-gray-900 fs-6"> Password </label>
          <!--end::Label-->
          <!--begin::Input wrapper-->
          <div class="position-relative mb-3">
            <Field autocomplete="off" class="form-control form-control-lg form-control-solid" name="password" placeholder="" type="password"/>
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password"/>
              </div>
            </div>
          </div>
          <!--end::Input wrapper-->
          <!--begin::Meter-->
          <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
          </div>
          <!--end::Meter-->
        </div>
        <!--end::Wrapper-->
        <!--begin::Hint-->
        <div class="text-muted">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
        <!--end::Hint-->
      </div>
      <!--end::Input group--->
      <!--begin::Input group-->
      <div class="fv-row mb-5">
        <label class="form-label fw-bold text-gray-900 fs-6">Confirm Password</label>
        <Field autocomplete="off" class="form-control form-control-lg form-control-solid" name="password_confirmation" placeholder="" type="password"/>
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password_confirmation"/>
          </div>
        </div>
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <label class="form-check form-check-custom form-check-solid">
          <Field class="form-check-input" name="toc" type="checkbox" value="1"/>
          <span class="form-check-label fw-semibold text-gray-700 fs-6">
            I Agree &
            <a class="ms-1 link-primary" href="#">Terms and conditions</a>.
          </span>
        </label>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="text-center">
        <button id="kt_sign_up_submit" ref="submitButton" class="btn btn-lg btn-primary" type="submit">
          <span class="indicator-label"> Submit </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>