import React,{useState,useEffect} from 'react';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import{Box,Grid} from '@mui/material';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { CreateKeyResult } from '../../Forms/CreateKeyResult/CreateKeyResult';
import { useSelector,useDispatch } from 'react-redux';
const Kr = () => {
const[showCreateKr,setShowCreateKr]=useState<Boolean|null>(false);

const initialCreateKr=():void=>{
    setShowCreateKr(prev=>!prev)
  }
  return (
    <>
    <Grid container  >
    <Grid item xs={12}  >
     <Box width={'100%'} 
     py={2} 
     px={1} 
     display={'flex'} 
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
     </Box>
    </Grid>
    {
      showCreateKr && <ModalLyt   
      showModal={showCreateKr}
      setShowModal={setShowCreateKr}
      title={'ایجاد نتیجه کلیدی'}  >
       <CreateKeyResult/>
      </ModalLyt>
    }


    </Grid>
    </>
  )
}

export default Kr