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
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, Outlet } from 'react-router-dom';
import {SideBarLogo,OKRtext} from './StaticsData/index';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Useimg from './StaticsData/SVG/3.jpg';
// import {IconButton} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GridViewIcon from '@mui/icons-material/GridView';
import { useAuth } from "../../Context/AuthProvider";


import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import Badge from '@mui/material/Badge';
import MeetingSlider from '../../scenes/Meeting/LComponents/MeetingSlider/MeetingSlider';

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
    icon: <GridViewIcon  />,
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
  const newAuth=useAuth()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  var date = new DateObject({ calendar: persian, locale: persian_fa });
    date.calendar = persian;
    date.locale = persian_fa; //جمعه 31 مرداد
    const now=date.format("dddd DD MMMM  ");


// sx={{backgroundColor:'#00387C',height:'100%'}}
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
                      <Typography color={'black'}>
                      زهراامینی پاشاکی
                      </Typography>
                      
                      </Box>
            </Box>


        </Toolbar>



      </AppBar>


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
      
       
        <List sx={{backgroundColor:'#00387C',height:'100%'}}>
          {itemsList.map((item, index) => {
            const { text, } = item;
            return(
              <ListItem color='white ' sx={{fontSize:'0.7 rem'}} component={Link} to={item.to}  key={text}>
               <ListItemIcon sx={{color:'white'}}  >{item.icon}</ListItemIcon>
              <Typography variant='body2' sx={{color:'white',fontWeight:600}} >{item.text}</Typography>
              </ListItem>


            )
          })}
             <ListItem onClick={()=>{
             newAuth.logout();
             }} color='white ' sx={{fontSize:'0.7 rem'}}    >
               {/* <ListItemIcon sx={{color:'white'}}  >{item.icon}</ListItemIcon> */}
              <Typography variant='body2' sx={{color:'white',fontWeight:600}} >خروج</Typography>
              </ListItem>

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
      {/* <Box>
        <MeetingSlider/>
        </Box> */}
        <DrawerHeader />
       
        <Outlet  />
        
      </Box>
    </Box>
  );
}

