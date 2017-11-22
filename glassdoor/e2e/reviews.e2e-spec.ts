import { browser, protractor, element, by } from 'protractor';

import { ReviewsSection }     from './reviews.po';
import { ProfilePage }        from './profile.po';

describe('Review section of Company Detail Page', () => {

  let rSec:     ReviewsSection;
  let nReviews: number;

  let pPage:    ProfilePage;
  const existingUser = {username: 'testRobot', password: 'passTestRobot'};

  beforeEach(async() => {
    rSec = new ReviewsSection();
    pPage = new ProfilePage();
  });

  it('should add and remove reviews', async() => {

    // log in user
    pPage.navigateTo();
    pPage.login(existingUser);
    browser.sleep(1000);

    // Navigating to google page (This page is sure). It was made by test user
    rSec.navigateTo("5a13f584a599139e9e648632");

    // Store number of Reviews at this time
    await rSec.noReviews().then(num => nReviews=num);

    expect(rSec.noReviews()).toBe(nReviews);

    // add a test review
    rSec.addReview(3, 'Test. Fairly happy about my internship here');
    expect(rSec.noReviews()).toBe(nReviews+1);

    // delete the added test review (will be the last index)
    rSec.delReview(nReviews);
    expect(rSec.noReviews()).toBe(nReviews);

    // log out user
    pPage.logout();

  });

});
