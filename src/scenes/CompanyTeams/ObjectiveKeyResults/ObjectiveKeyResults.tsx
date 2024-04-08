import React, { useState, useEffect, useMemo } from 'react';
import { Grid, Box, Typography, IconButton, Tooltip, Button } from '@mui/material';
import ModalLyt from '../../../components/Layouts/ModalLyt/ModalLyt';
import KrDetails from '../LComponents/KrDetails/KrDetails';
import { HistoryIcon } from '../StataicData/index';
import { useGetKeyResultMeetingHistory } from '../Hooks/index';
import KrHistoryModalContent from '../LComponents/KrHistoryModalContent/KrHistoryModalContent';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddKrEvaluation from '../LComponents/Forms/AddKrEvaluation/AddKrEvaluation';
// import { v4 as uuidv4 } from 'uuid';
import DyDataGrid from '../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import { useSelector } from 'react-redux';
import { useGetAllKeyResultByObjectiveId } from '../../Meeting/Hooks/index';
import { DataGrid, GridRowsProp, GridColDef, faIR, GridRenderCellParams } from '@mui/x-data-grid';
import { EmptyDataIcon } from '../StataicData/index';
import TeamsNavigations from '../LComponents/TeamsNavigation/TeamsNavigations';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import sad from '../../../Asset/Svgs/Emojys/sad.png';
import smil from '../../../Asset/Svgs/Emojys/smil.png';
import meh from '../../../Asset/Svgs/Emojys/meh.png';
import { changeTreeViewStateR } from '../../Meeting/MeetingsSlice/MeetingsSlice'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CartSlider from '../../../components/CartSlider/CartSlider';
import { useDispatch } from 'react-redux';
import Close from '@mui/icons-material/Close';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useNavigate } from 'react-router-dom';
import LyBackdrop from '../../../components/Layouts/BackDrop/BackDrop';
import { useGetWebObjectiveDetailsCheckinMeetingByTeamId } from '../../Meeting/Hooks/index';
const ObjectiveKeyResults: React.FC = () => {
  const treeView = useSelector((state: any) => state.meetings.treeViewState?.treeView);
  const priodId: any = useSelector((state: any) => state.meetings.priodId);
  const meetingId: any = useSelector((state: any) => state.meetings.meetingId);
  const companyNode:any=useSelector((state:any)=>state.meetings.companyList);
  const[companys,setCompanys]=useState<any|null>([]);
  const[nodeId,setNodeId]=useState<any>(companys[0]?.id);

  const objectivies = useSelector((state: any) => state.meetings.objectivie);
  const objUpdated = useSelector((state: any) => state.meetings.objUpdated);
  const teamInfo = useSelector((state: any) => state.meetings.teamInfo);
  const [teameInfo, setTeameInfo] = useState(null);
  const [teameInfoo, setTeameInfoo] = useState(teameInfo ? teameInfo : teamInfo)

  // const {data:keyRData,isLoading:KeyRDataLoading}=useGetAllKeyResultByObjectiveId(objectiveId);
  const [keyR, setKeyR] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [historyModal, setHistoryModal] = useState(false)
  const [krRowData, setKrRowData] = useState(null);
  const [showToolbarModal, setShowToolbarModal] = useState(false);
  const [showAddEvalModal, setShowAddEvalModal] = useState(false);
  const [SuccessState,setSuccessState] = useState<boolean>(false);
  const[pointingSystem,setPointingSystem]=useState<string|null>(null)
  const getObjectiveSuccess=()=>{

  }
  const getObjectiveError=()=>{

  }
  const{data,isError:getObjectiveErrorFlag,isLoading:getObjLoading,refetch:callAgain}=useGetWebObjectiveDetailsCheckinMeetingByTeamId(getObjectiveSuccess,getObjectiveError,'7aa9f801-7417--8398-bfe79f0709b5',priodId,meetingId);
  const [objectivee, setObjectivee] = useState<any>(objectivies?.length > 4 ? 'fb7cc4ea-7162-4916-9aa8-834b14308e10' : null);

  useEffect(() => {
    

// callAgain()
setTimeout(() => {
  setSuccessState(false)
}, 2000);
    // console.log(SuccessState)
  }, [SuccessState])


  useEffect(() => {
    if (companyNode) {
      let{id}=companyNode;
      console.log(companyNode)
      setNodeId(id);
      // dispatch(setTeamInfoR(companyNode))
    }
  
  }, [])

  useEffect(() => {
    
  
 console.log(pointingSystem)
  }, [pointingSystem])
  




  const [objcSelectionModel, setObjSelectionModel] = useState<string>('')
  const [krSelectionModel, setKrSelectionModel] = useState<string>('');


  const [getCustomerBody, setGetCustomerBody] = useState<any>({
    pageSize: 10,
    page: 1,
    searchTerm: "",
  });
  const [krId, setKrId] = useState(null)
  const { data: KrHistoryData, isLoading: KRHLoading, isError: KRHError, isFetched: KRHFetched } = useGetKeyResultMeetingHistory(krId, priodId, meetingId)
  // console.log(KrHistoryData)
  useEffect(() => {

    setKeyR([])
    setObjectivee({})
    console.log(objUpdated)
  }, [])



  const [counter, setCounter] = useState(1); // Initialize the counter for row index
  const dispatch = useDispatch()



  const initGetKRinfo = () => {

    setShowModal(true)

  }

  const initialGetHistoryKR = (row: any): void => {
    let { id } = row;
    console.log(id)
    //  let{id}=row;
    setKrId(id);
    setHistoryModal(true)
  }

  const initialAddEvaluation = (): void => {
    console.log('runAddEval')
    setShowAddEvalModal(!showAddEvalModal)
  }



  const objectiveColumns: any = useMemo(() =>
    [
      {
        field: "rowid",
        headerName: "ردیف",
        width: 35,

        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params: any) => params.api.getAllRowIds().indexOf(params.id) + 1
      },
      {
        field: 'name',
        align: 'left',
        headerName: 'شرح هدف',
        headerAlign: 'center',
        sortable: false,
        wrap: 'wrap',
        minWidth: 250,
        fontsize: '12px !important',
        renderCell: ({ value }: any) => {
          return <Box>


            {
              value.length > 40 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
                {value}
              </Tooltip> :
                <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
            }
          </Box>
        }
      },

      {
        field: 'responsibleName',
        headerName: 'مسئول',
        align: 'center',
        sortable: false,
        headerAlign: 'center',
        width: 150
      },

      {
        field: 'keyResultCount',
        headerName: 'تعداد  نتایج',
        align: 'center',
        sortable: false,
        headerAlign: 'center',
        width: 100
      },

      {
        field: 'objectivesStateName',
        headerName: 'وضعیت هدف',
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        width: 150,
        renderCell: ({ value }: any) => {
          return <Box m={3}

            borderRadius={2}
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'75%'}
            bgcolor={value === 'فعال' ? '#D5F7D4' : '#E5F1FF'}  >

            <Typography fontSize={'0.8rem'} px={8}  >
              {value}
            </Typography>
          </Box>
        }

      },

      {
        field: 'weight',
        headerName: 'وزن',
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        width: 80,
        //  renderCell: ({ value }:any):any => {
        //     return (

        //          <Typography textAlign={'center'}  >
        //           16
        //          </Typography>

        //     )
        //   } 

      },
      {
        field: 'evaluationPercentage',
        headerName: 'درصد ارزیابی',
        align: 'center',
        sortable: false,
        headerAlign: 'center',
        width: 120,
      }
      ,
      {
        field: 'score',
        headerName: 'امتیاز',
        align: 'center',
        sortable: false,
        headerAlign: 'center',
        width: 75,
        renderCell: (par: any) => {
          let value: number = par?.row?.score;

          //  console.log(par.row.score)
          let color = '';
          let fColor = ''
          switch (true) {
            case value > 70:
              color = '#D5F7D4';
              fColor = '#125610'
              break;
            case value < 70 && value > 30:
              color = '#FFF8D0';
              fColor = '#6B6440'
              break
            default:
              color = '#FFEEE5'
              fColor = '#993600'
              break;
          }
          return <Box m={3}
            borderRadius={2}
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'75%'}
            bgcolor={color}
          >

            <Typography px={8} color={fColor} fontSize={'0.8rem'} fontWeight={400} >
              {value}
            </Typography>
          </Box>

        }

      }
    ], []);

  const keyResultColumn: any = useMemo(() => [
    {
      field: "rowid",
      headerName: "ردیف",
      width: 35,

      sortable: false,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: any) => params.api.getAllRowIds().indexOf(params.id) + 1
    }
    ,


    {
      field: 'name',
      headerName: 'شرح نتیجه کلیدی',
      align: 'left',
      headerAlign: 'center',
      sortable: false,
      minWidth: 300,
      // fontsize:'12px',

      renderCell: ({ value }: any) => {
        return <Box>


          {
            value.length > 40 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
              {value}
            </Tooltip> :
              <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
          }
        </Box>
      }
    },
    {
      field: 'responsibleName',
      headerName: 'مسئول ',
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      minWidth: 120,
      fontsize: '14px',
    },
    {
      field: 'okrStateName',
      headerName: 'وضعیت نتیجه',
      align: 'center',
      sortable: false,

      headerAlign: 'center',
      width: 140,
      renderCell: ({ value }: any) => {
        return <Box

          borderRadius={2}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'75%'}
          bgcolor={value === 'فعال' ? '#D5F7D4' : '#E5F1FF'}  >

          <Typography   >
            {value}
          </Typography>
        </Box>
      }
    },
    {
      field: 'okR_KeyResultType',
      align: 'center',
      headerName: 'نوع',
      headerAlign: 'center',
      sortable: false,
      width: 110,
      hideable: true,
      hide: true,
      renderCell: ({ value }: any) => {


        return (
          <Typography fontSize={'12px'}  >{value}</Typography>
        )

      }


    },
    {
      field: 'pointingSystemType',
      align: 'center',
      headerName: 'سیستم امتیازدهی',
      headerAlign: 'center',
      sortable: false,
      width: 120,
      hideable: true,
      hide: true

    }
    ,
    {
      field: 'startValue',
      align: 'left',
      headerName: 'شروع',
      headerAlign: 'center',
      sortable: false,
      width: 50,
      hideable: true,
      hide: true,
      renderCell: ({ value }: any) => {
        return <Box>


          {
            value.length > 5 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
              {value}
            </Tooltip> :
              <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
          }
        </Box>
      }

    }
    ,
    {
      field: 'threeTenthsValue',
      align: 'left',
      headerName: '30%',
      headerAlign: 'center',
      sortable: false,
      width: 70,
      hideable: true,
      hide: true,
      renderCell: ({ value }: any) => {
        return <Box>


          {
            value.length > 5 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
              {value}
            </Tooltip> :
              <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
          }
        </Box>
      }

    }
    ,


    {
      field: 'sevenTenthsValue',
      align: 'left',
      headerName: '70%',
      headerAlign: 'center',
      sortable: false,
      width: 70,
      hideable: true,
      hide: true,
      renderCell: ({ value }: any) => {
        return <Box>


          {
            value.length > 5 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
              {value}
            </Tooltip> :
              <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
          }
        </Box>
      }

    },
    {
      field: 'oneValue',
      align: 'left',
      headerName: '100%',
      headerAlign: 'center',
      sortable: false,
      width: 80,
      hideable: true,
      hide: true,
      renderCell: ({ value }: any) => {
        return <Box>


          {
            value.length > 5 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
              {value}
            </Tooltip> :
              <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
          }
        </Box>
      }

    }
    ,
    {
      // name:'startDate',
      field: 'startDate',
      headerName: 'تاریخ شروع',
      align: 'center',
      sortable: false,
      headerAlign: 'center',
      width: 100,

    }
    ,
    {
      // name:'startDate',
      field: 'forceEndDate',
      headerName: 'حداکثر تاریخ انجام',
      align: 'center',
      sortable: false,
      headerAlign: 'center',
      width: 100,

    }
    ,
    {
      field: 'oldValue',
      headerName: 'مقدار قبلی',
      align: 'right',
      sortable: false,
      headerAlign: 'right',
      width: 100,
      renderCell: ({ value }: any) => {
        if (typeof value === 'string') {
          return <Box>
            {
              value.length > 10 ? <Tooltip sx={{ fontSize: '12px !important' }} title={value}>
                <Typography fontSize={'12px'}  >  {value}</Typography>
              </Tooltip> :
                <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
            }
          </Box>

        }
        else {
          return <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
        }
      }
    }
    ,
    {
      field: 'oldScore',
      headerName: 'امتیاز قبلی',
      align: 'center',
      sortable: false,
      headerAlign: 'center',
      width: 80,
      renderCell: (par: any) => {
        // console.log(par?.row?.score)
        let score: string = par?.row?.oldScore;
        // console.log(score);
        if (typeof score === 'string' && score.includes('%')) {
          let pureNum = score.slice(0, score.length - 1);
          let intVal = +pureNum;
          let color = '';
          let fColor = ''
          switch (true) {
            case intVal >= 70:
              color = '#D5F7D4';
              fColor = '#125610'
              break;
            case intVal < 70 && intVal > 30:
              color = '#FFF8D0';
              fColor = '#6B6440'
              break
            default:
              color = '#FFEEE5'
              fColor = '#993600'
              break;
          }
          return <Box m={3}
            borderRadius={2}
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'65%'}
            bgcolor={color}
            my={1}
          >

            <Typography px={8} color={fColor} fontSize={'0.8rem'} fontWeight={400} >
              {intVal}
            </Typography>
          </Box>

        }

        else {
          return <Box>
            <Typography>{score}</Typography>
          </Box>
        }





      }

    }
    ,
    {
      field: 'currentValue',
      headerName: 'مقدار جدید',
      align: 'right',
      sortable: false,
      headerAlign: 'right',
      width: 100,
      renderCell: ({ value }: any) => {
        return <Box>


          {
            value.length > 10 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
              {value}
            </Tooltip> :
              <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
          }
        </Box>
      }
    },
    {
      field: 'score',
      headerName: 'امتیاز جدید',
      align: 'center',
      sortable: false,
      headerAlign: 'center',
      width: 80,
      renderCell: (par: any) => {
        // console.log(par?.row?.score)
        let score: string = par?.row?.score;
        // console.log(score);
        if (typeof score === 'string' && score.includes('%')) {
          let pureNum = score.slice(0, score.length - 1);
          let intVal = +pureNum;
          let color = '';
          let fColor = ''
          switch (true) {
            case intVal >= 70:
              color = '#D5F7D4';
              fColor = '#125610'
              break;
            case intVal < 70 && intVal > 30:
              color = '#FFF8D0';
              fColor = '#6B6440'
              break
            default:
              color = '#FFEEE5'
              fColor = '#993600'
              break;
          }
          return <Box m={3}
            borderRadius={2}
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'65%'}
            bgcolor={color}
            my={1}
          >

            <Typography px={8} color={fColor} fontSize={'0.8rem'} fontWeight={400} >
              {intVal}
            </Typography>
          </Box>

        }

        else {
          return <Box>
            <Typography>{score}</Typography>
          </Box>
        }





      }

    }
    ,


    {
      field: 'revenue',
      headerName: 'عملکرد ',
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      minWidth: 100,
      fontsize: '14px',
      renderCell: (param: any) => {
        let revenue: string = param?.row?.revenue;
        // console.log(revenue?.length,revenue)
        let postive;
        if (revenue && revenue.length > 2 && revenue !== 'محاسبه نشده') {
          postive = revenue.includes('-');
          return <Box display={'flex'} alignItems={'center'} justifyContent={'center'} columnGap={1} >
            <Typography fontSize={'0.6rem'}  >
              {
                revenue.replace('-', '')
              }
            </Typography>

            {
              !postive ? <TrendingUpIcon color='secondary' /> : <TrendingDownIcon color='error' />
            }


          </Box>

        }
        else if (revenue && revenue.length <= 2 && revenue.includes('%')) {
          return <Box display={'flex'} alignItems={'center'} justifyContent={'center'} columnGap={1} >
            <Typography fontSize={'0.6rem'}  >
              {
                revenue
              }
            </Typography>
          </Box>
        }

        else {
          return <Typography fontSize={'0.6rem'} color={'red'}  >
            {
              revenue
            }
          </Typography>
        }

        //  let postive=revenue.includes('-');
        //  console.log(postive)

      }
      //  let score: string = par?.row?.score;
    },





    //  
    {
      field: 'currentState',
      headerName: 'وضعیت فعلی',
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      width: 122,
      renderCell: ({ value }: any) => {
        return <Box m={3}
          borderRadius={2}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'75%'}
          bgcolor={value === 'در مسیر مناسب' ? '#D5F7D4' : value === 'نیازمند توجه' ? '#FFEBEF' : '#F0F1F2'}  >

          <Typography fontSize={'10px'} px={8} color={value === 'نیازمند توجه' ? '#F95700' : value === 'خارج از مسیر مناسب' ? '#CC0030' : 'black'} >
            {value}
          </Typography>
        </Box>
      }


    }
    ,

    {
      field: 'nextState',
      headerName: 'وضعیت آتی',
      align: 'center',
      sortable: false,
      headerAlign: 'center',
      width: 90,
      renderCell: (par: any) => {

        let value: string = par?.row?.nextState;
        switch (value) {
          case 'انتظار داریم به نتیجه درست برسیم':
            return <Box sx={{ width: '100%', textAlign: 'center' }}  ><img src={smil} width={'20px'} /></Box>
            break;

          case 'با ریسک عدم دستیابی مواجه هستیم اما تمام تلاش خود را خواهیم کرد':
            return <Box sx={{ width: '100%', textAlign: 'center' }}  ><img src={meh} width={'20px'} /></Box>
            break;
          // 



          default:
            return null
            break;
        }

      }

    }
    ,

    {
      field: 'problems',
      headerName: 'موانع',
      align: 'center',
      // headerName: '100%',
      headerAlign: 'center',
      sortable: false,
      width: 80,
      hideable: true,
      hide: true,
      renderCell: ({ value }: any) => {
        if (typeof value === 'string') {
          let length = value.length;
          return <Box>
            {
              value.length > 6 ? <><Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
                <Typography textAlign={'left'} sx={{ fontSize: '12px' }}  >{value.slice(0, 3)}{length > 6 ? '...' : ''}</Typography>
              </Tooltip></> :
                <Typography textAlign={'left'} sx={{ fontSize: '12px' }} >{value}</Typography>
            }
          </Box>
        }
        else {
          return value
        }
      }

    }
    ,

    {
      field: 'base_Comments',
      headerName: 'توضیحات',
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      minWidth: 100,
      fontsize: '14px',
    },
    // ,
    // {
    //   field: '-',
    //   headerName: 'اطلاعات',
    //   align: 'center',
    //   headerAlign: 'center',
    //   sortable: false,
    //   width: 70,
    //   renderCell: () => {
    //     return <Box   >
    //       <IconButton onClick={initGetKRinfo}  >
    //         <InfoIcon />
    //       </IconButton>
    //     </Box>
    //   }
    // },
    // {
    //   field: '--',
    //   headerName: 'تاریخچه',
    //   align: 'center',
    //   headerAlign: 'center',
    //   sortable: false,
    //   width: 70,
    //   renderCell: (param: any) => {

    //     let { row } = param;
    //     // console.log(param)
    //     return <Box   >
    //       <IconButton onClick={() => {
    //         //  console.log(row)
    //         //  console.log(hi)
    //         initialGetHistoryKR(row)
    //       }}  >
    //         <HistoryIcon />
    //       </IconButton>
    //     </Box>
    //   }
    // },
    // {
    //   field: '---',
    //   headerName: 'ارزیابی',
    //   align: 'center',
    //   headerAlign: 'center',
    //   sortable: false,
    //   width: 70,
    //   renderCell: (param: any) => {

    //     let { row } = param;
    //     // console.log(param)
    //     return <Box   >
    //       <IconButton onClick={() => {
    //         let{id}=row;
    //         setKresultId(id)
    //         console.log(id)
    //         //  console.log(row)
    //         //  console.log(hi)
    //       initialAddEvaluation()
    //       }}  >
    //       <EditNoteOutlinedIcon/>
    //       </IconButton>
    //     </Box>
    //   }
    // }


  ], []);

  let KRinitialState = {
    columns: {
      columnVisibilityModel: {
        rowid: false,
        okrStateName: false,
        okR_KeyResultType: false,
        pointingSystemType: false,
        forceEndDate: false,
        startDate: false,
        threeTenthsValue: false,
        oneValue: false
      }
    }
  }
  // ObjInitial
  let ObjctivieInitialState = {
    columns: {
      columnVisibilityModel: {
        weight: false,
      }
    }
  }



  // وضعیت آتی

  useEffect(() => {

    console.log(objectivee)
    setKeysResultsList()
  }, [objectivee])

  const setKeysResultsList = (): any => {
    let keyrs = objectivee?.keyResultCheckingMeetingQueryResultDto
    setKeyR(keyrs)
  }


  const renderContents = () => {

    if (!keyR) {
      return <Box
        width={'50%'}

        mx={'auto'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'} >

        <EmptyDataIcon style={{ width: '80px', height: '80px' }} />

        <Typography mt={2} color={'blue'} textAlign={'center'}  >
          برای نمایش نتایج کلیدی از جدول بالا یک هدف را انتخاب نمایید.
        </Typography>
      </Box>
    }
    else {
      return <Grid item xs={12} >

        <Grid container  >
          <Grid item xs={6} >
            <Box py={1} px={3}  >
              <Typography fontSize={'14px'} fontWeight={500} >
                هدف : {objectivee?.name}
              </Typography>
            </Box>
          </Grid>


          <Grid item xs={6}  >
            <Box py={1} >
              <Typography fontSize={'14px'} fontWeight={500}  >
                مسئول هدف :  {objectivee?.responsibleName}
              </Typography>
            </Box>

          </Grid>
        </Grid>
        <Grid item xs={12}  >
          <DyDataGrid
            data={keyR || []}
            columns={keyResultColumn}
            initialOnRowClick={setKrRowData}
            hideFooter={true}
            setSelectionModel={setKrSelectionModel}
            selectionModel={krSelectionModel}
            initState={KRinitialState}
            additionalToolbar={true}
            setShowHistory={setHistoryModal}
            setSpecialId={setKrId}
            setShowInformation={setShowModal}
            setShowAddEvalModal={setShowAddEvalModal}
            initialMount={true}
            setPointSys={setPointingSystem}
            // setKresultId={}
          />
        </Grid>

      </Grid>


    }



  }
  // CartSlider
  return (
    <>
      <Grid container sx={{ bgcolor: '#F9F9F9' }} style={{ width: '100%' }} >

        <Grid item xs={treeView ? 12 : 10}>
          <Box py={1} my={2} borderRadius={2} boxShadow={2} bgcolor={'white'} >
            <Grid container >
              <Grid item xs={12} md={3}  >

                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                  <Typography variant='button' px={1}>{teamInfo.isCompany ? 'نام شرکت' : 'نام تیم'}</Typography>
                  <Typography fontWeight={600} fontSize={'14px'}  >{teamInfo?.name}</Typography>

                </Box>
              </Grid>
              <Grid item xs={12} md={3}  >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                  <Typography variant='button' px={1}>{teamInfo.isCompany ? 'مدیر شرکت' : 'مدیر تیم'}</Typography>
                  <Typography fontWeight={600} fontSize={'14px'}  >{teamInfo?.managerCompanyName}</Typography>

                </Box>
              </Grid>

              <Grid item xs={12} md={3}  >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                  <Typography variant='button' px={1}>{`تعداد اهداف ${teamInfo.isCompany ? 'شرکت' : 'تیم'}`}</Typography>
                  <Typography fontWeight={600} fontSize={'14px'}  >{teamInfo?.objectivesCount}</Typography>

                </Box>
              </Grid>

              <Grid item xs={12} md={3}  >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                  <Typography variant='button' px={1}>{`تعداد نتایج ${teamInfo.isCompany ? 'شرکت' : 'تیم'}`}</Typography>
                  <Typography fontWeight={600} fontSize={'14px'}   >{teamInfo?.keyResultsCount}</Typography>

                </Box>
              </Grid>


            </Grid>
          </Box>
        </Grid>


        {
          !treeView && <Grid mx={'auto'} item xs={12} sm={1.70} display={'flex'} alignItems={'center'}   >
            < Grid container borderRadius={2} boxShadow={1}   >
              {/* <Grid item xs={10}  >
                <Box py={1} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
                  <Typography fontSize={'10px'}  >برای پیمایش تیم ها ورق بزنید</Typography>
                </Box>
              </Grid> */}
              <Grid item xs={9} my={'auto'}   >
                <TeamsNavigations />
              </Grid>
              <Grid item xs={3} py={1}  >
                <IconButton size='small'  onClick={() => {
                  dispatch(changeTreeViewStateR())
                }} >
                  <AccountTreeIcon />
                </IconButton>
              </Grid>

            </Grid>
          </Grid>
        }





        <Box width={'100%'} borderRadius={2} boxShadow={2} bgcolor={'white'}>
          <Grid item xs={12}  >

            <Typography px={3} py={1} textAlign={'left'} fontSize={'16px'} color={'blue'}  >
              لیست اهداف
            </Typography>
            <DyDataGrid
              initialOnRowClick={setObjectivee}
              data={objectivies}
              columns={objectiveColumns}
              hideFooter={true}
              //  objcSelectionModel,setObjSelectionModel
              setSelectionModel={setObjSelectionModel}
              selectionModel={objcSelectionModel}
              initState={ObjctivieInitialState}
              initialMount={false}
              additionalToolbar={false}

            />


          </Grid>
        </Box>

        <Box
          // bgcolor={'red'} 
          mt={2}
          width={'100%'}
          borderRadius={3}
          boxShadow={2}
          bgcolor={'white'}
        // rowGap={1} 
        >

          <Grid item xs={12}  >
            <Typography px={3}
              fontSize={'16px'}
              py={1}
              textAlign={'left'}
              variant='h6'
              color={'blue'}  >
              لیست نتایج کلیدی
            </Typography>
          </Grid>


          <Grid item xs={12} py={1}    >

            <Grid container  >
              {
                renderContents()
              }
            </Grid>

          </Grid>






        </Box>
        {
          showModal && krRowData &&
          <ModalLyt title={'اطلاعات نتیجه کلیدی'}
            showModal={Boolean(showModal)}
            setShowModal={setShowModal}

          >
            <KrDetails
              // krDetail={krRowData}
              data={krRowData}
            />
          </ModalLyt>

        }

        {
          historyModal && <ModalLyt
            //  loadingFlag={KRHLoading}
            title={'تاریخچه نتیجه کلیدی'}
            showModal={Boolean(historyModal)}
            setShowModal={setHistoryModal}
          >
            <KrHistoryModalContent
              loadingFlag={KRHLoading}
              data={KrHistoryData}
              krDetail={krRowData}
              objective={objectivee}
            />

          </ModalLyt>
        }

        {
          showAddEvalModal && <ModalLyt
            title={'تعیین مقدار برای نتیجه کلیدی'}
            showModal={Boolean(showAddEvalModal)}
            setShowModal={setShowAddEvalModal}


          >
            <AddKrEvaluation
              cancelo={setShowAddEvalModal}
              objectiveId={objectivee?.id}
              kresultId={krId}
              onsucces={setSuccessState}
              pointingSystem={pointingSystem}
            />


          </ModalLyt>
        }

        {
          showToolbarModal && <ModalLyt
            title={'نتیجه کلی'}
            showModal={Boolean(showToolbarModal)}
            setShowModal={setShowToolbarModal}
          >
            {/* <h1>ModaLOfDatagRid</h1> */}
          </ModalLyt>
        }

        {
          SuccessState && <LyBackdrop visible={SuccessState} >
            <h1>loading</h1>
            </LyBackdrop>
        }






      </Grid>
    </>
  )
}

export default ObjectiveKeyResults