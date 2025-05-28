import packageJson from '../../package.json'

//import logo from '@/assets/logo-horizontal-grey.png'

const version = packageJson.version

export default function DefaultLayout({
  banner,
  children,
}: {
  banner?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className='relative flex h-screen flex-col'>
      {/* <Navbar /> */}
      <main className='flex-grow'>
        {banner}
        <div className='container mx-auto max-w-screen-2xl px-6'>
          {children}
        </div>
      </main>
      <footer className='flex min-h-[250px] w-full flex-col items-center justify-center gap-2 py-3'>
        <a
          className='flex items-center gap-1 text-current'
          href='https://daisyui.com/'
        >
          <span className='text-default-600'>Powered by</span>
          <p className='text-primary'>daisyUI</p>
        </a>
        <img
          alt='logo de Kévin BERTRAND - Développeur web'
          className='max-h-[48px]'
          //src={logo}
        />
        <span className='text-default-400'>version: {version} - Mars 2025</span>
      </footer>
    </div>
  )
}
