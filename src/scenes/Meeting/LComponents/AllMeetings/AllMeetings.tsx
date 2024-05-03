import React,{useEffect,useState} from 'react';
import PeriodSlider from '../../../../components/GlobalComponents/PeriodSlider/PeriodSlider';
import { Grid,Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetPriodById } from '../../../../components/Login/Hooks/Index';
export const AllMeetings = () => {
    const[priodId,setPriodId]=useState<string|null>(null)
    const profileTenantId=useSelector((state:any)=>state.meetings.profileTenantId);
    const[activeIndex,setActiveIndex]=useState<number|undefined>(4);
    const{data:perData,isLoading:perLoading,isError:periodError,isFetched:getPeriodFetched,refetch:getPeriodAgain}=useGetPriodById(profileTenantId,()=>{},()=>{});
useEffect(() => {
//  console.log(activeIndex)
let length=perData?.map((e:any) => e.isCurrent).indexOf(true)
// setActiveIndex(4)
if(length!==4){
    setActiveIndex(4)

    }
}, []);


useEffect(() => {
  
// console.log(activeIndex,perData)
let currentIndex=perData?.map((e:any) => e.isCurrent).indexOf(true)
// console.log(currentIndex)
}, [perData,getPeriodFetched]);

useEffect(() => {
  
// console.log(getPeriodFetched)
if (perData) {
    let length:number=perData.length
    if(length===4){
    setActiveIndex(0)

    }

}
 
}, [perData])











  return (
<Grid container   >
<Grid item xs={12}   >
    <PeriodSlider 
    setActiveIndex={setActiveIndex}
    activeIndex={perData?.findIndex(item=>item.isCurrent)}
     slideData={perData || []}
     dataLoading={false}
     setPriodId={setPriodId}

    
    />
</Grid>
</Grid>
  )
}
