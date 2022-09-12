import React,{useState} from 'react';
import BreadCrumb from '@components/Breadcrumb/BreadCrumb';
// import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
// import styles from './Dashboard.module.scss';
// icons
import {HiLockClosed} from 'react-icons/hi';
import {IoMdCalendar,IoIosChatboxes} from  'react-icons/io';
import {MdDashboard, MdEmail} from 'react-icons/md';
import {BiTask} from 'react-icons/bi';
import {GiTicket} from 'react-icons/gi';
import {RiFile3Fill, RiBuilding2Fill} from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import {BsBellFill} from 'react-icons/bs';
import { Avatar, Layout, Typography, Badge, Menu} from 'antd';
import {MailFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Tickets from '@pages/Tickets';


const {Sider , Content, Header} = Layout;
const {Title} = Typography;

function getItem(label, key, icon, children, type){
    return {
        key, icon, children, label, type,
    };
}


const items = [
    getItem(<Link to="/">Dashboard</Link>, '1' , <MdDashboard/>),
    getItem(<Link to="/">Chat</Link>, '2' , <IoIosChatboxes/>,[
      getItem('Option 5', '5',null, [
          getItem('Option 1', 'sub1'),
          getItem('Option 2', 'sub2'),
        ]),
      getItem('Option 6', '6'),
    ]),
    getItem(<Link to="/">Email</Link>, '3' , <MdEmail/>,[
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
    getItem(<Link to="/">Calendar</Link>, '4' , <IoMdCalendar/>,[
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
    getItem(<Link to="/">Task</Link>, '5' , <BiTask/>,[
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
    getItem(<Link to="/">Tickets</Link>, '6' , <GiTicket/>,[
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
    getItem(<Link to="/">File</Link>, '7' , <RiFile3Fill/>,[
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
    getItem(<Link to="/">Companies</Link>, '8' , <RiBuilding2Fill/>,[
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
    getItem(<Link to="/">Authentification</Link>, '9' , <HiLockClosed/>,[
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
    getItem(<Link to="/">Settings</Link>, '10' , <AiFillSetting/>,[
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
]




const Dashboard = () => {
    const [menuCollapse, setMenuCollapse]= useState(false)


  return (
            <Layout style={{minHeight :'100vh'}}>
                <Sider collapsible collapsed={menuCollapse} onCollapse={(value) => setMenuCollapse(value)} style={{color:'white'}}>
                    <div style={{height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.3)'}}/> 
                    <Menu
                    theme='dark'
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        inlineCollapsed={menuCollapse}
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Header style={{background:'white',width:'100%',padding:'0 20px', height:'auto'}}>
                        <div style={{display:'flex',alignContent:'center', justifyContent:'space-between',}}>
                        <div style={{display:'flex',alignItems:'center',}}><Title level={5}>Title</Title></div>
                                <div style={{display:'flex',alignItems:'center',}}>
                                    <div style={{display:'flex', alignItems:'center', marginRight:'20px'}}>
                                        <Badge dot >
                                            <BsBellFill style={{color:'rgb(196, 195, 195)'}}/>
                                        </Badge>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginRight:'20px'}}> <MailFilled style={{color:'rgb(196, 195, 195)'}}/></div>
                                    <div style={{display:'flex', alignItems:'center', marginRight:'20px'}}><Avatar src="https://joeschmoe.io/api/v1/random" />Kevin Harry</div>
                                </div>
                        </div>
                        <hr style={{color:'rgb(233, 233, 233)', border:0, borderTop:'1px solid #CCC'}}/>
                        <div style={{display:'flex',alignItems:'center', }} >
                         <BreadCrumb style={{padding:10, margin: 10}}/>
                        </div>
                    </Header>
                    <Content>
                      <Layout><Tickets/></Layout>
                    </Content>
                </Layout>
            </Layout>
             

  )
}

export default Dashboard;