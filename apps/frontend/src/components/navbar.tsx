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
  return (
    <HeroUINavbar isBordered shouldHideOnScroll maxWidth='xl' position='sticky'>
      <NavbarContent className='' justify='start'>
        <NavbarBrand className='max-w-fit gap-3'>
          <Link
            className='flex items-center justify-start gap-1'
            color='foreground'
            href='/'
          >
            <Image alt='logo de Kevin Bertrand' src={Logo} width={300} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='sm:w-1/3' justify='center'>
        <div className='ml-2 hidden justify-start gap-4 sm:flex'>
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
