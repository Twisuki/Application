<script setup lang="ts">
import { ref } from "vue";

// 侧边栏打开/折叠
const isSidebar = ref(false)

function sidebarToggle() {
  isSidebar.value = !isSidebar.value;
}

// 渲染sidebar
const data: object = {
  name: '菜单',
  children: [
    {
      name: '一级菜单1',
      children: [
        {
          name: '二级菜单1',
          children: [
            { name: '文章1' },
            { name: '文章2' },
          ],
        },
        {
          name: '二级菜单2',
          children: [
            { name: '文章1' },
            { name: '文章2' },
          ],
        },
      ],
    },
    {
      name: '一级菜单2',
      children: [
        {
          name: '二级菜单1',
          children: [
            { name: '文章1' },
            { name: '文章2' },
            { name: '文章3' },
            { name: '文章4' },
          ],
        },
        {
          name: '二级菜单2',
          children: [
            { name: '文章1' },
            { name: '文章2' },
          ],
        },
        {
          name: '二级菜单3',
          children: [
            { name: '文章1' },
            { name: '文章2' },
          ],
        },
      ],
    },
  ],
}
</script>

<template>
  <div id="sidebar" :class="{'active': isSidebar}">
    <div id="sidebar-title">
      {{ data.name }}
    </div>
    <div id="sidebar-container">
      <div class="sidebar-item-1" v-for="item1 in data.children">
        <span>{{ item1.name }}</span>
        <div class="sidebar-item-2" v-for="item2 in item1.children">
          <span>{{ item2.name }}</span>
          <div class="sidebar-item-3" v-for="item3 in item2.children">
            <span>
              <a href="#">{{ item3.name }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar-toggle" @click="sidebarToggle" :class="{'active': isSidebar}">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
#sidebar {
  width: var(--sidebar-width);
  height: calc(100% - var(--navbar-height));
  position: fixed;
  top: var(--navbar-height);
  left: calc(-1 * var(--sidebar-width));
  background-color: var(--sidebar-bgc);
  z-index: var(--sidebar-z-index);
  transition: left 0.2s ease;
}

#sidebar.active {
  left: 0;
}

#sidebar.active::before {
  content: '';
  width: calc(100% - var(--sidebar-width));
  height: calc(100% - var(--navbar-height));
  position: fixed;
  display: block;
  top: var(--navbar-height);
  right: 0;
  background-color: var(--sidebar-backdrop-bgc);
}

#sidebar-toggle {
  width: 2rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.2s ease;
}

#sidebar-toggle.active {
  left: var(--sidebar-width);
}

#sidebar-toggle:hover {
  background-color: color-mix(in srgb, var(--text-dark-gray), transparent 20%);
}

#sidebar-toggle span {
  width: 1rem;
  height: 1rem;
  display: block;
  position: relative;
  border-radius: 2px;
  border-top: 4px solid var(--text-dark);
  border-right: 4px solid var(--text-dark);
  rotate: 45deg;
  transition: border 0.2s ease;
}

#sidebar-toggle.active span {
  border-top: none;
  border-right: none;
  border-bottom: 4px solid var(--text-dark);
  border-left: 4px solid var(--text-dark);
}

#sidebar-title {
  margin: 0.5rem 1rem;
  padding: 0 0.25rem 0.25rem 0.25rem;
  font-size: 1.5rem;
  border-bottom: 2px solid var(--text-dark);
}

#sidebar-container {
  margin: 1rem;
}

.sidebar-item-2 {
  border-radius: 0.5rem;
  padding: 0.25rem;
}

.sidebar-item-2:hover {
  background-color: color-mix(in srgb, var(--text-gray), transparent 50%);
}

.sidebar-item-1 span {
  font-size: 1rem;
}

.sidebar-item-2 span {
  font-size: 1rem;
  margin-left: 0.5rem;
}

.sidebar-item-3 span {
  display: block;
  font-size: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2px;
  border-radius: 4px;
}

.sidebar-item-3 span:hover {
  background-color: color-mix(in srgb, var(--text-gray), transparent 50%);
}

/* 超宽屏幕 */
@media only screen and (min-width: 2560px) {
  #sidebar {
    width: var(--sidebar-width);
    height: calc(100% - var(--navbar-height));
    position: fixed;
    top: var(--navbar-height);
    left: calc((100% - 1280px) / 2 - var(--sidebar-width) - 2rem);
    background-color: var(--sidebar-bgc);
    box-shadow: none;
    border-right: 1px solid var(--text-dark-gray);
    z-index: var(--sidebar-z-index);
  }

  #sidebar::before {
    display: none;
  }

  #sidebar-toggle {
    display: none;
  }
}
</style>
