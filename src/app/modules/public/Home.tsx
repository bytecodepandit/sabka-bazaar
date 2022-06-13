import { CategoryItem } from "app/core/models/interfaces/CategoryItem";
import { CategoryService } from "app/core/services/category.service";
import { HomeCarousel } from "app/shared/molecules";
import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { HomeProductCard } from "app/shared/molecules";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "app/store/reducers/layout.reducer";

const Home: React.FC<any> = (props) => {
  const categoryService = new CategoryService();
  const [categories, setCategories] = React.useState<CategoryItem[]>([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getCategories();
    dispatch(toggleSidebar(false));
    return () => {
      dispatch(toggleSidebar(true))
    };
  }, []);

  const getCategories = () =>
    categoryService.getCategory().then((res: any) => {
      setCategories(res);
    });

  return (
    <Container>
      <HomeCarousel />

      <CategoryList>
        {categories.length &&
          categories.map((elem, index) => (
            <HomeProductCard
              key={`home_product_banner_${elem.id}`}
              {...elem}
              left={(index + 1) % 2 !== 0}
            />
          ))}
      </CategoryList>
    </Container>
  );
};

export default Home;

const CategoryList = styled.div`
  margin-top: 30px;
`;
