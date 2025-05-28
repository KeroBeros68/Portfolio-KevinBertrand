import packageJson from '../../package.json'

import logo from '../assets/footerGreyLogo.svg'

const version = packageJson.version

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative flex h-screen flex-col'>
      {/* <Navbar /> */}
      <main className='flex-grow'>
        <div className='container mx-auto max-w-screen-2xl px-6'>
          {children}
        </div>
      </main>
      <footer className='bg-neutral flex min-h-[20%] w-full flex-col items-center justify-center border-t-2 border-emerald-950 pb-7 text-amber-50'>
        <img
          alt='logo de Kévin BERTRAND - Développeur web'
          className='max-h-[10rem]'
          src={logo}
        />
        <a
          className='flex items-center gap-1 text-current'
          href='https://daisyui.com/'
        >
          <span className='text-default-600'>Powered by</span>
          <p className='text-primary'>daisyUI</p>
        </a>
        <span>version: {version} - Mars 2025</span>
      </footer>
    </div>
  )
}
