/**
 * Simple class. Its is simple DOM and will use style of page it is inserted as <footer-component></footer-component>
 */
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer id="page-footer" class="lego-footer">
      <div class="footer-container">
        <div class="footer-wrapper">
          <a class="footer-link" href="#">Blog</a>
          <a class="footer-link" href="#">Getting Started</a>
          <a class="footer-link" href="#">Support</a>
          <a class="footer-link" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
