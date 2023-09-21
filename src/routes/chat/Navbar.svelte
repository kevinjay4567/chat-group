<script>
	import { onMount } from 'svelte';

	$: channels = [];

	onMount(() => {
		fetch('http://localhost:8000/api/channels')
			.then((response) => response.json())
			.then((data) => (channels = data));
	});
</script>

<nav class="navbar-container">
  <div>
    <div class="navbar-header">
      <h3>Channels</h3>
      <button>+</button>
    </div>
    <div class="navbar-input">
      <input type="text" placeholder="search" />
    </div>
  
    <ul class="navbar-list">
      {#each channels as channel}
        <li>{channel.name}</li>
      {/each}
    </ul>
  </div>

	<div class="navbar-footer">
		<h3>User Name</h3>
	</div>
</nav>

<style>
	.navbar-container {
		flex-basis: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
		background-color: var(--primary-color);
	}

	.navbar-header {
		display: flex;
		padding-left: 32.99px;
		padding-right: 21.6px;
    height: 59.49px;
		box-shadow: -3px 3px 3px black;
		justify-content: space-between;
		align-items: center;
	}

	.navbar-header > button {
		height: 32px;
		width: 32px;
		border: none;
		border-radius: 8px;
		background-color: var(--secondary-color);
	}

	.navbar-input {
		padding-left: 32.99px;
		padding-right: 25.6px;
		padding-top: 19.58px;
	}

	.navbar-input > input {
		width: 265.42px;
		height: 48px;
		border: none;
		border-radius: 8px;
		text-indent: 44.5px;
		background-color: var(--secondary-color);
	}

	.navbar-list {
		list-style: none;
		padding-top: 43.48px;
	}

	.navbar-footer {
    padding-left: 32.99px;
		background-color: black;
	}
</style>
