import LoginPage from "../../Page/LoginPage";
import userData from "../../Data/userData"
describe('login as admin', () => {
  it('should login ', () => {
    LoginPage.login()
    expect(LoginPage.header.getText()).toEqual(userData.userAdmin.header)

  });


});