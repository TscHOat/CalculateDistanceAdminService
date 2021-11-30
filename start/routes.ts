/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'LoginController.view')
  Route.post('/', 'LoginController.login')
  Route.get('/logout', 'LoginController.logout')
}).prefix('/login')

// Admin
Route.get('/admin', 'AdminsController.index')

// Add
Route.post('/branch/add', 'AdminsController.addBranch')

// Edit
Route.put('/googleapikey/:id', 'AdminsController.editGoogleApiKey')
Route.put('/apikey/:id', 'AdminsController.editApiKey')
Route.put('/branch/:id', 'AdminsController.editBranch')

// delete
Route.delete('/branch/:id', 'AdminsController.deleteBranch')
