import Navbar from '@/components/shadcn-studio/blocks/navbar-component-01/navbar-component-01'
import { navigationData } from '@/data/navigationData'


const NavbarPage = () => {
  return (
    <div className=''>
      <Navbar navigationData={navigationData} />
    </div>
  )
}

export default NavbarPage
