const layout = require('../layout');

module.exports = ({ products }: any): string => {
  const renderedProducts = products
    .map((product: number) => {
      return `
        <div class="column is-one-quarter">
          <div class="card product-card">
            <figure>
              <img src="data:image/png;base64, alt="image""/>
            </figure>
            <div class="card-content">
              <h3 class="subtitle">bla</h3>
              <h5>$99</h5>
            </div>
            <footer class="card-footer">
              <form action="/cart/products" method="POST">
              <input hidden value="bla" name="productId"  />
                <button class="button has-icon is-inverted">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </footer>
          </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            <img src="/images/banner.jpg" />
          </div>
        </div>
      </section>
      
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">Featured Items</h2>
                <div class="columns products">
                   
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `,
  });
};
