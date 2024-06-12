import React, { useState,useEffect,lazy,Suspense } from 'react';
import PeriodSlider from '../../components/GlobalComponents/PeriodSlider/PeriodSlider';
import { useSelector } from 'react-redux';
import { useGetPriodById } from '../../components/Login/Hooks/Index';
import {  useGetAllObjectiveDefinitionLevelByTenantId } from './Hooks/index';
import CircularProgress from '@mui/material/CircularProgress';
import {Box,Grid,Typography,FormControl,InputLabel,Select,MenuItem, Button} from '@mui/material';
import AllTOkRs from './LComponents/ALLTOKRs/ALLTOKRs';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Index :React.FC=function(){
  const [value, setValue] = React.useState(0);
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const onSuccesss=():void=>{
  }
  
  const onFailed=():void=>{
  }

  const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
  const{data:perData,isLoading:perLoading,isError:periodError,isFetched}:any=useGetPriodById(tenantId,onSuccesss,onFailed);
  const[activeIndex,setActiveIndex]=useState<number>(0);
  const[periodId,setPeriodId]=useState<string|null>(null);
  const{data:teamsOptions,isLoading:teamOPloading}=useGetAllObjectiveDefinitionLevelByTenantId(tenantId);
  const[teamId,setTeamId]=useState<string>('')

  useEffect(() => {
  const active:any=perData?perData[activeIndex]:{};
  setPeriodId(active.id);
  }, [activeIndex]);


  useEffect(() => {
    let length=perData?.map((e:any) => e.isCurrent).indexOf(true)
    if(length!==4){
        setActiveIndex(4)
        }
    }, []);


  useEffect(() => {
    if (perData) {
        let length:number=perData.length
        if(length===4){
        setActiveIndex(0)
        }
    }
    }, [perData])


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <PeriodSlider 
    setActiveIndex={setActiveIndex}
    setPriodId={setPeriodId}
    activeIndex={perData?.findIndex((item:any)=>item.isCurrent)}
    tenantId={tenantId } 
    
    slideData={perData}
    dataLoading={perLoading}
      />
      <Grid container   >
      <Grid item xs={12} md={12}  >

<Box sx={{ width: '100%' }}>

          <Grid item xs={12} md={4}  ><Typography px={1} variant='button' fontWeight={900} color={'black'} > انتخاب تیم</Typography>
        <Box padding={'8px'} >
            <FormControl fullWidth size='small'  >
            <InputLabel id="demo-simple-select-label">تیم</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-selectd"
                // value={values?.definitionLevelId || ''}
            
                label="تیم"
                onChange={(e: any,other:any) => {
                    let{props}=other;

                    let{children:keyName,content}=props;
                    let{value}=props;
                    setTeamId(value);
                    let {target}=e
                    // let{value}=target;
                }}
            >
                { teamsOptions && teamsOptions.map((item:any) => {
                    let{key,value,isCompany}=item
                return (
                
                    <MenuItem key={key} value={value} content={isCompany} >
                    {key}
                    </MenuItem>
                );
                })}
            </Select>
            </FormControl>
        </Box>
        </Grid>
 
  <CustomTabPanel value={value} index={0}>
    <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}  >
     <AllTOkRs 
     periodId={periodId}  
     periodsData={perData}
     teamId={teamId}
     />
    </Suspense>
  </CustomTabPanel>
</Box>




    </Grid>
      </Grid>
    </>
  )
}

export default Index