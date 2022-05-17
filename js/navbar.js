class Navbar extends HTMLElement {
  connectedCallback() {
    const logoHref = this.getAttribute("data-logo-href");
    const titleHref = this.getAttribute("data-title-href");
    const title = this.getAttribute("data-title") || "Jankric Respawn Team";
    const origin = window.location.origin;
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="js-scroll-trigger" href="${logoHref}">
            <img
              src="${origin}/img/jrt.png"
              class="navbar-brand js-scroll-trigger"
              href="#page-top"
              alt="Jankric Respawn"
              style="width: 80px; height: 40px"
            />
          </a>
          ${
            titleHref
              ? `<a class="js-scroll-trigger text-decoration-none" href="${titleHref}"> ${title} &nbsp;</a>`
              : `<div clas="js-scroll-trigger"> ${title} &nbsp;</div>`
          }
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="${origin}/#work">Project</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="${origin}/#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="${origin}/#contact"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);
