
const userAdmin = {

  email : 'admin555@gmail.com',
  password : '123123',
  headerAdmin : 'admin adminovich'

}

const userNew = {
  email: Math.floor(Math.random() * 1000) + 'test@gmail.com',
  password: '123123',
  firstName: 'test',
  lastName: 'testovich',
  phone: '1234567890',
  headerName: 'test testovich',

}




module.exports = {userAdmin, userNew};