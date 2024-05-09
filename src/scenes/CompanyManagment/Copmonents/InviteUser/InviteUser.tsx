import React, { useState, useEffect } from 'react';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { Grid, Box } from '@mui/material';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import AddStaff from '../../Forms/AddStaff/AddStaff';
import { useSelector } from 'react-redux';
import {CircularProgress} from '@mui/material';
import { StaffCart } from '../StaffCart/StaffCart';

import { useGetAllPersonByTenantId } from '../../Hooks';
const InviteUser = () => {
    const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
    const{data:usersData,isLoading:getAllPeronsLoading}=useGetAllPersonByTenantId(tenantId);
   
    const [showAddStaff, setShowAddStaff] = useState<Boolean | null>(false);
    const initialAddStaff = () => {
        setShowAddStaff((prev: any) => !prev)
    }

    useEffect(() => {
      
    console.log(usersData)
    }, [usersData])
    



    return (
        <Grid container   >
            <Grid item xs={12} md={12} mx={2}>
                <Box display={'flex'} flexDirection={'row-reverse'} py={1} px={2}>
                    <Box>
                        <DyButton
                            caption={' ثبت  پرسنل'}
                            onClick={initialAddStaff}
                            color={'red'}
                            disbled={false}
                            variant={'contained'}
                            type={'button'}
                            bgColor={'#00387C'}
                        />
                    </Box>
                </Box>

                {

                    showAddStaff && <ModalLyt
                        showModal={showAddStaff}
                        setShowModal={setShowAddStaff}
                        title={'ثبت پرسنل'}  >
                        <AddStaff onSuccesss={initialAddStaff} />
                    </ModalLyt>

                }
            </Grid>

            <Grid item xs={12}  >
         {/* <Box display={'flex'} justifyContent={'start'}     >
         
         </Box> */}
         {
            getAllPeronsLoading?<Box display={'flex'} 
            alignItems={'center'} 
            justifyContent={'center'} 
            width={'99%'} 
            py={15}
            boxShadow={4} borderRadius={3}
            mx={'auto'}>
              <CircularProgress  />
             </Box>

             :<Box width={'100%'} display={'flex'} flexWrap={'wrap'}  justifyContent={'start'} px={2} >
              {
                usersData && usersData?.map((item:any,i:number)=>{
                    
                return <StaffCart item={item}  />
                })
              }
             </Box>
         }
            </Grid>

            
        </Grid>
    )
}

export default InviteUser


//