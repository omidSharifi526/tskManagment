import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import{Popover} from '@mui/material';
import TenantsList from './LComponents/TenantList/TenantList';
import UserTypeSelection from '../../scenes/Meeting/LComponents/UserTypeSelection/UserTypeSelection';
// import ListItemText from '@mui/material/ListItemText';

import { Link, Outlet,useLocation } from 'react-router-dom';
import {SideBarLogo,OKRtext} from './StaticsData/index';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ReactComponent as BaseInfoIcon} from './StaticsData/Icons/BaseInfoIcon.svg';
import {ReactComponent as MeetingIcon} from './StaticsData/Icons/MeetingIcon.svg';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useAuth } from "../../Context/AuthProvider";
import { useDispatch } from 'react-redux';
import{resetRValuesR} from '../../scenes/Meeting/MeetingsSlice/MeetingsSlice';
import { useSelector } from 'react-redux';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Badge from '@mui/material/Badge';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const itemsList = [
  // {
  //   text: "داشبورد",
  //   icon: <DashboardIcon  />,
  //   to: "/dashboard" 
  // },
  {
    text: "جلسات",
    icon: <MeetingIcon  />,
    to: "/dashboard/meetings" 
  }
  // ,
  // {
  //   text: "خروج",
  //   icon: <ExitToAppIcon  />,
  //   to: "/"
  // }
]


export default function MiniDrawer() {
const[showTenantItem,setShowTenantItem]=React.useState(false)
  // const [showTenantList,setShowTenantList]=React.useState(false)
  const userPhone=useSelector((state:any)=>state.loign.userPhoneNumber);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const location = useLocation();
  const { pathname} = location;
  let meetingRoute=pathname.includes('meeting')
  // console.log(pathname)

const handleListItemClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  index: number,
) => {
  setSelectedIndex(index);
};


  const [open, setOpen] = React.useState(true);

  const handleClick = (event:any) => {
    handleListItemClick(event, 0)
    setOpenItem(!openItem)
  };
  const tenantList=useSelector((state:any)=>state.loign.userInfo.userTenants);
  const tenantName=useSelector((state:any)=>state.meetings.profileName);
  const dispatch=useDispatch()
  
  const newAuth=useAuth()
  const theme = useTheme();
  const [openItem, setOpenItem] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);

  };

  const handleDrawerClose = () => {
    // console.log('run')
    setOpen(false);
    setOpenItem(false)
  };

  var date = new DateObject({ calendar: persian, locale: persian_fa });
    date.calendar = persian;
    date.locale = persian_fa; //جمعه 31 مرداد
    const now=date.format("dddd DD MMMM  ");


const initiaLogOut=()=>{
  newAuth.logout();
  // const token=localStorage.getItem('accessToken');
  localStorage.setItem('accessToken','')
  dispatch(resetRValuesR())
}

// const initialShowTenantList=()=>{
//   // console.log('ihhihihi')
// setShowTenantList(true)
// }
if (showTenantItem) {
  return <UserTypeSelection changeT={setShowTenantItem}    />
}
  return (
    <Box sx={{ display: 'flex' ,}} >
      <CssBaseline />
      <AppBar sx={{bgcolor:'white'}} position="fixed" open={open}>

        <Toolbar sx={{bgcolor:"whitesmoke",height:'100%'}}  >
         
          <IconButton
          
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              
              marginRight: 5,
              color:'black',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

            <Box sx={{width:'100%',display:'flex',justifyContent:'space-between'}}  >
            <Box p={2} >
                      <Typography fontWeight={700} color={'black'} variant="body2" noWrap component="div">
                      {now}
                      </Typography>

                      </Box>

                      <Box sx={{display:'flex'}} columnGap={2} alignItems={'center'} > 
                    
                     <IconButton>
                     <Badge overlap="circular"  variant="dot"  color="success" >
                      <NotificationsNoneIcon color="action" />
                      </Badge>
                     </IconButton>
                      <Box>
                     {/* <Avatar alt="Cindy Baker" src={Useimg} /> */}
                      </Box>
                      {/* <Typography  fontSize={'0.8rem'} fontWeight={600} pr={3}  color={'black'}>
                    {tenantName}
                      </Typography> */}
                      {/* <IconButton   onClick={initialShowTenantList}   >
                     <Typography sx={{fontSize:'15px',fontWeight:600}}>
                     {tenantName}
                     </Typography>
                      </IconButton> */}
                
                      
                      {
                       meetingRoute && <TenantsList 
                          setShowTenantItem={setShowTenantItem} 
                          tenantList={tenantList} 
                           ButtonCaption={tenantName} 
                            />
                      }

                        
                        
                      
                     
                      
                      </Box>
            </Box>


        </Toolbar>



      </AppBar>

{/*  variant="persistent" */}
      <Drawer variant="permanent" open={open} >
      
        <DrawerHeader sx={{backgroundColor:'#00387C'}}>
        <Box width={'300px'} display={'flex'} alignItems={'center'}  >
         
          <SideBarLogo width={'50px'} style={{padding:'0px 5px'}}  />
          <OKRtext/>
        </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon color='secondary' /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
      
       
        <List 
        component={'nav'} 
        // subheader={}
        sx={{backgroundColor:'#00387C',height:'100%'}}
        >
          {itemsList.map((item, index) => {
            const { text, } = item;
            return(
              <ListItem color='white ' sx={{fontSize:'0.7 rem'}} component={Link} to={item.to}  key={text}>
               <ListItemIcon sx={{color:'white'}}  >{item.icon}</ListItemIcon>
              <Typography variant='body2' sx={{color:'white',fontWeight:600}} >{item.text}</Typography>
              </ListItem>


            )
          })}


{
  userPhone==='09121223615' && <List
  sx={{ width: '100%', maxWidth: 360, }}
  component="nav"
  aria-labelledby="nested-list-subheader"
>

  
  <ListItemButton onClick={(e:any)=>{
    handleClick(e)
  }}  selected={selectedIndex === 0} sx={{color:'white',fontWeight:600}}  >
    <ListItemIcon>
    <BaseInfoIcon/>
    </ListItemIcon>
    <Typography variant='body2' pr={4}  sx={{color:'white',fontWeight:600}}   >اطلاعات پایه</Typography> 
    {openItem ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
  <Collapse in={openItem} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <ListItemButton selected={selectedIndex === 1} onClick={(event:any)=>{
          handleListItemClick(event, 1)
      }} sx={{ pl: 4,color:'white' }} component={Link} to={'/dashboard/tenants'} >
      <Typography variant='body2' pr={8}  sx={{color:'white',fontWeight:600}}>لیست تننت ها</Typography> 
      
      </ListItemButton>
    </List>
  </Collapse>




  
  
</List>
}




             <ListItem onClick={()=>{
              initiaLogOut()
            
             }} color='white ' sx={{fontSize:'0.7 rem',cursor:'pointer'}}    >
               {/* <ListItemIcon sx={{color:'white'}}  >{item.icon}</ListItemIcon> */}
              <Typography variant='body2' sx={{color:'white',fontWeight:600}} >خروج</Typography>
              </ListItem>

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
      {/* <Box>
        <MeetingSlider/>
        </Box> */}
        <DrawerHeader />
       
        <Outlet  />
        
      </Box>
    </Box>
  );
}

