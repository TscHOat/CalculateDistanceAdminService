// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ApiKey from "App/Models/ApiKey"
import Branch from "App/Models/Branch"
import GoogleApiKey from "App/Models/GoogleApiKey"



export default class AdminsController {
  async index({ view, response, auth, request }) {
    // if (!auth.user) {
    //     response.redirect('/login')
    // }
    const page = request.input('page',1)
    const Branches = await Branch.query().paginate(page?page:1, 5)
    Branches.baseUrl('/admin')

    return view.render('admin/index', {
        GoogleAPIKey: await GoogleApiKey.first(),
        APIKey: await ApiKey.first(),
        Branches
    })
  }
}
