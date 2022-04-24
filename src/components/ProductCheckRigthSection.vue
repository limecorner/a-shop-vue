<template>
  <div class="cart">
    <div class="cart-container px-3">
      <h4>購物籃</h4>
      <div v-for="product in products" :key="product.id" class="cart-card">
        <!-- <img :src="require(product.image)" alt="" /> 不行 -->
        <img :src="require(`../assets/photo-${product.id}@2x.png`)" alt="" />
        <div class="product-info" data-price="3999">
          <h5>{{ product.name }}</h5>
          <div class="amount-area">
            <i class="fas fa-minus">-</i>
            <p>{{ product.count }}</p>
            <i class="fas fa-plus">+</i>
          </div>
          <h5 class="product-total-price">{{ product.price }}</h5>
        </div>
      </div>

      <div class="product-price">
        <p>運費</p>
        <p>免費</p>
      </div>
      <div class="product-price">
        <p>小計</p>
        <p class="total-price">$5,298</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  height: 100%;
}

.cart-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  border: 1px solid #afb1bd;
  border-radius: 8px;
}

.cart-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* height: 102px; */
}
.product-info {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  width: 50%;
  height: 90%;
}

.amount-area {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.amount-area i {
  width: 26px;
  height: 26px;
  background-color: #f0f0f5;
  border-radius: 50%;
  font-size: 16px;
  text-align: center;
}

img {
  margin-right: 10px;
  width: 100px;
  height: 100px;
}

.product-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 50px;
  border-top: 1px solid #f0f0f5;
}
</style>

<script>
const dummyData = {
  products: [
    {
      id: 1,
      name: "破壞補釘修身牛仔褲",
      image: "../assets/photo-1@2x.png",
      count: 1,
      price: 3999,
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      image: "../assets/photo-1@2x.png",
      count: 1,
      price: 1299,
    },
  ],
};
export default {
  data() {
    return {
      products: dummyData.products,
    };
  },
};
</script>