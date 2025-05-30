import { useLocation } from 'react-router-dom'
import { Link } from '@heroui/link'
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from '@heroui/navbar'
import { link as linkStyles } from '@heroui/theme'
import { Image } from '@heroui/image'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import { TwitterIcon, GithubIcon } from '@/components/icons'
import Logo from '@/assets/logo/LogoKevin.svg'

export const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <HeroUINavbar
      isBordered
      shouldHideOnScroll
      classNames={{
        item: [
          'flex',
          'relative',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[3px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-cyan-600',
        ],
      }}
      maxWidth='xl'
      position='sticky'
    >
      <NavbarBrand className='max-w-fit gap-3'>
        <Link
          className='flex items-center justify-start gap-1'
          color='foreground'
          href='/'
        >
          <Image alt='logo de Kevin Bertrand' src={Logo} width={200} />
        </Link>
      </NavbarBrand>
      <NavbarContent className='sm:w-1/3' justify='center'>
        <div className='ml-2 hidden h-full justify-start gap-4 sm:flex'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} data-active={pathname === item.href}>
              <Link className='text-xl' color='foreground' href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className='hidden w-1/3 sm:flex' justify='end'>
        <NavbarItem className='hidden gap-2 sm:flex'>
          <Link isExternal href={siteConfig.links.twitter} title='Twitter'>
            <TwitterIcon className='text-default-500' />
          </Link>
          <Link isExternal href={siteConfig.links.github} title='GitHub'>
            <GithubIcon className='text-default-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='basis-1 pl-4 sm:hidden' justify='end'>
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className='text-default-500' />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium',
                )}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
