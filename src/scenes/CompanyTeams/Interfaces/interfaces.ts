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
    keyResultId:string|null,
    objectiveId:string,
    // tensileScore:string,
    currentState:string,
    description:string,
    closedKeyResult:Boolean,
    
  }



  export interface SelectOptionFace{
    key:string,
    value:string
  }

  export interface ObjectiveSelectedFace  {
   name:string|null,
   id:string|null
  }

  export interface krSelectedFace{
    name:string|null,
    id:string|null,
    responsibleName:string|null,
    startDate:string|null,
    startValue:string|null,
    threeTenthsValue:string|null,
    sevenTenthsValue:string|null,
    oneValue:string|null,
    currentValue:string|null,
    problems:string|null,
    nextState:string|null,
    currentState:string|null,
    description:string|null,
    score:any,
    okR_KeyResultType:string|null
  }


  //   nextState:predict,
    // currentState:currentStateValue


 