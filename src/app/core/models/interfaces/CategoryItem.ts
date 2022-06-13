export class CategoryItem {
  name = "";
  itemKey = "";
  description = "";
  enabled = false;
  order = 0;
  imageUrl = "";
  id = "";
  constructor(category: any) {
    if (category) {
      this.name = category.name;
      this.itemKey = category.key;
      this.description = category.description;
      this.enabled = category.enabled;
      this.order = category.order;
      this.imageUrl = category.imageUrl;
      this.id = category.id;
    }
  }
}
