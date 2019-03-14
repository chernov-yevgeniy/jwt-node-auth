<template>
  <d-container fluid class="h-100">
    <d-row class="h-100">
        <!-- Content -->
        <slot />
    </d-row>
  </d-container>
</template>

<script>

export default {
  name: 'login',
};
</script>

<style>
.auth-form .card-body {
    overflow: hidden;
    -webkit-box-shadow: inset 0 4px 0 0 #007bff;
    box-shadow: inset 0 4px 0 0 #007bff;
    border-radius: .625rem;
}
</style>
