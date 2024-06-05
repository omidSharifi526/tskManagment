<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import { Box, Grid } from '@mui/material';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { CreateKeyResult } from '../../Forms/CreateKeyResult/CreateKeyResult';
import AddTeam from '../../../CompanyManagment/Forms/AddTeam/AddTeam';
import AddStaff from '../../../CompanyManagment/Forms/AddStaff/AddStaff';
import AddMession from '../../Forms/AddMession/AddMession';
import AddContract from '../../Forms/AddContract/AddContract';
import AddCompany from '../../Forms/AddCompay/AddCompany';
import ResetPassword from '../../../CompanyManagment/Forms/ResetPassword/ResetPassword';
const PersonalOkRs = () => {
=======
// import React, { useState, useEffect } from 'react';
// import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
// import { Box, Grid } from '@mui/material';
// import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
// import { CreateKeyResult } from '../../Forms/CreateKeyResult/CreateKeyResult';
// import AddTeam from '../../../CompanyManagment/Forms/AddTeam/AddTeam';
// import AddStaff from '../../../CompanyManagment/Forms/AddStaff/AddStaff';
// import AddMession from '../../Forms/AddMession/AddMession';
// import AddContract from '../../Forms/AddContract/AddContract';
// import AddCompany from '../../Forms/AddCompay/AddCompany';
// import ResetPassword from '../../Forms/ResetPassword/ResetPassword';
// const PersonalOkRs = () => {
//   const [showCreateKr, setShowCreateKr] = useState<Boolean | null>(false);
//   const [showAddStaff, setShowAddStaff] = useState<Boolean | null>(false);
//   const [showAddTeam, setShowAddTeam] = useState<Boolean | null>(false);
//   const [showAddMession, setShowAddMession] = useState<Boolean | null>(false);
//   const [showAddContract, setShowAddContract] = useState<Boolean | null>(false);
//   const [showAddCompany, setshowAddCompany] = useState<Boolean | null>(false);
//   const [showResetPassword, setShowResetPassword] = useState<boolean | null>(false)
//   const initialCreateKr = (): void => {
//     setShowCreateKr(prev => !prev)
//   }
>>>>>>> 2d1341de30cc1e5fa56fd827e68a6d42b629019c

//   const initialAddStaff = () => {
//     setShowAddStaff(prev => !prev)
//   }

//   const initialAddTeam = () => {
//     setShowAddTeam(prev => !prev)
//   }

//   const initialAddMession = () => {
//     setShowAddMession(prev => !prev)
//   }

//   const initialAddContract = () => {
//     setShowAddContract(prev => !prev)
//   }

//   const initialAddNewCompany = () => {
//     setshowAddCompany(prev => !prev)
//   }

<<<<<<< HEAD
  const initialAddContract = () => {
    setShowAddContract(prev => !prev)
  }

  const initialAddNewCompany = () => {
    setshowAddCompany(prev => !prev)
  }

  const initialResetPassword = () => {
    setShowResetPassword(prev => !prev)
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
            title={'ایجاد پرسنل'}  >
            {/* <CreateKeyResult /> */}
          </ModalLyt>
        }

=======
//   const initialResetPassword = () => {
//     setShowResetPassword(prev => !prev)
//   }
//   return (
//     <>
//       <Grid container >
//         <Grid item xs={12} md={2} >
//           <DyButton
//             caption={'تعریف نتیجه کلیدی'}
//             onClick={initialCreateKr}
//             color={'red'}
//             disbled={false}
//             variant={'contained'}
//             type={'button'}
//             bgColor={'#00387C'}
//           />
//         </Grid>
//         {
//           showCreateKr && <ModalLyt
//             showModal={showCreateKr}
//             setShowModal={setShowCreateKr}
//             title={'ایجاد پرسنل'}  >
//             {/* <CreateKeyResult /> */}
//           </ModalLyt>
//         }
        
>>>>>>> 2d1341de30cc1e5fa56fd827e68a6d42b629019c

//         <Grid item xs={12} md={2} mx={2}>
//           <DyButton
//             caption={' ثبت  پرسنل'}
//             onClick={initialAddStaff}
//             color={'red'}
//             disbled={false}
//             variant={'contained'}
//             type={'button'}
//             bgColor={'#00387C'}
//           />
//           {

//             showAddStaff && <ModalLyt
//               showModal={showAddStaff}
//               setShowModal={setShowAddStaff}
//               title={'ایجاد نتیجه کلیدی'}  >
//               <AddStaff />
//             </ModalLyt>

//           }
//         </Grid>

//         <Grid item xs={12} md={2} mx={2}>
//           <DyButton
//             caption={' ثبت  تیم'}
//             onClick={initialAddTeam}
//             color={'red'}
//             disbled={false}
//             variant={'contained'}
//             type={'button'}
//             bgColor={'#00387C'}
//           />
//           {

//             showAddTeam && <ModalLyt
//               showModal={showAddTeam}
//               setShowModal={setShowAddTeam}
//               title={'ایجاد تیم'}  >
//               <AddTeam />
//             </ModalLyt>

//           }
//         </Grid>


//         <Grid item xs={12} md={2} mx={2}>
//           <DyButton
//             caption={' ثبت  ماموریات'}
//             onClick={initialAddMession}
//             color={'red'}
//             disbled={false}
//             variant={'contained'}
//             type={'button'}
//             bgColor={'#00387C'}
//           />
//           {

//             showAddMession && <ModalLyt
//               showModal={showAddMession}
//               setShowModal={setShowAddMession}
//               title={'ایجاد ماموریت'}  >
//               <AddMession />
//             </ModalLyt>

//           }
//         </Grid>

//         <Grid item xs={12} md={2} mx={2}>
//           <DyButton
//             caption={' ثبت  قرارداد'}
//             onClick={initialAddContract}
//             color={'red'}
//             disbled={false}
//             variant={'contained'}
//             type={'button'}
//             bgColor={'#00387C'}
//           />
//           {

//             showAddContract && <ModalLyt
//               width={8}
//               showModal={showAddContract}
//               setShowModal={setShowAddContract}
//               title={'ایجاد قرارداد جدید'}  >
//               <AddContract />
//             </ModalLyt>

//           }
//         </Grid>


//         <Grid item xs={12} md={2} mt={2}>
//           <DyButton
//             caption={' ثبت شرکت جدید'}
//             onClick={initialAddNewCompany}
//             color={'red'}
//             disbled={false}
//             variant={'contained'}
//             type={'button'}
//             bgColor={'#00387C'}
//           />
//           {

//             showAddCompany && <ModalLyt
//               width={8}
//               showModal={showAddCompany}
//               setShowModal={setshowAddCompany}
//               title={'ایجاد شرکت جدید'}  >
//               <AddCompany />
//             </ModalLyt>

//           }
//         </Grid>

//         <Grid item xs={12} md={2} mt={2} mx={2}>
//           <DyButton
//             caption={'تغییر رمز عبور'}
//             onClick={initialResetPassword}
//             color={'red'}
//             disbled={false}
//             variant={'contained'}
//             type={'button'}
//             bgColor={'#00387C'}
//           />
//           {

//             showResetPassword && <ModalLyt
//               width={8}
//               showModal={showResetPassword}
//               setShowModal={setShowResetPassword}
//               title={'تغییر رمز عبور'}  >
//               <ResetPassword />
//             </ModalLyt>

//           }
//         </Grid>



//       </Grid>


//     </>
//   )
// }

// export default PersonalOkRs

import React, { useState,useEffect } from 'react';
// import {} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useGetAllObjectiveByPersonId } from '../../Hooks';
import { Grid, Box, Typography, Button } from '@mui/material';
import { AllOKRComponentFace } from '../../Interfaces/Interfaces';
import { ReactComponent as ObjectiveVector } from '../../StaticData/Svgs/ObjectiveVector.svg';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import CreateObjective from '../../Forms/CreateObjective/CreateObjective';
import EditObjective from '../../Forms/EditObjective/EditObjective';
import {CircularProgress} from '@mui/material';
import { useNavigate,useParams } from 'react-router-dom';
import OCart from '../OCart/OCart';
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';




const PersonalOkRs = ({periodId,periodsData}:AllOKRComponentFace) => {
  const navigate=useNavigate();
  const[allObjective,setAllObjective]=useState<any[]>()
  const profileTenantId=useSelector((state:any)=>state.meetings.profileTenantId);
  const{data:objetcideData,isLoading:getObjectiveLoading,isError,isFetched,refetch:getObjectivesAgain}=useGetAllObjectiveByPersonId(periodId,profileTenantId)
  const [showAddObjective, setShowAddObjective] = useState<boolean>(false);
  const[showToastMessage,setShowToastMessage]=useState<boolean>(false);
  const[addObjectiveStatus,setAddObjectiveStatus]=useState<any>(null);
  //const[objectiveAsynOpcState,setObjectiveAsyncOpState]=useState<any>(null);
  const[objectiveAsynOpcState,setObjectiveAsyncOpState]=useState<any>(null);
  const [objectiveId,setObjectiveId]=useState<string|null>(null)
  const[showEditObjective,setShowEditObjective]=useState<Boolean|null>(false);


  const initialAddObjective = (): void => {
    setShowAddObjective(prev => !prev)
  }

  useEffect(() => {

    setAllObjective(objetcideData)

  }, [objetcideData])


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
      <Grid container  >
        {/* درحالت عدم وجود o */}
        <Grid item xs={12}>
        {
       allObjective?.length===0 && <Grid item xs={12}>
         <Box width={'100%'} textAlign={'center'} p={2}   >
           <Box>
             <ObjectiveVector />
           </Box>
           <Box>
             <Typography textAlign={'center'} variant='body2'   >
               هنوز هدفی در این دوره‌‌زمانی تعریف نشده است.
             </Typography>
           </Box>
           <Box mt={2} p={1} width={'15%'} mx={'auto'}  textAlign={'center'}  >
             <DyButton
               caption={'هدف جدید'}
               onClick={initialAddObjective}
               color={'red'}
               disabled={false}
               variant={'contained'}
               bgColor={'#00387C'}
             />
             {/* caption,onClick,color,disbled,variant,type,bgColor */}
           </Box>
         </Box>
       </Grid>
       }

        </Grid>



        <Grid item xs={12}  >
         {
          allObjective.length>0 &&  <Grid container  >
          <Grid item xs={12} >
     <Box display={'flex'} flexDirection={'row-reverse'} py={1} px={2}    >
     <Box>
     <DyButton
                caption={'هدف جدید'}
                onClick={initialAddObjective}
                color={'red'}
                disabled={false}
                variant={'contained'}
                bgColor={'#00387C'}
              />
     </Box>
     </Box>
          </Grid>
          <Grid item xs={12}  >
         
            <Grid container spacing={1} px={1} >
 
           {
            allObjective && allObjective.map((o:any,i:number)=>{
              return <Grid  item xs={12} sm={4}  >
                <Box width={'100%'} key={i}   >
                <OCart obj={o}   
                setShowToastMessage={setShowToastMessage}
                afterSuccess={getObjectivesAgain}
                setObjectiveId = {setObjectiveId}
                item={o}
                setShowEditForm={setShowEditObjective}
                // setAddObjectiveStatus = {setAddObjectiveStatus}
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
              

       





         {
          <ModalLyt
            showModal={showAddObjective}
            setShowModal={setShowAddObjective}
            width={700}
            height={900}
            title={'هدف جدید'}
          >
            <CreateObjective  
             periodsData={periodsData}
             onSuccess={setShowAddObjective}
             setShowToastMessage={setShowToastMessage}
             //setAddObjectiveStatus = {setAddObjectiveStatus}
             setObjectiveAsyncOpState={setObjectiveAsyncOpState}
             afterSuccess={getObjectivesAgain}
            />

          </ModalLyt>

        }
        {
          <ModalLyt
            showModal={showEditObjective}
            setShowModal={setShowEditObjective}
            width={700}
            height={900}
            title={'ویرایش هدف'}
          >
            <EditObjective  
             periodsData={periodsData}
             onSuccess={setShowEditObjective}
             setShowToastMessage={setShowToastMessage}
             setObjectiveAsyncOpState={setObjectiveAsyncOpState}
             afterSuccess={getObjectivesAgain}
             objectiveId={objectiveId}
             onClose={setShowEditObjective}
             //setEditObjectiveState={setObjectiveAsyncOpState}
            />

          </ModalLyt>

        }
        {/* {
          showEditObjective  && <ModalLyt
          showModal={showEditObjective }
          setShowModal={setShowEditObjective}
          height={500}
          width={600}
          title={'ویرایش هدف'}

          >
          {
          showEditObjective  && <EditObjective
          objectiveId={objectiveId}
          loading={getObjectiveLoading}
          onClose={setShowEditObjective}
          setShowToastMessage={setShowToastMessage}
          setEditObjectiveState={setObjectiveAsyncOpState}
          />
          }
        </ModalLyt>
        } */}
        {
            showToastMessage && <DYToastMessage
            //isSuccess={addObjectiveStatus?.isSuccess}
            //message={addObjectiveStatus?.metaData.message}
            isSuccess={objectiveAsynOpcState?.isSuccess}
            message={objectiveAsynOpcState?.metaData.message}
            setShow={setShowToastMessage}
            show={showToastMessage}
            
              />
      
          }
      </Grid>
      

    </>
  )
}

export default PersonalOkRs