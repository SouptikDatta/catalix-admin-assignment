import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { GrHomeRounded } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import { MdInsertChartOutlined } from "react-icons/md";
import { RxRocket } from "react-icons/rx";
import { SiEbox } from "react-icons/si";

const { Item } = Menu;

const MenuList = ({ collapsed }) => {
  return (
    <Menu theme='dark' mode='vertical' className='menu-bar' 
      style={{ backgroundColor: '#2F667F', fontSize:'18px', width: collapsed ? '80px' : '80%', 
      marginLeft: collapsed ? '0' : '1rem', display:'flex', flexDirection: 'column', alignItems: 'center', gap:'2px'
    }}>
      <Item key="home" icon={<GrHomeRounded size={18}/>}>
        <Link to="/">Home</Link>
      </Item>
      <Item key="activities" icon={<LuTimer size={20}/>}>
        <Link to="/activities">Activities</Link>
      </Item>
      <Item key="analytics" icon={<MdInsertChartOutlined size={20}/>}>
        <Link to="/analytics">Analytics</Link>
      </Item>
      <Item key="transformation" icon={<RxRocket size={20} />}>
        <Link to="/transformation">Transformation</Link>
      </Item>
      <Item key="library" icon={<SiEbox size={20} />}>
        <Link to="/library">Library</Link>
      </Item>
    </Menu>
  );
}

export default MenuList;
