<template>
  <div>
    <WtwHeader></WtwHeader>
    <div class="page">
      <nuxt/>
    </div>
    <footer>
      <div>
        挖影 © Code: H-H-Liao  /  Design: K.T
      </div>
    </footer>
  </div>
</template>

<script>
import WtwHeader from '/components/WtwHeader.vue';

export default {
  components: {  WtwHeader }
}
</script>

<style lang="scss">
  // 變數
  $primary_color:linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);

  body{
    margin:0px;
    background-color:#1B1E25;
    color:white;
  }
  // 通用
  .container{
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    &.not-banner{
      margin-top: 60px;
      padding-top: 24px;
    }
  }

  a{
    text-decoration: inherit;
    color:inherit;
  }


  .section_movie{
    padding-top:40px;
    padding-bottom: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(104,107,114,0.1);
    border-radius: 20px;
  }

  footer{
    display: flex;
    justify-content: center;
    margin-top:56px;
    margin-bottom: 15px;
    color: #686B72;
  }
</style>