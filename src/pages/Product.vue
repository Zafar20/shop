<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
          <div class="product__wrapper">
                <div class="product__slider">
                    <carousel 
                    :perPage="1" 
                    :paginationEnable="true"
                    paginationColor="#b3b3b3"
                    paginationActiveColor="#494ce8">
                        <slide v-for="(slide,i) in product.gallery" :key="i">
                            <img :src="slide.img" :alt="slide.name">
                        </slide>
                    </carousel>
                </div>
                <div class="product__content">
                    <h2 class="title">{{ product.title}}</h2>
                    <p>{{ product.descr }}</p>
                </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
          product: null
        }
    },
    created() {
        let id = this.$route.params.id  
        this.product = this.$store.getters.getProduct(id)
    }
}
</script>

<style lang="scss">

.product__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product__slider,
.product__content{
    max-width: 48%;
    width: 100%;
    text-align: center;
}

</style>