import React,{useEffect,useState} from 'react';
import { Grid,Box,Typography,IconButton,Button } from '@mui/material';
// import { ReactComponent as Oflag } from '../../StaticData/Svgs/Oflag.svg';
// import {ReactComponent as CompanyManagmentIcon} from '../../../../components/Dashboard/StaticsData/Icons/companyManagmentIcon1.svg';
// import {ReactComponent as PersonIcon} from '../../../../components/Dashboard/StaticsData/Icons/Person1.svg';
// import { ReactComponent as comp } from '../../StaticData/Svgs/Oflag.svg';
import { useNavigate } from 'react-router-dom';
import DyLinearProgress from '../../../../components/GlobalComponents/DyLinearProgress/DyLinearProgress';
// import { useSelector } from 'react-redux';
import TKCart from '../TKCart/TKCart';
import { blue } from '@mui/material/colors';


const OCart = (props:any) => {
    const navigate=useNavigate()
    let{obj,setObjectiveId,setShowEditForm,setShowToastMessage,setObjectiveAsyncOpState}=props  || {};
    let{name,responsibleName,definitionLevelName,setShowEditModal,id,weight,evaluationPercentage,keyResults}=obj  || {};
    // const tenantId=useSelector((state:any)=>state.meetings.profileTenantId);
    const[allKeyResults,setAllKeyResults]=useState<any[]>();

    // let{keyResults}=obj || {};
    useEffect(() => {
      setAllKeyResults(keyResults)
  
    }, [keyResults])

  return (  
    
    <Grid container boxShadow={4} bgcolor={'#daf4ff'} borderRadius={4} p={2} >
        <Grid item xs={12}  >
        <Grid container >
        <Grid item xs={12}  >
        
        <Box 
        display={'flex'} 
        width={'100%'}
        alignItems={'start'}
         
        minHeight={'100px'} 
        justifyContent={'space-between'}  > 
        <Box display={'flex'}>
        {/* <Oflag fontSize={'0.9rem'}  /> */}
        <Typography px={1} variant='body1' fontWeight={1000} >
            هدف: {
                name
            }
        </Typography>
        </Box>
        </Box>
        
        </Grid>
      </Grid>
        </Grid>
      
        <Grid xs={12}  >
        <Box width={'100%'} marginLeft={1} display={'flex'} alignItems={'center'} justifyContent={'start'}>
        {/* <PersonIcon width={'15px'}  height={'15px'} /> */}
        <Typography px={1} variant='button' fontWeight={900} color={'black'} > مسئول: {
            responsibleName
            }</Typography>
        </Box>
        </Grid>
     
        <Grid item xs={12}  >
         {
          keyResults !== undefined && keyResults.length>0 &&  <Grid container  >
          <Grid item xs={12}  >
         
            <Grid container spacing={1} px={1} >
 
           {
            keyResults && keyResults.map((o:any,i:number)=>{
              return <Grid  item xs={12} sm={6}  >
                <Box width={'100%'} key={i}   >
                <TKCart kr={o}   
                item={o}
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

        {/* <Grid xs={12}  >
        <Box width={'100%'} marginLeft={1}  display={'flex'} alignItems={'center'} justifyContent={'start'}>

        <Typography px={1} variant='button' fontWeight={900} color={'black'} >
                {
                    definitionLevelName
                }
        </Typography>
        </Box>
        </Grid> */}
    
        {/* <Grid item xs={12} >
             <Box width={'100%'}   >
                <DyLinearProgress value={evaluationPercentage}  />
             </Box>
             
        </Grid> */}

        {/* <Grid xs={12}> */}
        {/* <Box  display={'flex'} alignItems={'center'} justifyContent={'space-between'} textAlign={'center'}> */}
        {/* <Box  display={'flex'} alignItems={'center'} textAlign={'center'}  justifyContent={'center'}
        bgcolor={ objectivesStateName === "فعال"?'#D5f7D4':'#bfd3f5'}   width={'90px'} height={'28px'} borderRadius={3} >
        <Typography  color={objectivesStateName === "فعال"? 'green':'#3a82fc'} fontSize={'0.8rem'}  >  {
                objectivesStateName === "فعال"?'فعال':'پیش نویس'
            }
        </Typography>

        </Box> 
     */}
{/*         
        <Box display={'flex'} alignItems={'center'} textAlign={'center'}  justifyContent={'center'} bgcolor={'#FBF0EA'}  width={'95px'} height={'28px'} borderRadius={3} >

        <Typography color={'#F95700'} fontSize={'0.8rem'}>
          {keyResultCount}  نتیجه کلیدی 
        </Typography>
        </Box>  */}

      {/* </Box> */}
      {/* </Grid> */}
    </Grid>

  )
}

export default OCart