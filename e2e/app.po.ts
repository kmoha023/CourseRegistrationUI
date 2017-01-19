import { browser, element, by } from 'protractor';

export class CourseAssignmentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cr-root h1')).getText();
  }
}
