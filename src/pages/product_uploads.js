import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

function ProductUploads() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, images: files });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setProduct({ ...product, images: [...product.images, ...files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Details:', product);
    alert('Product uploaded successfully!');
  };

  return (
    <div className="container mt-5">
     
      <div className="text-center mb-4 animate__animated animate__fadeInDown">
        <h1 className="text-dark">ByteMart Admin Panel</h1>
        <p className="text-muted">Upload your latest products and keep your inventory updated!</p>
      </div>

      <div className="card shadow-lg border-0 rounded-lg p-4 bg-dark animate__animated animate__fadeIn">
        <h2 className="mb-4 text-center text-warning">Upload New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold text-light">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name..."
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold text-light">Price ($)</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Enter price..."
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold text-light">Stock Quantity</label>
              <input
                type="number"
                className="form-control"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Enter stock amount..."
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold text-light">Category</label>
            <select className="form-select" name="category" value={product.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Books">Books</option>
              <option value="Home Appliances">Home Appliances</option>
              <option value="Groceries">Groceries</option>
            </select>
          </div>


          <div className="mb-3">
            <label className="form-label fw-bold text-light">Product Images</label>
            <input type="file" className="form-control" multiple accept="image/*" onChange={handleImageChange} />
          </div>

          <div
            className="border rounded p-4 text-center bg-light animate__animated animate__pulse animate__infinite"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            style={{ border: '2px dashed #ffc107', cursor: 'pointer' }}
          >
            <p className="text-warning fw-bold">Drag & Drop images here</p>
          </div>

          {/* Image Preview */}
          {product.images.length > 0 && (
            <div className="mt-3">
              <h5 className="text-light">Uploaded Images:</h5>
              <div className="d-flex flex-wrap gap-3">
                {product.images.map((file, index) => (
                  <div key={index} className="border rounded p-2 shadow-lg">
                    <img src={URL.createObjectURL(file)} alt="Preview" className="img-thumbnail" width="100" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submission Button */}
          <button type="submit" className="btn btn-warning w-100 mt-3 animate__animated animate__bounce">
            Upload Product 🚀
          </button>
        </form>
      </div>

      {/* Additional Content Section */}
      <div className="mt-5 p-4 text-center text-light bg-secondary rounded animate__animated animate__fadeInUp">
        <h3>Why Upload to ByteMart?</h3>
        <p className="text-light">
          Keep your store updated with the latest products! Enhance customer experience and drive more sales by
          showcasing high-quality images and accurate product details.
        </p>
        <button className="btn btn-outline-light mt-2 animate__animated animate__pulse animate__infinite">Learn More</button>
      </div>
    </div>
  );
}

export default ProductUploads;


