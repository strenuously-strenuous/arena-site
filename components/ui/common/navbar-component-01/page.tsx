import Navbar from '@/components/shadcn-studio/blocks/navbar-component-01/navbar-component-01'

const navigationData = [
  {
    title: 'Courses',
    href: '/courses'
  },
  {
    title: 'Placements',
    href: '/placements'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contact',
    href: '/contact'
  },
  {
    title: 'Student Works',
    href: '/student-works'
  }
]

const NavbarPage = () => {
  return (
    <div className=''>
      <Navbar navigationData={navigationData} />
    </div>
  )
}

export default NavbarPage
