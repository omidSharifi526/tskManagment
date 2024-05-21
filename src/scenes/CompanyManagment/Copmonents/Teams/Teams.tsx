import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import AddTeam from '../../Forms/AddTeam/AddTeam';
import { useGetAllTeams } from '../../Hooks';
import { useSelector } from 'react-redux';
import {CircularProgress} from '@mui/material';
import TeamCart from '../TeamCart/TeamCart';
import {useGetTeamDetail } from '../../Hooks';
import EditTeam from '../../Forms/EditTeam/EditTeam'

// import { useGetAllTeams } from '../../Hooks';



const Teams = () => {
    const userId=useSelector((state:any)=>state.loign.userInfo.userId);
    const tenantId=useSelector((state:any)=>state.meetings.profileTenantId);
    const [teamId,setTeamId]=useState<string|null>(null)
    // const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
    const{data:teamDetailData,isLoading:getTeamDetailLoading,isFetched:getTeamDetailFetched}=useGetTeamDetail(teamId)
    const [showAddTeam, setShowAddTeam] = useState<Boolean | null>(false);
    const[showEditTeam,setShowEditTeam]=useState<Boolean|null>(false);
    const{data:teamsData,isLoading:getTeamLoading,isSuccess,isFetched}=useGetAllTeams(tenantId);
    const initialAddTeam = () => {
        setShowAddTeam(prev => !prev)
    }

    // useEffect(() => {
    // }, [teamsData])
    useEffect(() => {
      
    // console.log(teamId)
    if (teamId) {
        setShowEditTeam(true)
    }
   
    }, [teamId])
    


    


    if (getTeamLoading) {
        return <Box display={'flex'} 
        alignItems={'center'} 
        justifyContent={'center'} 
        width={'99%'} 
        py={20}
        mx={'auto'}
        boxShadow={4} borderRadius={3}>
          <CircularProgress  />
         </Box>
      }
    



    return (
        <>
            <Grid container  >
                <Grid item xs={12} md={12} mx={2}>
                    <Box display={'flex'} flexDirection={'row-reverse'} py={1} px={2}  >
                        <Box>
                            <DyButton
                                caption={' افزودن  تیم'}
                                onClick={initialAddTeam}
                                color={'red'}
                                disbled={false}
                                variant={'contained'}
                                type={'button'}
                                bgColor={'#00387C'}
                            />
                        </Box>
                        {

                            showAddTeam && <ModalLyt
                                showModal={showAddTeam}
                                setShowModal={setShowAddTeam}
                                title={'ایجاد تیم'}  >
                                <AddTeam />
                            </ModalLyt>

                        }

                        {
                            showEditTeam  && <ModalLyt
                            showModal={showEditTeam }
                            setShowModal={setShowEditTeam}
                            title={'ویرایش تیم'}
                            
                            >
                        {
                            getTeamDetailFetched && <EditTeam 
                            teamId={teamId}
                            loading={getTeamLoading}
                            initialValues={teamDetailData}
                            isFetchedData={getTeamDetailFetched}
                            />
                        }
                

                            </ModalLyt>
                        }
                    </Box>
                </Grid>

                <Grid item xs={12}  >
                <Box  width={'100%'} display={'flex'} 
                justifyContent={'start'} 
                flexWrap={'wrap'}
                px={2}
                  >
                 {
                    isFetched && teamsData?.map((item:any,i:number)=>{
                      
                  return <TeamCart 
                  key={i}
                  setTeamId={setTeamId} 
                  item={item}  
                  setShowEditForm={setShowEditTeam}
                  />
                    })
                 }
                </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Teams