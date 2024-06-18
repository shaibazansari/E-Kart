const Products = require("../db/data/products");
const Categories = require("../db/data/categories");

const getAllProducts = (req, res) => {
  try {
    const { excludeCategories = false } = req.query;

    const data = {
      products: Products,
      categories: Categories,
    };

    if (!excludeCategories) {
      data["categories"] = Categories;
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching products" });
  }
};

const getProductById = (req, res) => {
  const { id } = req.params;
  try {
    const product = Products.find((product) => product.id == id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the product" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
