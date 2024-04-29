import React, { useState, useEffect, useRef, useCallback } from 'react';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Box, Grid, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounterR, resetCounterR, setTeamInfoR, decreaseCounterR } from '../../../Meeting/MeetingsSlice/MeetingsSlice'
import { useGetWebObjectiveDetailsCheckinMeetingByTeamId } from '../../../Meeting/Hooks';
import LyBackdrop from '../../../../components/Layouts/BackDrop/BackDrop';
import { CircularProgress } from '@mui/material';
const TeamsNavigations = ({ setTeameInfo }: any) => {
  const counter = useSelector((state: any) => state.meetings.counter);
  const teaminfo = useSelector((state: any) => state.meetings.companyList);
  const dispatch = useDispatch();
  // console.log(teaminfo)
  const [itemInfo, setItemInfo] = useState(null);

  const getObjectiveSuccess = () => {
    if (teaminfo) {
      dispatch(setTeamInfoR(itemInfo))
    }
  }
  const getObjectiveError = () => {

  }

  const [allIteams, setAllIteams] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [nodeId, setNodeId] = useState<any>(null)
  const companyNode: any = useSelector((state: any) => state.meetings.companyList);
  const teamList: any = useSelector((state: any) => state.meetings.teamList);
  const priodId: any = useSelector((state: any) => state.meetings.priodId);
  const meetingId: any = useSelector((state: any) => state.meetings.meetingId);
  const { data, isError: getObjectiveErrorFlag, isLoading: getObjLoading, isSuccess: isSu } = useGetWebObjectiveDetailsCheckinMeetingByTeamId(getObjectiveSuccess, getObjectiveError, nodeId, priodId, meetingId);


  useEffect(() => {

    if (teamList) {
      let ids = teamList;
      // console.log(ids);
      let total = [...ids, { ...teaminfo }];
      // console.log(total)
      setAllIteams(total)
    }


  }, []);

  useEffect(() => {

    // console.log(getObjectiveErrorFlag)
  }, [getObjectiveErrorFlag])

  // console.log(teamList)







  useEffect(() => {

    if (teamList && counter >= teamList.length + 1) {
      dispatch(resetCounterR())
    }

  }, [])



  // let ids = ["062e867a-50da-4f4e-b9d6-e7d8335f0b91", "15b24358-0791-4850-bf56-e5ab28e0c232", "2fc7fcf9-92d7-452b-9cee-7633abb27c83", "fd81b5b8-8fd2-4112-bf0c-858edb15141a"]

  const handleNext = () => {

    if (counter < allIteams.length) {
      dispatch(increaseCounterR())
      let item = allIteams[counter];
      console.log(item)
      let id = allIteams[counter].id;
      setNodeId(id)
      setItemInfo(item)


    }

  };


  // useEffect(() => {

  // const currentId = teamList[currentIndex]?.id;
  // console.log(currentId)
  // // setNodeId(currentId)

  // }, [])




  const initialPrevious = (): void => {
    if (counter > 0) {
      dispatch(decreaseCounterR())
      let item = allIteams[counter];
      console.log(item)
      let id = allIteams[counter].id;
      setNodeId(id)
      setItemInfo(item)


    }

  }

  // useEffect(() => {

  // console.log(currentIndex)

  // }, [currentIndex]);


  //   if (getObjLoading) {
  // return
  // }




  return (
    <Box columnGap={3}  >
      {
        getObjLoading && <LyBackdrop visible={true}  >
          <CircularProgress sx={{ color: 'white' }} />
        </LyBackdrop>
      }
      <IconButton onClick={handleNext} size='small'   >
        <SkipNextIcon />
      </IconButton>
      <IconButton onClick={initialPrevious} size='small'    >
        <SkipPreviousIcon />
      </IconButton>
    </Box>
  )
}

export default TeamsNavigations