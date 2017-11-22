import { browser, by, element } from 'protractor';

export class ReviewsSection {

  private reviews = element.all(by.css('.reviews li'));
  private delBttns = element.all(by.css('.delete'));

  private reviewInputRating = element(by.css('#review-input-rating'));
  private reviewInputComment = element(by.css('#review-input-comment'));
  private reviewInputSubmit = element(by.css('.add-review'));

  navigateTo(idCompany: string) {
    return browser.get(`/detail/${idCompany}`);
  }

  async noReviews() {
    return this.reviews.count();
  }

  async addReview(rating: number, comment: string) {
    this.reviewInputRating.sendKeys(rating);
    this.reviewInputComment.sendKeys(comment);
    this.reviewInputSubmit.click();
  }

  async delReview(index: number) {
    this.delBttns.get(index).click();
  }

}