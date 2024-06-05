import React, { useState, useEffect } from 'react';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { Grid, Box } from '@mui/material';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import AddStaff from '../../Forms/AddStaff/AddStaff';
import { useSelector } from 'react-redux';
import {CircularProgress} from '@mui/material';
import { StaffCart } from '../StaffCart/StaffCart';
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';







import { useGetAllPersonByTenantId,useGetPersonDetails,useDeletePerson } from '../../Hooks';
import EditPerson from '../../Forms/EditPerson/EditPerson';
// import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';
const InviteUser = () => {
 
  
    const userId=useSelector((state:any)=>state.loign.userInfo.userId);
    const userPhoneNumber=useSelector((state:any)=>state.loign.userPhoneNumber);
    const tenantId:string|null=useSelector((state:any)=>state.meetings.profileTenantId);
    const{data:usersData,isLoading:getAllPeronsLoading}=useGetAllPersonByTenantId(tenantId);
   const[personId,setPersonId]=useState<string|null>(null);
   const[personIdFDelete,setPersonIdFDelete]=useState<string|null>(null)
   const[showEditModal,setShowEditModal]=useState<boolean>(false);
   const[asyncOpStatus,setAsyncOpStatus]=useState<any>(null)


   const{mutate:deletePerson}=useDeletePerson()
    const [showAddStaff, setShowAddStaff] = useState<Boolean | null>(false);
    const[showToastMessage,setShowToastMessage]=useState<boolean>(false);
    const[userAsynOpcState,setUserAsyncOpState]=useState<any>(null);

    const initialAddStaff = () => {
        setShowAddStaff((prev: any) => !prev)
    }

    useEffect(() => {
      
    console.log(personId)
     
    }, [personId])

    useEffect(() => {
      
    console.log(asyncOpStatus)
    
    }, [asyncOpStatus])
    
    

    


    useEffect(() => {
        if (personIdFDelete) {
            let deleteBody={
                phoneNumber:userPhoneNumber,
                lastModifiedById:userId,
                userId:userId,
                tenantId:tenantId
        
            }
            console.log(deleteBody)
            deletePerson(deleteBody)
        }
             
            }, [personIdFDelete])



    
      
      




    
    



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
                        height={600}
                        width={700}
                        title={'ثبت پرسنل'}  >
                        <AddStaff 
                        onSuccesss={initialAddStaff} 
                        onClose={setShowAddStaff}
                        setShowToastMessage={setShowToastMessage}
                        setAddStaffState={setUserAsyncOpState}
                        />
                    </ModalLyt>

                }

              {
                showEditModal && <ModalLyt
                showModal={showEditModal}
                setShowModal={setShowEditModal}
                height={500}
                width={600}
                title={'ویرایش کاربر'}
                >
                    {/* asyncOpStatus,setAsyncOpStatus */}
                    <EditPerson
                     personId={personId}
                     onClose={setShowEditModal}
                    //  setAsyncOpStatus={setAsyncOpStatus}
                     setShowToastMessage={setShowToastMessage}
                        setAddStaffState={setUserAsyncOpState}

                    />
                </ModalLyt>


            }




            </Grid>

            <Grid item xs={12}  >
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
                    
                return <Box key={i}  >
                    <StaffCart 

                setShowEditModal={setShowEditModal} 
                setPersonId={setPersonId} 
                setPersonIdFDelete={setPersonIdFDelete}
                item={item} 
                setShowToastMessage={setShowToastMessage}
                setDeleteState={setUserAsyncOpState}
                 />
                    </Box>
                })
              }
             </Box>
         }
            </Grid>


     
      
      {
      showToastMessage && <DYToastMessage
      isSuccess={userAsynOpcState?.isSuccess}
      message={userAsynOpcState?.metaData.message}
      setShow={setShowToastMessage}
      show={showToastMessage}
      
      />
      
    }
            
        </Grid>
    )
}

export default InviteUser


//