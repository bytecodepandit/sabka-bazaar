export class HomeBanner {
  bannerImageUrl = "";
  bannerImageAlt = "";
  isActive = "";
  order = null;
  id = null;

  constructor(banner: any) {
    if (banner) {
      this.bannerImageAlt = banner.bannerImageAlt;
      this.bannerImageUrl = banner.bannerImageUrl;
      this.isActive = banner.isActive;
      this.order = banner.order;
      this.id = banner.id;
    }
  }
}
