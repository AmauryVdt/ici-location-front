import Link from 'next/link'
import './globals.css'
import Image from 'next/image';


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  
  return (
    <>
      <header className='bg-white border-orange border-2'>
        <nav className='flex flex-row px-3 py-3 space-x-3 border-purple border-2'>
          <div className='basis-1/6 border-orange border-2'>
            {/* Logo and Brand Name */}
            <Link href='/' className='flex flex-row items-center'>
              <Image src='/favicon.ico' alt='ICI-LOCATION' width={40} height={40} />
              ICI Location
            </Link>
          </div>
          <div className='basis-1/2 flex flex-row shadow rounded-full ring-1 ring-gray-light py-2 items-center'>
            <div className='basis-3/12 border-r-gray-light border-e-2 text-center'>
              Quel endroit ?
            </div>
            <div className='basis-3/12 border-r-gray-light border-e-2 text-center'>
              Type de bien ?
            </div>
            <div className='basis-6/12 flex flex-row'>
              <div className='basis-4/5 text-center text-opacity-70'>
                Budget ?
              </div>
              <div className='basis-1/5'>

              </div>
            </div>
          </div>
          <div className='basis-1/6 flex items-center justify-center'>
            <Link href='#'>
              Ajouter mon logement
            </Link>
          </div>
          <div className='basis-1/6 border-orange border-2'>
            <div className='flex flex-row justify-evenly'>
              <Link href='/'>
                <Image src='/favicon.ico' alt='Langue' width={40} height={40} />
              </Link>
              <Link href='#'>
                <Image src='/favicon.ico' alt='Profile' width={40} height={40} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main>{children}</main>
    </>
  )
}