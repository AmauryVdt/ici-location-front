import { Metadata } from 'next'
import Image from 'next/image';
import { Suspense } from 'react'
import Card from '@/components/card'
import Loading from '@/app/loading'
 
export const metadata: Metadata = {
  title: 'ici-location',
}

export default function Home() {
    return (
      <div>
        <section>
          <div className="relative">
            {/* Conteneur de l'image d'arrière-plan avec un filtre */}
            <div className="px-10 py-10 absolute inset-0 bg-black bg-opacity-25" />
        
            {/* L'image d'arrière-plan */}
            <Image
              src="/Capture d’écran 2023-11-06 à 17.57.24.png" // Remplacez par le chemin de votre image
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Arrière-plan"
              className='rounded-4xl'
            />

            {/* Contenu superposé sur l'image */}
            <div className="relative z-20 flex items-center justify-center h-screen">
              {/* Mettez ici le contenu que vous voulez afficher sur l'image */}
              <div className="text-center text-white p-4">
                <h1 className="text-4xl font-bold mb-4">Investing In Your Future One Home At A Time</h1>
                <p className="mb-6">We'll help you find the key to your dream home. Experience the joy of homeownership. Let us make your home buying journey simple.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* <Suspense fallback={<p>Loading Card...</p>}>
            <Card title={'title'} description={'description'} imageUrl={'https://alfilm.berlin/wp-content/uploads/2023/03/AFTER-THE-END-OF-THE-WORLD-02-%C2%A9ALFILM.jpg'} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Card title={'title'} description={'description'} imageUrl={'https://alfilm.berlin/wp-content/uploads/2023/03/AFTER-THE-END-OF-THE-WORLD-02-%C2%A9ALFILM.jpg'} />
          </Suspense> */}
        </section>
      </div>
    )
  }