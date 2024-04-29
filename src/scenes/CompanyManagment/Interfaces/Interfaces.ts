export interface addTeamsFace {
    name:string,
    personIds:string[],
    managerId:string,
    tenantId:string,
    // createById:string,
    fromDate:string|null,
    toDate:string|null
  }
  


  // {
  // "firstName":"test",
  // "lastName":"test",
  // "phoneNumber":"09911461822",
  // "tenantId":"eb781974-3cb0-4c3a-881e-97af686ce7f5",
  // "createById":"73b54dda-95cf-404e-a641-5abdce6fb8e5",
  // "jobType":"test"
// }

export interface addUserFace{
  firstName:string,
  lastName:string,
  phoneNumber:string,
  tenantId:string,
  // createById:string,
  jobType:string
}




