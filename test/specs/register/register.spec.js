import RegisterPage from "../../pages/register.page";
import HomePage from "../../pages/home.page"
import expected from '../../data/expected.json';

before(() => {
  HomePage.open();
  HomePage.registerBtn.click();
});

describe('TEST REGISTER PAGE ELEMENTS', () => {
  it('should verify header is present', () => {
    expect(RegisterPage.header.isDisplayed()).true;
  });

  it('should verify header text', () => {
    expect(RegisterPage.header.getText()).eq(expected.registerPageData.header);
  });

  it('should verify FirstName field is displayed', () => {

  });

  // it('should verify 4 required are present', () => {
  //   expect(RegisterPage.requiredFields.length).eq(4);
  // });
});
// describe('REGISTER NEW USER AND VERIFY USER EXISTS', () => {
//   it('should fill out and submit form', () => {
//     RegisterPage.firstNameInput.setValue(testUser.firstName);
//     RegisterPage.lastNameInput.setValue(testUser.lastName);
//     RegisterPage.emailInput.setValue(testUser.email);
//     RegisterPage.passwordInput.setValue(testUser.password);
//     browser.pause(1000);
//     RegisterPage.submitForm();
//     browser.pause(1000);
//   });
//
//   it('should go to user page and verify the page is correct', () => {
//     LoginPage.open();
//     expect(LoginPage.header.getText()).eq('User Login');
//   });
//
//   it('should verify user has been created', () => {
//     LoginPage.open();
//     LoginPage.emailInput.setValue(testUser.email);
//     LoginPage.passwordInput.setValue(testUser.password);
//     LoginPage.loginBtn.click();
//     browser.pause(2000);
//     expect(LoginPage.header.getText()).eq('You are a new user');
//   });
//
//   it('should verify user exists in the database', async () => {
//     const response = await axios({
//       method: 'POST',
//       url: 'https://server-stage.pasv.us/user/login',
//       data: {
//         email: testUser.email,
//         password: testUser.password,
//       },
//     })
//       .then(res => res)
//       .catch(err => err);
//     expect(response.status).eq(200);
//  });


