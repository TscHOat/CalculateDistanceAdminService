
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Branch extends BaseModel {
  public static table ='branch'
  @column({ columnName:'BranchCode' , isPrimary: true })
  public BranchCode: string

  @column({columnName:'BranchName'})
  public BranchName: string

  @column({columnName:'LatitudeLongitude'})
  public LatitudeLongitude: string
}
