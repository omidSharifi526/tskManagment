import {AddKeyResultFace,
  addStaffFace,
  addTeamFace,pSoFace,
  addMissionFace,
  addContractFace,
  addCompanyFace,
  resetPasswordFace,
  addObjectiveFace
} from '../Interfaces/Interfaces';
import * as yup from 'yup';

// import { addStaffFace } from '../Interfaces/Interfaces';









const addKrValues:AddKeyResultFace={
name:'',
horizontalAlignments:[],
onValue:'',
keyResultType:'',
forceEndDate:'',
responsibleId:'',
pointingSystemType:'Regulary',
startDate:'',
startValue:'',
weight:'',
description:'',
valuesDetailCommandDtos:[],
oKRStateId:''
}

// const addObjectiveValues:AddObjectiveFace={
//     objectiveDescription:'',
//     descriptions:'',
//     levelId:'',
//     periodId:'',
//     responsibleId:'',
//     teamID:'',
//     teamsOrPersonsId:'',
//     TheReasonImportant:'',
//     weight:''
// }

const addStaffValues:addStaffFace={
  fName:'',
  lName:'',
  phoneNumber:'',
  position:''
}


const addTeamValues:addTeamFace={
  title:'',
  manager:'',
  members:''
}
const addMissionValues:addMissionFace={
mission:'',
phoneNumber:''
}

const addContractValues:addContractFace={
  startDate:'',
  countOfSaledDay:0,
  countOfUser:0
}

const addCompanyValues:addCompanyFace={
  fName:'',
  lName:'',
  companyName:''
}

const resetFormValues:resetPasswordFace={
  currentPassword:'',
  newPassword:'',
  repeatPassword:''
}





  const pointSystem:pSoFace[]=[
    {key:'کششی',value:'Tensile'},
    {key:'منظم',value:'Regulary'}
  ]

  const keyResultTypeOptions:pSoFace[]=[
   {
    key:'عددی',
    value:'Numerical'
    }
   ,
   {
    key:'درصدی',
    value:'Percentage'
    },
    {
        key:'مرحله ایی',
        value:'Phase'
    }

  ]


  // {"name":"تست",
// "periodId":"d3fe4f1c-e2ce-470e-9e48-87ffb411a997",
// "definitionLevelId":"ab6af938-af16-4d3d-8d6f-b7079a145c4a",
// "oKRStateId":"b913a620-5078-4249-aa48-3269ded442a7",
// "responsibleId":"e76209ac-35c8-4e13-a85a-ebe0340588cd",
// "tenantId":"3f2d72cf-cdff-413c-abcd-d5459d97890c",
// "isPublic":true,"answerRequest":"تست",
// "description":"تست",
// "CalculateProgressType":"BasedOnKR",
// "createById":"73b54dda-95cf-404e-a641-5abdce6fb8e5",
// "keyResultParentIds":[],
// "TeamIds":[],
// "weight":"100"
// }

const addObjectiveInitialValues:addObjectiveFace={
  name:'',
  periodId:'',
  CalculateProgressType:'',
  // createById:'',
  definitionLevelId:'',
  description:'',
  isPublic:false,
  keyResultParentIds:[],
  oKRStateId:'',
  responsibleId:'',
  TeamIds:[],
  tenantId:'',
  weight:'',
  answerRequest:''



}

const addObjectiveSchema = yup.object().shape({
  name:yup.string().required(),
  periodId:yup.string().required(),
  responsibleId:yup.string().required(''),
  definitionLevelId:yup.string().required(''),

});


// name:string,
// periodId:string,
// definitionLevelId:string,
// oKRStateId:string,
// responsibleId:string,
// tenantId:string,
// isPublic:boolean,
// description:string,
// CalculateProgressType:string,
// // createById:string,
// keyResultParentIds:string[],
// TeamIds:string[],
// weight:string,
// answerRequest:string



export   {
    addKrValues,
    addObjectiveInitialValues,
    pointSystem,
    keyResultTypeOptions,
    addStaffValues,
    addTeamValues,
    addMissionValues,
    addContractValues,
    addCompanyValues,
    resetFormValues,
    addObjectiveSchema
    
}