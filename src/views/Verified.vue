<template>
  <div>
    <LandingPageNavBar />
    <VerifiedMain />
  </div>
</template>

<script>
import LandingPageNavBar from "@/components/LandingPageNavBar.vue";
import VerifiedMain from "@/components/VerifiedMain.vue";
export default {
  name: "Login",
  components: {
    LandingPageNavBar,
    VerifiedMain,
  },
};
</script>

<style></style>
