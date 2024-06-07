import React,{useState,useEffect} from 'react';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import{Box,Button,Grid, Typography} from '@mui/material';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { CreateKeyResult } from '../../Forms/CreateKeyResult/CreateKeyResult';
import { EditKeyResult } from '../../Forms/EditKeyResult/EditKeyResult';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useGetObjectiveDetails } from '../../Hooks';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import {CircularProgress} from '@mui/material';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScaleIcon from '@mui/icons-material/Scale';
import DescriptionIcon from '@mui/icons-material/Description';
import ODetailsTabs from '../ODetailsTabs/ODetailsTabs';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';
const Kr = () => {
  const navigate=useNavigate()
const[showCreateKr,setShowCreateKr]=useState<Boolean|null>(false);
const[objectiId,setObjectiId]=useState<string|null>(null);
const{data:objData,isLoading,refetch:getObjDataAgain}=useGetObjectiveDetails(objectiId);
const[objectiveDetails,setObjectiveDetails]=useState<any>(null);
const[keyResults,setKeyResults]=useState<any>([])
const location:any=useLocation();
const[showToastMessage,setShowToastMessage]=useState<boolean>(false);
const[addKrState,setAddKrState]=useState<any>(null);
const[showEditKr,setShowEditKr]=useState<boolean>(false);
const[krId,setKrId]=useState<string|null>(null)

useEffect(() => {
  
console.log(krId)
if (krId) {
  setShowEditKr(true)
}
 
}, [krId])

 


    useEffect(() => {
    if (location) {
      let{state:{objectiveId}}:any=location;
      // console.log(objectiveId);
      setObjectiId(objectiveId)
    }
    }, [])

    useEffect(() => {
      
   if (objData) {
    let{name,createByName,objectivesStateName,
      periodName,definitionLevelName,
      keyResultQueryResultDtos,calculateProgressType,
      weight,answerRequest,description,
      responsibleName
    }=objData;
      setKeyResults(keyResultQueryResultDtos)
    let objjjdata={
      name:name,
      createByName:createByName,
      objectivesStateName:objectivesStateName,
      periodName:periodName,
      definitionLevelName:definitionLevelName,
      keyResultQueryResultDtosLength:keyResultQueryResultDtos?.length,
      calculateProgressType:calculateProgressType,
      weight:weight,
      answerRequest:answerRequest,
      description:description,
      responsibleName:responsibleName

    }

    setObjectiveDetails(objjjdata)
   }
   
    }, [objData])
    
    

const initialCreateKr=():void=>{
    setShowCreateKr(prev=>!prev)
  }

  const initialGoBack=()=>{
    navigate('/dashboard/okrManagment',{replace:true,state:{objectiveId:''}})
  }
  return (
    <>
    <Grid container  >
    <Grid item xs={12}  >
     <Box width={'100%'} 
     py={2} 
     px={1} 
     display={'flex'} 
     justifyContent={'space-between'}
     flexDirection={'row-reverse'} >
     <Box>
     <DyButton  
    caption={'تعریف نتیجه کلیدی'}
    onClick={initialCreateKr}
    disbled={false}
    variant={'contained'}
    type={'button'}
    bgColor={'#00387C'}
    
    />
     </Box>
     <Box>
      <Typography fontSize={'0.9rem'} fontWeight={600}   >
        جزییات هدف و نتیجه ی کلیدی
      </Typography>
     </Box>
     <Box>
      <Button variant='text' onClick={initialGoBack} startIcon={<ArrowForwardIcon/>}   >
        برگشت
      </Button>
     </Box>
     </Box>
    </Grid>

    <Grid item xs={12}  >
     {
    isLoading && <Box py={4}  textAlign={'center'}   >
      <CircularProgress/>
    </Box>
     }

     {
      !isLoading && <Grid container >
     <Grid item xs={12} px={1} >
     <Box width={'100%'}  py={5} bgcolor={'#00387C'} borderRadius={3}  >
       <Grid container  >



        <Grid item xs={12}  sx={{position:'relative'}}  >

       <Grid container 
      bgcolor={'#f9f9f9'}
       width={'90%'} 
       sx={{position:'absolute',top:'20px',mx:'auto',transform: 'translate(-50%, -50%)',left: '50%',}} 
       display={'flex'} justifyContent={'space-between'}  
       borderRadius={2}
       boxShadow={4}
       >
       <Grid item xs={9}  >
       <Box p={1}  >
       <Typography variant='body1' fontWeight={800} >
          {
            objectiveDetails?.name
          }
        </Typography>
       </Box>
      </Grid>

     <Grid item xs={3}>
     <Box display={'flex'} p={1} >
      <Box>
        <PersonOutlineOutlined/>
      </Box>
      <Box>
       <Typography variant='body1' fontWeight={800} mb={1} >
       {
          objectiveDetails?.responsibleName
        
        }
        
       </Typography>
      </Box>
      </Box>
     </Grid>

     <Grid item xs={9}  >
     <Box px={1}>
           <Typography variant='body2' fontWeight={700} >
          {
            objectiveDetails?.objectivesStateName
          }
          </Typography>
    </Box>
     </Grid>
     <Grid item xs={3}  >
            <Box px={1} >
          <Typography variant='body2' fontWeight={700}>
            {
               objectiveDetails?.periodName
            }
          </Typography>
         </Box>
     </Grid>

     <Grid item  xs={9} >
       <Box display={'flex'} justifyContent={'start'} px={1} py={1} >
        {
          objectiveDetails?.keyResultQueryResultDtosLength<3?<Typography color={'red'} fontWeight={900} variant='caption'  >تعداد نتایج کلیدی شما کمتر از 3 است</Typography>:
          ''
        }
       </Box>
       </Grid>

       <Grid item  xs={3}>
    <Box width={'100%'} px={1} py={1} >
    <Typography variant='caption' fontWeight={900}>
      {
        objectiveDetails?.definitionLevelName
      }
    </Typography>
    </Box> 
       </Grid>


       </Grid>



        </Grid>



    



       </Grid>
     </Box>
     </Grid>

     <Grid item xs={12} mt={4}  >
     <Grid container px={1}   
      >
       <Grid item xs={3}   >
      <Box  width={'100%'}  display={'flex'} justifyContent={'start'} p={1} >
       <Box><VisibilityIcon/></Box>
       <Box>
       <Typography variant='caption'fontWeight={700} px={1} >قابلیت نمایش</Typography>
       </Box>
      </Box>
      <Box 
      width={'80%'} bgcolor={'#f9f9f9'} 
      display={'flex'} justifyContent={'start'} 
      borderRadius={3}
      p={2}
      >
        <Typography variant='caption' fontWeight={400}>قابلیت نمایش برای همه</Typography>
      </Box>
       </Grid>



       <Grid item xs={3}   >
      <Box  width={'100%'}  display={'flex'} justifyContent={'start'} p={1} >
      <Box><CalculateIcon/></Box>
       <Box>
       <Typography variant='caption'fontWeight={700} px={1}>نحوه محاسبه پیشرفت</Typography>
       </Box>
      </Box>
      <Box  width={'80%'} bgcolor={'#f9f9f9'} 
      display={'flex'} justifyContent={'start'} 
      borderRadius={3}
      p={2} >
        <Typography variant='caption' fontWeight={400}  >{objectiveDetails?.calculateProgressType}</Typography>
      </Box>
       </Grid>

       <Grid item xs={3}   >
      <Box  width={'100%'}  display={'flex'} justifyContent={'start'} p={1} >
      <Box><ScaleIcon/></Box>
       <Box>
       <Typography variant='caption'fontWeight={700} px={1}>وزن</Typography>
       </Box>
      </Box>
      <Box width={'80%'}  bgcolor={'#f9f9f9'} 
      display={'flex'} justifyContent={'start'} 
      borderRadius={3}
      p={2}  >
        <Typography variant='caption' fontWeight={400}  >{objectiveDetails?.weight}</Typography>
      </Box>
       </Grid>


       <Grid item xs={3}   >
      <Box  width={'100%'}  display={'flex'} justifyContent={'start'} p={1} >
      <Box><CrisisAlertIcon/></Box>
       <Box>
       <Typography variant='caption'fontWeight={700} px={1}>دلیل اهمیت</Typography>
       </Box>
      </Box>
      <Box width={'80%'} bgcolor={'#f9f9f9'} 
      display={'flex'} justifyContent={'start'} 
      borderRadius={3}
      p={2} >
        <Typography variant='caption' fontWeight={400}  >{objectiveDetails?.answerRequest}</Typography>
      </Box>
       </Grid>


     


     



    

       

       
      </Grid>

     </Grid>


     <Grid item xs={11}>
    <Box px={1}>
      
    <Box  width={'100%'}  display={'flex'} justifyContent={'start'} p={1} >
       <Box>
        <DescriptionIcon/>
        </Box>
       <Box>
       <Typography variant='caption'fontWeight={700} px={1}>توضیحات</Typography>
       </Box>
      </Box>

      <Box 
      width={'80%'} bgcolor={'#f9f9f9'} 
      display={'flex'} justifyContent={'start'} 
      borderRadius={3}
      p={2}
      >
        <Typography variant='caption' fontWeight={400} >{objectiveDetails?.description===''?'هنوز تعریف نشده':objectiveDetails?.description}</Typography>
       </Box>
    </Box>

     </Grid>

       
       <Grid item xs={12}  >
       <ODetailsTabs 
        krs={keyResults} 
        setKrId={setKrId}
        setShowEditKr={setShowEditKr}
        setAddKrState={setAddKrState}
        setShowToastMessage={setShowToastMessage}
       />
       </Grid>







      </Grid>
     }
    </Grid>
{/*  objectivesStateName:objectivesStateName,
      periodName:periodName */}



    {
      showCreateKr && <ModalLyt   
      showModal={showCreateKr}
      setShowModal={setShowCreateKr}
      title={'ایجاد نتیجه کلیدی'}  >
       <CreateKeyResult 
       setShowCreateKr={setShowCreateKr}
       addKrSuccess={getObjDataAgain}  
       setShowToastMessage={setShowToastMessage}
       setAddKrState={setAddKrState}
        />
      </ModalLyt>
    }

    {
      showEditKr && <ModalLyt 
      showModal={showEditKr}
      setShowModal={setShowEditKr}
      title={'ویرایش نتیجه کلیدی'}
      >
      <EditKeyResult  
      setShowEditKeyResult={setShowEditKr}
      editKrSuccess={getObjDataAgain}  
      setShowToastMessage={setShowToastMessage}
      setAddKrState={setAddKrState}
      krId={krId}
     
      />
      </ModalLyt>

    }

    {
      showToastMessage && <DYToastMessage
      isSuccess={addKrState?.isSuccess}
      message={addKrState?.metaData.message}
      setShow={setShowToastMessage}
      show={showToastMessage}
      
      />
      
      
    }


    </Grid>
    </>
  )
}

export default Kr