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

  export interface AddObjectiveFace{
    objectiveDescription:string,
    periodId:string,
    teamID:string,
    levelId:string,
    responsibleId:string,
    teamsOrPersonsId:string,
    weight:string,
    TheReasonImportant:string,
    descriptions:string
  }

   export  interface pSoFace  {
    key: string;
    value: string;
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
  

 