
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ApiKey extends BaseModel {
  public static table = 'key_list'
  @column({ isPrimary: true })
  public Id: number

  @column()
  public api_key

}
