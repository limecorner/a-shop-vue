<template>
  <div class="container py-5">
    <h4 class="mb-4">結帳</h4>
    <main class="row">
      <!-- check-left-section -->
      <section class="col-6">
        <ProductCheckLeftSectionTop :step="step" />
        <ProductCheckLeftSectionMiddle :step="step" />
        <hr />

        <!-- form control -->
        <div
          id="btn-control"
          class="control-panel d-flex justify-content-between"
        >
          <button @click="onPrevStep" class="btn btn-prev">上一步</button>
          <button @click="onNextStep" class="btn btn-next text-center">
            <span>下一步</span>
          </button>
        </div>
      </section>

      <!-- check-right-section -->
      <section class="col-5">
        <ProductCheckRigthSection />
        <hr />
      </section>
    </main>
  </div>
</template>

<style scoped>
.btn-prev::before {
  content: "\27F5";
}

.btn-next {
  width: 125px;
  background-color: #f67599;
  color: #fff;
}

.btn-next::after {
  content: "\2192";
  padding-left: 16px;
}
</style>

<script>
import ProductCheckLeftSectionTop from "./../components/ProductCheckLeftSectionTop.vue";
import ProductCheckLeftSectionMiddle from "./../components/ProductCheckLeftSectionMiddle.vue";
import ProductCheckRigthSection from "./../components/ProductCheckRigthSection.vue";

export default {
  components: {
    ProductCheckLeftSectionTop,
    ProductCheckLeftSectionMiddle,
    ProductCheckRigthSection,
  },
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    onPrevStep() {
      if (this.step <= 0) return;
      this.step--;
    },
    onNextStep() {
      if (this.step >= 2) return;
      this.step++;
    },
  },
};
</script>