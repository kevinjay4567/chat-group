<div class="chat-container">
  <header class="chat-title">
    <h3>Actual Channel</h3>
  </header>

  <section class="chat-content">
    <ul>
      <li>Message 1</li>
    </ul>

  </section>

  <div class="chat-input-container">
    <div class="chat-input">
      <input type="text" placeholder="Type message here"/>
      <button class="chat-send-btn">
        >
      </button>
    </div>
  </div>


</div>

<style>

  .chat-container {
    padding-top: 0;
  }

  .chat-title {
    padding-left: 71px;
    box-shadow: 0 3px 5px black;
    height: 59px;
    display: flex;
    align-items: center;
  }

  .chat-title > h3 {
    margin: 0;
  }

  .chat-content {
    padding-left: 71px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 80vh;
  }

  .chat-content > ul {
    padding-bottom: 40px;
    list-style: none;
  }

  .chat-input-container {
    padding-left: 71px;
  }

  .chat-input {
    width: 90%;
    height: 52px;
    background-color: var(--third-color);
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & input {
      height: 100%;
      width: 90%;
      background-color: transparent;
      border: none;
      padding-left: 17px;
    }
  }

  .chat-send-btn{
    height: 40px;
    width: 40px;
    background-color: rgba(47, 128, 237, 1);
    border: none;
    border-radius: 8px;
  }


</style>