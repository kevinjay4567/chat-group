<div class="chat-container">
  <header class="chat-title">
    <h3>Actual Channel</h3>
  </header>

  <section class="chat-content">
    <ul>
      <li>Message 1</li>
    </ul>

  </section>

  <div class="chat-input">
    <input type="text">
  </div>


</div>

<style>

  .chat-container {
    padding-top: 0px;
  }

  .chat-title {
    padding-left: 70.62px;
    box-shadow: 0px 3px 5px black;
    height: 59.49px;
    display: flex;
    align-items: center;
  }

  .chat-title > h3 {
    margin: 0px;
  }

  .chat-content {
    padding-left: 70.62px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 80vh;
  }

  .chat-content > ul {
    padding-bottom: 40.3px;
    list-style: none;
  }

  .chat-input {
    padding-left: 70.62px;
  }

  .chat-input > input {
    width: 90%;
    height: 52px;
    background-color: var(--third-color);
    border: none;
    border-radius: 8px;
  }


</style>