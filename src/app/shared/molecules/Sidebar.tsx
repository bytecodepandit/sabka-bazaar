import React from "react";
import { CategoryItem } from "app/core/models/interfaces/CategoryItem";
import { CategoryService } from "app/core/services/category.service";
import { Form, Col, Row } from "react-bootstrap";
import colors from "app/theme/colors";
import styled from "styled-components";
import breakpoints from "app/theme/breakpoints";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store/store";
import { TOGGLE_SIDEBAR } from "app/store/slices/action.type";
import { setProductFilter } from "app/store/slices/products.slice";

const Sidebar: React.FC<any> = () => {
  const categoryService = new CategoryService();
  const [filterItems, setFilterItems] = React.useState<CategoryItem[]>([]);
  const showSidebar = useSelector(
    (state: RootState) => state[TOGGLE_SIDEBAR].showSidebar
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () =>
    categoryService.getCategory().then((res: any) => {
      const allCategory = new CategoryItem({ name: "All", id: null });
      res.unshift(allCategory);
      setFilterItems(res);
    });

  const onSelectFilter = (category: string) => {
    dispatch(setProductFilter(category));
  };
  return (
    <React.Fragment>
      {showSidebar && (
        <Col xxl={2} xl={3} lg={4}>
          <Row>
            <SidebarContainer>
              <SidebarMenu id="sidebar" aria-label="Product Filter">
                {filterItems.length > 0 &&
                  filterItems.map((elem, index) => (
                    <SidebarMenuItem
                      onClick={() => onSelectFilter(elem.id)}
                      key={`product_filter_${elem.id}`}
                    >
                      {elem.name}
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarContainer>

            <FormSelect
              onChange={(e: any) => onSelectFilter(e.target.value)}
              aria-label="Default select example"
            >
              {filterItems.length > 0 &&
                filterItems.map((elem, index) => (
                  <option
                    key={`product_filter-dropdown_${elem.id}`}
                    value={elem.id}
                  >
                    {elem.name}
                  </option>
                ))}
            </FormSelect>
          </Row>
        </Col>
      )}
    </React.Fragment>
  );
};

export default React.memo(Sidebar);

const SidebarContainer = styled.aside`
  display: none;
  padding-right: 0px;
  @media screen and (min-width: ${breakpoints.lg}) {
    background-color: ${colors.fadeGray};
    min-height: calc(100vh - 100px);
    height: 100%;
    display: block;
  }
`;

const SidebarMenu = styled.ul`
  padding-left: 15px;
  list-style: none;
  cursor: pointer;
`;

const SidebarMenuItem = styled.li`
  border-bottom: 1px solid ${colors.divider};
  padding: 15px;
  text-transform: capitalize;
`;

const FormSelect = styled(Form.Select)`
  display: none;
  @media screen and (max-width: ${breakpoints.lg}) {
    display: block;
    background: #bd2757;
    color: #fff;
  }
`;
