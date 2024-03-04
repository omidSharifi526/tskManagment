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

 