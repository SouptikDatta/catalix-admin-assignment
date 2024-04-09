import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const { Item } = Menu;

const MenuList = ({ collapsed }) => {
  return (
    <Menu theme='dark' mode='vertical' className='menu-bar' 
      style={{ backgroundColor: '#2F667F', fontSize:'18px', width: collapsed ? '80px' : '80%', 
      marginLeft: collapsed ? '0' : '1rem', display:'flex', flexDirection: 'column', alignItems: 'center', gap:'2px'
    }}>

      <Item key="settings" icon={<IoSettingsOutline size={20}/>}>
        <Link to="/settings">Settings</Link>
      </Item>
      <Item key="logout" icon={<HiOutlineLogout size={20} />}>
        <Link to="/login">Logout</Link>
      </Item>
    </Menu>
  );
}

export default MenuList;
