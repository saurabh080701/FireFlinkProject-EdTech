
import { Outlet } from 'react-router-dom'
import CustomSpeedDial from '../components/MuiSpeedDial'

const Layout = () => {
  return (
    <>
    {/* <CustomSpeedDial /> */}
        <Outlet />
    </>
  )
}

export default Layout