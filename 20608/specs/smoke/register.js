import { expect } from 'chai';
import { dataRegisterPage, RegisterData } from '../../data/DataPage';
import RegisterPage from '../../../pageObjects/register.page';

describe('USER REGISTER', () => {
  before(() => {
    RegisterPage.open();
  });

  it('check header', () => {
    expect(RegisterPage.headerRegister.getText()).eq(dataRegisterPage.header);
  });

  it('register user', function () {
    RegisterPage.registerUser(
      RegisterData.firstName,
      RegisterData.lastName,
      RegisterData.email,
      RegisterData.password,
      RegisterData.phone,
    );
    expect($('h1').getText()).eq(RegisterData.firstName + ' ' + RegisterData.lastName);
  });
});
