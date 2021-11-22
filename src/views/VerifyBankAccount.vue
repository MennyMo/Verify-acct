<template>
  <div>
    <OnLoginNavBar />
    <VerifyBankAccountMain />
  </div>
</template>

<script>
import OnLoginNavBar from "@/components/OnLoginNavBar.vue";
import VerifyBankAccountMain from "@/components/VerifyBankAccountMain.vue";
export default {
  name: "VerifyBankAccount",
  components: {
    OnLoginNavBar,
    VerifyBankAccountMain,
  },
};
</script>

<style></style>
