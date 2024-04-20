export  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }


  export interface AddEvalFace {
    newValue: string,
    problems:string,
    nextState:string,
    meetingId:string,
    teamId:string,
    periodId:string,
    tenantId:string,
    keyResultId:string,
    objectiveId:string,
    tensileScore:string,
    currentState:string,
    description:string,
    closedKeyResult:Boolean,
  }

  export interface SelectOptionFace{
    key:string,
    value:string
  }





  export interface AddKeyResultFace{
    name:string,
    responsibleId:string,
    pointingSystemType:string,
    keyResultType:string,
    startValue:string,
    onValue:string,
    weight:string,
    horizontalAlignments:any[],
    forceEndDate:string,
    startDate:string,
    description:string,
    valuesDetailCommandDtos:any[],
    oKRStateId:string

  }

  // export interface AddObjectiveFace{
  //   objectiveDescription:string,
  //   periodId:string,
  //   teamID:string,
  //   levelId:string,
  //   responsibleId:string,
  //   teamsOrPersonsId:string,
  //   weight:string,
  //   TheReasonImportant:string,
  //   descriptions:string
  // }

   export  interface pSoFace  {
    key: string;
    value: string;
}

export interface addStaffFace{
  fName:string,
  lName:string,
  phoneNumber:string,
  position:string


}

export interface addTeamFace{
  title:string,
  manager:string,
  members:string

}

export interface addMissionFace{
  mission:string,
  phoneNumber:string
}

export interface addContractFace{
  startDate:string,
  countOfSaledDay:number,
  countOfUser:number
}

export interface addCompanyFace{
  fName:string,
  lName:string,
  companyName:string

}

export interface resetPasswordFace{
  currentPassword:string,
  newPassword:string,
  repeatPassword:string
}

export interface AllOKRComponentFace{
  periodId:string | null,
  periodsData:any[]

}


// {"name":"تست",
// "periodId":"d3fe4f1c-e2ce-470e-9e48-87ffb411a997",
// "definitionLevelId":"ab6af938-af16-4d3d-8d6f-b7079a145c4a",
// "oKRStateId":"b913a620-5078-4249-aa48-3269ded442a7",
// "responsibleId":"e76209ac-35c8-4e13-a85a-ebe0340588cd",
// "tenantId":"3f2d72cf-cdff-413c-abcd-d5459d97890c",
// "isPublic":true,
// "answerRequest":"تست",
// "description":"تست",
// "CalculateProgressType":"BasedOnKR",
// "createById":"73b54dda-95cf-404e-a641-5abdce6fb8e5",
// "keyResultParentIds":[],
// "TeamIds":[],
// "weight":"100"
// }

export interface addObjectiveFace{
  name:string,
  periodId:string,
  definitionLevelId:string,
  oKRStateId:string,
  responsibleId:string,
  tenantId:string,
  isPublic:boolean,
  description:string,
  CalculateProgressType:string,
  // createById:string,
  keyResultParentIds:string[],
  TeamIds:string[],
  weight:string,
  answerRequest:string

}



  // interface pointingSystemItemFace:{
  //   tensile:'tensile',
  //   regulary:'regulary'
  // }

  // export interface pointingSystemOptions{
  //   pointingSystemOptions:pointingSystemItemFace[]
  // }


  
// {

//     "name": "rggrgrg",

//     "responsibleId": "e76209ac-35c8-4e13-a85a-ebe0340588cd",

//     "pointingSystemType": "Tensile",

//     "keyResultType": "Percentage",

//     "oKRStateId": "e71fa848-bf0f-4471-91b1-07168ae8bc8e",

//     "weight": null,

//     "startDate": null,

//     "forceEndDate": null,

//     "description": "",

//     "valuesDetailCommandDtos": [

//         {

//             "scoreLevelId": "d0966827-75c2-4a98-87e7-c07e572bef62",

//             "value": "۲۱",

//             "tenantId": "eb781974-3cb0-4c3a-881e-97af686ce7f5"

//         },

//         {

//             "scoreLevelId": "9155774b-5738-4f2c-9f93-ef2aaa6a4983",

//             "value": "۳۳۱",

//             "tenantId": "eb781974-3cb0-4c3a-881e-97af686ce7f5"

//         },

//         {

//             "scoreLevelId": "58e2f9cb-2d3a-41db-892c-63539dafc740",

//             "value": "۴۴۴۴",

//             "tenantId": "eb781974-3cb0-4c3a-881e-97af686ce7f5"

//         }

//     ],

//     "horizontalAlignments": [],

//     "tenantId": "eb781974-3cb0-4c3a-881e-97af686ce7f5",

//     "startValue": "۱",

//     "objectiveId": "714820bb-0642-4159-8ac7-7fe54d9078f1"

// }
  

 