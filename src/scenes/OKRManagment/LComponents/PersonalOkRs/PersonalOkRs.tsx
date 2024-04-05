import React,{useState,useEffect} from 'react';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import{Box,Grid} from '@mui/material';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { CreateKeyResult } from '../../Forms/CreateKeyResult/CreateKeyResult';
const PersonalOkRs = () => {
  // caption,onClick,color,disbled,variant,type,bgColor

const[showCreateKr,setShowCreateKr]=useState<Boolean|null>(false);
const initialCreateKr=():void=>{
  setShowCreateKr(prev=>!prev)
}
  return (
    <>
    <Grid container >
    <Grid item xs={12} md={2} >
    <DyButton  
    caption={'تعریف نتیجه کلیدی'}
    onClick={initialCreateKr}
    color={'red'}
    disbled={false}
    variant={'contained'}
    type={'button'}
    bgColor={'#00387C'}
    />
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

export default PersonalOkRs