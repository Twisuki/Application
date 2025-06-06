<script>
import NavBar from "@/components/layout/NavBar.vue";
import SideBar from "@/components/layout/SideBar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
	components: {NavBar, SideBar, AppFooter},
	computed: {
		showSidebar() {
      return this.$route.path !== '/'
    }
	}
}

</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.nav-bar {
  height: 60px;
  background: #ff6b6b;
}
.main-content {
  display: flex;
  flex: 1;
}
.side-bar {
  width: 250px;
  background: #51cf66;
}
.page-content {
  flex: 1;
  background: #339af0;
}
.app-footer {
  height: 80px;
  background: #9775fa;
}
</style>
