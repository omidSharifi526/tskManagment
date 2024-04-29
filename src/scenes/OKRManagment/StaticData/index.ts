import {AddKeyResultFace,
  addStaffFace,
  addTeamFace,pSoFace,
  addMissionFace,
  addContractFace,
  addCompanyFace,
  resetPasswordFace,
  addObjectiveFace,
  
  
} from '../Interfaces/Interfaces';
import * as yup from 'yup';


const addKrValues:AddKeyResultFace={
name:'',
horizontalAlignments:[],
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
  name:yup.string().required(''),
  periodId:yup.string().required(''),
  responsibleId:yup.string().required(''),
  definitionLevelId:yup.string().required(''),

});

// name:string,
// responsibleId:string,
// pointingSystemType:string,
// keyResultType:string,
// startValue:string,

const addKeyResultSchema=yup.object().shape({
  name:yup.string().required(),
  responsibleId:yup.string().required(''),
  pointingSystemType:yup.string().required(''),
  keyResultType:yup.string().required(''),
  startValue:yup.string().required(''),

})





export   {
    addKrValues,
    addObjectiveInitialValues,
    pointSystem,
    keyResultTypeOptions,
    
    addTeamValues,
    addMissionValues,
    addContractValues,
    addCompanyValues,
    resetFormValues,
    addObjectiveSchema,
    addKeyResultSchema
    
    
}