<script setup lang="ts">

// 侧边栏打开/折叠
import { ref } from "vue";

const isSidebar = ref(false)

function sidebarToggle() {
  isSidebar.value = !isSidebar.value;
}
</script>

<template>
  <div id="sidebar" :class="{'active': isSidebar}">
    <div id="sidebar-title">

    </div>
    <div id="sidebar-container">
      <div class="sidebar-item-1">
        <div class="sidebar-item-2">
          <div class="sidebar-item-3">

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

/* 超宽屏幕 */
@media only screen and (min-width: 2560px) {
  #sidebar {
    width: var(--sidebar-width);
    height: calc(100% - var(--navbar-height));
    position: fixed;
    top: var(--navbar-height);
    left: calc((100% - 1280px) / 2 - var(--sidebar-width) - 2rem);
    background-color: var(--sidebar-bgc);
    box-shadow: 0 -0.5rem 0.25rem 0.5rem #00000080;
    z-index: var(--sidebar-z-index);
  }

  #sidebar::before {
    display: none;
  }
}
</style>
