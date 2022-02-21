/**
 * Simple class. Its is simple DOM and will use style of page it is inserted as <header-component></header-component>
 */
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="nav-header">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <img
              class="logo"
              src="assets/KFS-DRK.png"
              alt="Kick Flip Studios Image"
            />
          </div>
          <div class="col-9">
            <div class="nav-menu">
              <ul class="nav-menu-list">
                <li class="nav-item">
                  <a class="nav-a" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-a" href="about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-a" href="">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-a" href="">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-a" href="">Faq</a>
                </li>
                <li class="nav-item">
                  <a class="nav-a" href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>`;
  }
}

customElements.define("header-component", Header);
