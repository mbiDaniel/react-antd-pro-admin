import React,{useState} from 'react';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import styles from './Dashboard.modules.scss';
// icons
import {HiLockClosed, HiOutlineMenuAlt3} from 'react-icons/hi';
import {IoMdMenu, IoMdCalendar,IoIosChatboxes} from  'react-icons/io';
import {MdDashboard, MdEmail} from 'react-icons/md';
import {BiTask} from 'react-icons/bi';
import {GiTicket} from 'react-icons/gi';
import {RiFile3Fill, RiBuilding2Fill} from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import { Avatar, Layout, Typography, Badge } from 'antd';
import { UserOutlined, MailFilled } from '@ant-design/icons';


const {Sider , Content, Header} = Layout;
const {Title} = Typography;

const Dashboard = () => {
    const [menuCollapse, setMenuCollapse]= useState(false)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

  return (
        <div id={styles.Headerid}>
            <Layout style={{height :'100%'}}>
                <Sider style={{color:'white',width:'2%'}}>
                    <ProSidebar collapsed={menuCollapse}>
                        <sidebarHeader>
                            <div className={styles.LogoText}>
                                <p>{menuCollapse ? "big Logo" : "Logo"}</p>
                            </div>
                            <div className={styles.CloseMenu} onClick={menuIconClick}>
                                {menuCollapse ? (
                                    <HiOutlineMenuAlt3/>
                                ) : (
                                    <IoMdMenu/>
                                )}
                            </div>
                        </sidebarHeader>
                        <SidebarContent onClick={menuIconClick}>
                            {menuCollapse ? (
                                <Menu iconeShape=' square'>
                                    <MenuItem active={true} icon={<MdDashboard/>}>  Dashboard</MenuItem>
                                    <MenuItem icon={<IoIosChatboxes/>}>  Chat</MenuItem>
                                    <MenuItem icon={<MdEmail/>}>  Email</MenuItem>
                                    <MenuItem icon={<IoMdCalendar/>}>  Calender</MenuItem>
                                    <MenuItem icon={<BiTask/>}>  Task</MenuItem>
                                    <MenuItem icon={<GiTicket/>}>  Tickets</MenuItem>
                                    <MenuItem icon={<RiFile3Fill/>}>  File Manager</MenuItem>
                                    <MenuItem icon={<RiBuilding2Fill/>}>  Companies</MenuItem>
                                    <MenuItem icon={<HiLockClosed/>}>  Authentification</MenuItem>
                                    <MenuItem icon={<AiFillSetting/>}>  Settings</MenuItem>
                                </Menu>
                            ) : (
                                <Menu iconeShape=' square'>
                                <MenuItem active={true} icon={<MdDashboard/>}></MenuItem>
                                <MenuItem icon={<IoIosChatboxes/>}></MenuItem>
                                <MenuItem icon={<MdEmail/>}></MenuItem>
                                <MenuItem icon={<IoMdCalendar/>}></MenuItem>
                                <MenuItem icon={<BiTask/>}></MenuItem>
                                <MenuItem icon={<GiTicket/>}></MenuItem>
                                <MenuItem icon={<RiFile3Fill/>}></MenuItem>
                                <MenuItem icon={<RiBuilding2Fill/>}></MenuItem>
                                <MenuItem icon={<HiLockClosed/>}></MenuItem>
                                <MenuItem icon={<AiFillSetting/>}></MenuItem>
                            </Menu>
                            )}
                        </SidebarContent>
                        <SidebarFooter> Copyright...</SidebarFooter>
                    </ProSidebar>
                </Sider>
                <Layout>
                    <Header style={{background:'white',width:'100%',padding:10, justifyContent:'space-between'}}>
                        <span style={{float:'right'}}>
                            
                            <Badge dot >
                                
                            </Badge>
                            <MailFilled style={{color:'rgb(196, 195, 195)'}}/>
                            <Avatar style={{fontSize:'2em'}} icon={<UserOutlined />} />
                        </span>
                        <Title level={5}>Title</Title>
                    </Header>
                    <Content>Content</Content>
                </Layout>
            </Layout>
             
        </div>
  )
}

export default Dashboard;