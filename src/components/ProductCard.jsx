import "./ProductCard.css";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">

      {/* Placeholder instead of image */}
      <div className="product-image placeholder">
        <span>Product</span>
      </div>

      <h3 className="product-name">{name}</h3>

      <p className="product-price">${price}</p>

      <span
        className={`stock-badge ${
          inStock ? "in-stock" : "out-stock"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </span>

    </div>
  );
}

export default ProductCard;
