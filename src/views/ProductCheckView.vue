<template>
  <div class="container py-5">
    <h4 class="mb-4">結帳</h4>
    <main class="row">
      <!-- check-left-section -->
      <section class="col-6">
        <ProductCheckLeftSectionTop />
        <ProductCheckLeftSectionMiddle />
        <hr />
        <button class="btn btn-primary">下一步</button>
      </section>

      <!-- check-right-section -->
      <section class="col-5">
        <ProductCheckRigthSection />
        <hr />
      </section>
    </main>
  </div>
</template>

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
};
</script>