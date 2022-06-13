import React from "react";
import { ProductItem } from "app/core/models/interfaces/ProductItem";
import { ProductService } from "app/core/services/product.service";
import { ProductCard } from "app/shared/molecules";
import { PRODUCT } from "app/store/slices/action.type";
import { addItem } from "app/store/slices/my-cart.slice";
import { RootState } from "app/store/store";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

const Products: React.FC<any> = () => {
  const productService = new ProductService();
  const [productList, setProductList] = React.useState<ProductItem[]>([]);
  const [filteredList, setFilteredList] = React.useState<ProductItem[]>([]);
  const selectedCategory = useSelector(
    (state: RootState) => state[PRODUCT].selectedCategory
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    getProducts();
  }, []);

  React.useEffect(() => {
    console.log(selectedCategory, productList);
    filterProductList(selectedCategory);
  }, [selectedCategory]);

  const getProducts = () => {
    productService.getProducts().then((res: any) => {
      setProductList(res);
      setFilteredList(res);
    });
  };

  const filterProductList = (category: string | null) => {
    const items = productList.filter(
      (elem) => elem.category === category || category === null
    );
    setFilteredList(items);
  };

  const addItemInCart = (item: ProductItem) => {
    productService.addToCart(item).then((res: any) => {
      dispatch(addItem(item));
      toast(res.responseMessage, { type: "success" });
    });
  };

  return (
    <Container fluid className="p-0">
      <Row>
        {filteredList.length > 0 &&
          filteredList.map((elem: any) => (
            <Col
              xxl={3}
              xl={4}
              md={6}
              key={`product_item_${elem.id}`}
              className="align-items-stretch"
            >
              <ProductCard {...elem} onSelect={() => addItemInCart(elem)} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;
