import { HomeBanner } from "app/core/models/interfaces/HomeBanner";
import { HomeService } from "app/core/services/home.service";
import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const HomeCarousel = () => {
  const homeService = new HomeService();
  const [banners, setBanners] = React.useState<HomeBanner[]>([]);

  React.useEffect(() => {
    getBanners();
  }, []);

  const getBanners = () =>
    homeService.getBanners().then((res) => {
      setBanners(res)
    });

  return (
    <Carousel nextLabel="Next" prevLabel="Prev" touch className="dropshadow">
      {banners.length &&
        banners.map((elem, index) => (
          <Carousel.Item key={`home_banner_${elem.id}`}>
            <img
              className="d-block w-100"
              src={elem.bannerImageUrl}
              alt={elem.bannerImageAlt}
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default HomeCarousel;

const CarouselContainer = styled.div``;
