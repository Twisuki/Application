<script>

</script>

<template>
  <div id="home">
    <div id="hero">
      <div id="hero-left">
        <div id="home-hero-title-1">机器人学院 <span class="HYTMR">学生手册</span></div>
        <div id="home-hero-title-2">一站式的学生信息获取站点</div>
        <div id="home-hero-title-3">Powered by <a href="/about" class="underline HYTMR">桃子湖工作站</a></div>
        <div id="home-hero-btn">
          <div id="home-hero-btn-docs" class="home-hero-btn">
            <a href="/docs">文档</a>
          </div>
          <div id="home-hero-btn-about" class="home-hero-btn">
            <a href="/about">关于</a>
          </div>
        </div>
      </div>
      <div id="hero-right">
        <img src="/logo.png" alt="">
      </div>
    </div>
    <div id="site">

    </div>
    <div id="news">

    </div>
  </div>
</template>

<style scoped>
#home {
  width: 100%;
  display: flex;
}

#hero {
  width: 100%;
  padding: 0 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
}

#home-hero-title-1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

#home-hero-title-1 span {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-light);
}

#home-hero-title-2 {
  font-size: 1.5rem;
  font-weight: bold;
}

#home-hero-title-3 {
  font-weight: 400;
}

#home-hero-title-3 a {
  color: var(--a-color);
}

#home-hero-btn {
  height: 4rem;
  display: flex;
  justify-content: left;
  gap: 2rem;
  align-items: center;
}

.home-hero-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1rem;
}

#home-hero-btn-docs {
  background-color: var(--btn-bgc);
}

#home-hero-btn-docs a {
  color: #ffffff;
}

#home-hero-btn-docs:hover {
  background-color: var(--btn-hover-bgc);
}

#home-hero-btn-about {
  border: 1px solid var(--text-gray);
}

#home-hero-btn-about a {
  color: var(--text-dark);
}

#home-hero-btn-about:hover {
  background-color: var(--btn-bgc);
}

#hero-right {
  display: flex;
  align-items: center;
}

#hero-right img {
  width: 8rem;
  height: 8rem;
}
</style>
