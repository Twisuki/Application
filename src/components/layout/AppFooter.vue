<script setup lang="ts">

</script>

<template>
  <div id="footer">
    <a href="https://robotics.hnu.edu.cn/" class="underline">湖南大学机器人学院</a> &copy; 2024 <a href="https://github.com/TZLakeStudio" class="underline HYTMR">桃子湖工作站</a>
  </div>
</template>

<style scoped>
#footer {
  width: 100%;
  height: 2rem;
  padding: 0;
  margin: 0;
  background-color: var(--footer-bgc);
  text-align: center;
  line-height: 2rem;
}

#footer a {
  color: var(--text-dark-gray);
}

#footer a::after {
  background-color: var(--text-dark-gray);
  bottom: -2px;
}
</style>
