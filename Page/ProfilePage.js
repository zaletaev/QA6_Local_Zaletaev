import BasePage from "./BasePage";

class ProfilePage extends BasePage{
  get header(){ return $('h1')}
}

export default new ProfilePage()