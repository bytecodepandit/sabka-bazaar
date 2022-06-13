export class ProductItem {
  name = "";
  imageURL = '';
  description = "";
  price = 0;
  stock = 0;
  category = "";
  sku = "";
  id = "";
  count = 0;

  constructor(product: any) {
    if (product) {
      this.name = product.name;
      this.imageURL = product.imageURL;
      this.description = product.description;
      this.price = product.price;
      this.stock = product.stock;
      this.sku = product.sku;
      this.id = product.id;
      this.category = product.category;
      this.count = product.count;
    }
  }
}
