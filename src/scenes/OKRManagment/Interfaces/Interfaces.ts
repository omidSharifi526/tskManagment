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
    // onValue:string,
    weight:string|null,
    horizontalAlignments:any[],
    forceEndDate:string|null,
    startDate:string|null,
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
  // oKRStateId:string,
  responsibleId:string,
  tenantId:string,
  isPublic:boolean,
  description:string,
  // calculateProgressType:string,
  keyResultParentIds:string[],
  allIds:string[],
  answerRequest:string

}








  

 