<script>
  import Layout from "../+layout.svelte";
    import Navbar from "./Navbar.svelte";

    export let data;
</script>

<Layout>
  <div slot="navbar">
    <Navbar />
  </div>


  <h1>{data.content}</h1>
</Layout>
