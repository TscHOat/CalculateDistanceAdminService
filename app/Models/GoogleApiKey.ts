import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class GoogleApiKey extends BaseModel {
  public static table = 'api_key'
  @column({ isPrimary: true })
  public Id: number
  @column()
  public api_key
}
