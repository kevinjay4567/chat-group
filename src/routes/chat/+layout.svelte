<script>
  export let data;
</script>

<div class="app">
  <slot name="navbar" class="navbar-container" />
  <main class="main-container">
    <slot />
  </main>
</div>

<style>
  .app {
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    background-color: var(--secondary-color);

     & .navbar-container {
         height: 100%;
      }
  }

</style>