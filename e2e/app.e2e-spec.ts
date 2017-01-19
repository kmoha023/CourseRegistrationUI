import { CourseAssignmentPage } from './app.po';

describe('course-assignment App', function() {
  let page: CourseAssignmentPage;

  beforeEach(() => {
    page = new CourseAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cr works!');
  });
});
