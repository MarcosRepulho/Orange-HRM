import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loguinPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage =  new LoginPage()
const  dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

      const selectorsList = { 
        
      }
      
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails('Kaio', 'Jordson', 'Guria')
    myInfoPage.fillEmployeeDetails('1234', '4321', '434343','2025-07-29', '787878', '989898')
    myInfoPage.fillStatus()
    myInfoPage.saveform()
  

  })
  
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })
})