<script>
  import Navbar from "./Navbar.svelte";
</script>

<div class="app">
  <Navbar />
  <main class="main-container">
    <slot></slot>
  </main>
</div>

<style>
  .app {
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    background-color: var(--secondary-color);
  }

  .main-container {
    flex-basis: 80%;
  }

</style>