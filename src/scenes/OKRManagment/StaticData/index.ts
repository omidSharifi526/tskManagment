import {AddKeyResultFace,AddObjectiveFace,pSoFace} from '../Interfaces/Interfaces'










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

const addObjectiveValues:AddObjectiveFace={
    objectiveDescription:'',
    descriptions:'',
    levelId:'',
    periodId:'',
    responsibleId:'',
    teamID:'',
    teamsOrPersonsId:'',
    TheReasonImportant:'',
    weight:''
}
//   // interface pointingSystemItemFace:{
  //   tensile:'tensile',
  //   regulary:'regulary'
  // }



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



export   {
    addKrValues,
    addObjectiveValues,
    pointSystem,
    keyResultTypeOptions
    
}