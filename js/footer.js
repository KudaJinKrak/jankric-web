class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
    <footer>
      <div class="container text-center">
        <p>Copyright &copy; Jankric Respawn ${year}</p>
        <a
          class="fa fa-facebook fa-fw text-decoration-none"
          href="https://www.facebook.com/JankricRespawnGames/?ref=br_rs"
        ></a>
        <a
          class="fa fa-instagram fa-fw text-decoration-none"
          href="https://www.instagram.com/jankricrespawngames/"
        ></a>
        <a
          class="fa fa-youtube fa-fw text-decoration-none"
          href="https://www.youtube.com/channel/UCMUbH4FBKCQAHzxEk77cgBw"
        ></a>
        <a
          class="fa fa-twitter fa-fw text-decoration-none"
          href="https://twitter.com/jankricrespawn"
        ></a>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
