import React, { useState,useEffect } from 'react';
// import {} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useGetAllObjectiveByPeriodId ,
    useGetAllObjectiveDefinitionLevelByTenantId
} from '../../Hooks/index';
import {Box,Grid,Typography,FormControl,InputLabel,Select,MenuItem, Button} from '@mui/material';
// import { AllOKRComponentFace } from '../../Interfaces/Interfaces';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import {CircularProgress} from '@mui/material';
import { useNavigate,useParams } from 'react-router-dom';
import TORCart from '../TORCart/TORCart';



const AllTOKRs = ({periodId,periodsData,teamId}:any) => {
  const navigate=useNavigate();
  const[allObjective,setAllObjective]=useState<any[]>();
  const[objectiveC,setObjectiveCount]=useState<any[]>();
  const[keyResultC,setKeyResultCount]=useState<any[]>();
  const[scoreC,setScore]=useState<any[]>();
  const profileTenantId=useSelector((state:any)=>state.meetings.profileTenantId);
  const{data:objetcideData,isLoading:getObjectiveLoading,isError,isFetched,refetch:getObjectivesAgain}=useGetAllObjectiveByPeriodId(periodId,teamId)
  const [showAddObjective, setShowAddObjective] = useState<boolean>(false);
  const[showToastMessage,setShowToastMessage]=useState<boolean>(false);
  const[addObjectiveStatus,setAddObjectiveStatus]=useState<any>(null);
  //const[objectiveAsynOpcState,setObjectiveAsyncOpState]=useState<any>(null);
  const[objectiveAsynOpcState,setObjectiveAsyncOpState]=useState<any>(null);
  const [objectiveId,setObjectiveId]=useState<string|null>(null)
  const[showEditObjective,setShowEditObjective]=useState<Boolean|null>(false);

let { objectives,objectiveCount,keyResultCount,score } = objetcideData || {}
  //let{objectives,objectiveCount,keyResultCount,score}=objetcideData;


  const initialAddObjective = (): void => {
    setShowAddObjective(prev => !prev)
  }

  useEffect(() => {

    setAllObjective(objectives)

  }, [objectives])

  useEffect(() => {

    setObjectiveCount(objectiveCount)

  }, [objectiveCount])

  useEffect(() => {

    setKeyResultCount(keyResultCount)

  }, [keyResultCount])

  useEffect(() => {

    setScore(score)

  }, [score])


  useEffect(() => {
      
    if (objectiveId) {
        setShowEditObjective(true)
    }
    }, [objectiveId])
    


  if (getObjectiveLoading || !allObjective || isFetched!==true) {
    return <Box display={'flex'} 
    alignItems={'center'} 
    justifyContent={'center'} 
    width={'100%'} 
    height={'500px'} 
     >
      <CircularProgress  />
     </Box>
  }


  
  return (
    <>
        <Grid display={'flex'} flexDirection={'row-reverse'} justifyContent={'space-between'} item xs={12}  >
       <Box 
        margin={4}
        borderColor={'#EAEAEA '}
        borderRadius={10}
        boxShadow={10}
          py={2}
          px={4}
         
         width={'50%'}
         height={'100%'}
         display={'flex'}
         flexDirection={'column'} alignItems={'center'} >
        تعداد هدف:  {objectiveC} </Box>
         <Box 
        margin={4}
        borderColor={'#EAEAEA '}
        borderRadius={10}
        boxShadow={10}
          py={2}
          px={4}
         
         width={'50%'}
         height={'100%'}
         display={'flex'}
         flexDirection={'column'} alignItems={'center'} >
        تعداد نتیجه کلیدی:  {keyResultC} </Box>
         <Box 
        margin={4}
        borderColor={'#EAEAEA '}
        borderRadius={10}
        boxShadow={10}
          py={2}
          px={2}
         
         width={'50%'}
         height={'100%'}
         display={'flex'}
         flexDirection={'column'} alignItems={'center'} >
        امتیاز:  {scoreC} </Box>
        </Grid>

        <Grid item xs={12}  >
         {
          allObjective.length>0 &&  <Grid container  >
          <Grid item xs={12}  >
         
            <Grid container spacing={1} px={1} >
 
           {
            allObjective && allObjective.map((o:any,i:number)=>{
              return <Grid  item xs={12} sm={12}  >
                <Box width={'100%'} key={i}   >
                <TORCart obj={o}   
                setShowToastMessage={setShowToastMessage}
                afterSuccess={getObjectivesAgain}
                setObjectiveId = {setObjectiveId}
                item={o}
                setShowEditForm={setShowEditObjective}
                setObjectiveAsyncOpState={setObjectiveAsyncOpState}
                />
              </Box>
              </Grid>
            })
          }
           </Grid> 
          </Grid>
         </Grid>
         }
        </Grid>
    </>
  )
}

export default AllTOKRs