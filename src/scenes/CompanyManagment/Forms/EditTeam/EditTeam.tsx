import React, { useState,useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import {Box,Grid,Typography,TextField} from '@mui/material';
import { useEditTeam } from '../../Hooks';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { Formik, Form } from 'formik';
import { ReactComponent as AddTeamVector } from '../../StaticData/Vectors/addTeamVector.svg';
import { useGetAllActivePersonByTenantId } from '../../Hooks';
import { useSelector } from 'react-redux';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import MultiSelect from '../../../../components/FormikControls/MultiSelect/MultiSelect';
import {useGetTeamDetail } from '../../Hooks';


//   loading={getTeamLoading}
// initialValues={teamsData}
const EditTeam = (props:any) => {
    let{loading,initialValues,isFetchedData,onClose}=props;
    const [teamId,setTeamId]=useState<string|null>(null)
    // const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
    const{data:teamDetailData,isLoading:getTeamDetailLoading,isFetched:getTeamDetailFetched}=useGetTeamDetail(props?.teamId);
    const EditTeamSuccess=()=>{
    onClose(false)
    }
    const{mutate:callEditTeam}=useEditTeam(EditTeamSuccess)
    const[editTeamsinintialValues,setEditTeamsInitialValues]=useState<any>(null);
    const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
    const userId=useSelector((state:any)=>state.loign.userInfo.userId);
    const{data:activePersonData,isLoading:getActivePersonLoading}=useGetAllActivePersonByTenantId(tenantId);
    const[personIdData,setPersonIdData]=useState([]);
    const[teamPersons,setTeamPersons]=useState<any[]>([])

    // {"name":"تحقیقات",
    // "personIds":["e76209ac-35c8-4e13-a85a-ebe0340588cd"],
    // "managerId":"e76209ac-35c8-4e13-a85a-ebe0340588cd",
    // "id":"d95a39da-8e5c-4d9e-ba66-df9fd0a61bed",
    // "tenantId":"eb781974-3cb0-4c3a-881e-97af686ce7f5",
    // "fromDate":"1403/2/19",
    // "toDate":null,
    // "lastModifiedById":"73b54dda-95cf-404e-a641-5abdce6fb8e5"}
  

    useEffect(() => {
      if (teamDetailData) {
        let{name,managerId,personQueryResultDtos,id}:any=teamDetailData;
        let initValue={
            name:name,
            managerId:managerId,
            id:id,
            tenantId:tenantId,
             fromDate:"1403/2/19",
             toDate:null,
             lastModifiedById:userId,
             PersonIds:personQueryResultDtos?.map(({id}:any)=>id)

        }

        setTeamPersons(personQueryResultDtos?.map((item:any)=>{
            // year:value,title:key
         let{id:year,name:title}=item;
         return{year,title}
        }))
    //    console.log(name,managerId)
       setEditTeamsInitialValues(initValue)
        // setEditTeamsInitialValues(initialValues)
      }
    
    
    }, [teamDetailData])

    useEffect(() => {
      
    console.log(editTeamsinintialValues)
     
    }, [editTeamsinintialValues])

    useEffect(() => {
        setPersonIdData(activePersonData?.map((item:any)=>{
          let{key,value}=item;
          return {year:value,title:key}
    
        }))
    
      }, [activePersonData]);
    
    

    

    const initialSubmitForm=(data:any)=>{

    console.log(data)
    callEditTeam(data)


    }

    if (getTeamDetailLoading) {
        return <Box py={4} textAlign={'center'}  >
            {/* <CircularProgress color='prima'   /> */}
            <CircularProgress/>
        </Box>
    }
  //   if (personDEtLoading || editPersonLoading) {
  //     return <Box py={6}   textAlign={'center'}   >
  //      <CircularProgress/>
  //     </Box>
  // }


    return (
            <Grid container>
          <Grid item xs={12}  >
            <Box width={'100%'} textAlign={'center'}   >
              <AddTeamVector style={{ height: '150px' }} />
            </Box>
          </Grid>
          <Grid item xs={12}   >
    
      {
       !getTeamDetailLoading ==true ?  <Formik 
         enableReinitialize
          initialValues={editTeamsinintialValues}
          onSubmit={(data: any) => {
            initialSubmitForm(data)
    
          }}
        >
          {
            ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
              <Form>
                <Grid container columnSpacing={1} sx={{ bgcolor: 'background.paper', mx: 'auto', borderRadius: 3 }}   >
    
                
                  <Grid item xs={4}  >
                    {/* <FormikControl
                      control='textField'
                      type='text'
                      label='نام'
                      name='name'
                      fullWidth
                      value={values?.name || ''}
                    /> */}
                   <Box sx={{padding:'8px'}}  >
                   <TextField
                    size='small'
                    fullWidth
                    label={'نام'}
                    value={values?.name || ''}
                    onChange={({target}:any)=>{
                   let{value}=target;
                   setFieldValue('name',value)
                    }}
                    />

                   </Box>
                  </Grid>
    
    
    
                  <Grid item xs={12} md={4}  >
                    <FormikControl
                      control='select'
                      options={activePersonData||[]}
                      label='مدیر'
                      name='managerId'
                      fullWidth
                      value={values?.managerId || ''}
                    />
                  </Grid>
    
                  <Grid item xs={12} md={12} >
    
                  <MultiSelect
                    initialValues={teamPersons || []}
                    options={personIdData || []}
                    isLoading={getActivePersonLoading}
                    onChangee={setFieldValue}
                    propName='personIds'
                    label={'انتخاب اعضا'}
                  />
    
                  </Grid>        
    
    
    
                  <Grid item xs={12} mt={1}  >
                    <Box px={1} columnGap={2} display={'flex'} flexDirection={'row-reverse'}  >
                      <Box >
                        <DyButton
                          caption={'ذخیره'}
                          color={'#00387C'}
                          onClick={() => { }}
                          disbled={false}
                          variant={'contained'}
                          bgColor={'#00387C'}
                          type={'submit'}
                        />
                      </Box>
    
                      <Box>
                        <DyButton
                          caption={'انصراف'}
                          disbled={false}
                          variant={'outlined'}
                          onClick={()=>{
                            onClose(false)
                          }}
                        />
                      </Box>
    
                    </Box>
                  </Grid>
    
    
                </Grid>
    
    
              </Form>
          }
    
        </Formik>:''
      }
       
    
          </Grid>
    
        </Grid>
        )
       
      
}


export default EditTeam