import LargeLayout from '@/layouts/large'
import backgroundImage from '@/assets/Background.jpg'

export default function IndexPage() {
  return (
    <LargeLayout>
      <section
        className='h-[95vh]'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='container mx-auto flex h-full items-center justify-center'>
          coucou
        </div>
      </section>
    </LargeLayout>
  )
}
