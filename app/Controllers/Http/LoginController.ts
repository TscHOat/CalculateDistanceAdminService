// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class LoginController {
  async view({auth,response,view}){
    if (auth.user) {
      return response.redirect('/admin')
    }
    return view.render('login')
  }
  async login({ request, response, session, auth }) {
    const { username, password } = request.all()
    try {

        await auth.attempt(username, password)
        return response.redirect('/admin')
    } catch (error) {
        console.log(error);

        console.log("Username or Password is Incorrect!")
        session.flash({ loginError: 'Username or Password is Incorrect!' })
        return response.redirect('/login')
    }
  }
  async logout({ auth, response }) {
    await auth.logout()
    return response.redirect('/login')
  }
}
