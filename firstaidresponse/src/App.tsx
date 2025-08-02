import viteLogo from '/vite.svg'
import './App.css'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import images, { stuff } from './constants/image'

function App() {

  return (
    <>
      <div>
        <nav className='flex items-center m-4'>
          <div className='flex flex-1 items-center'>
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <h1 className='font-bold text-2xl'>First Aid Response</h1>
          </div>
          <div className='hidden sm:flex flex-1 justify-between items-center m-4 '>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Our Work</a>
          </div>
          <div className='hidden max-sm:flex'>
              <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><a href="#">Home</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="#">About</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="#">Contact</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="#">Our Work</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </nav>
      </div>
      <main>
        <section className='flex flex-col items-center justify-center min-h-[85vh]' style={{ backgroundImage: "url('/images/s3.jpg')", height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className='text-4xl font-bold'>Welcome to First Aid Response</h1>
          <p className='mt-4 text-lg'>Your go-to resource for first aid information and training.</p>
        </section>
        <section className='flex max-sm:flex-col'>
          <div className='flex-1 flex flex-col items-center justify-center'>
            <div className='flex-1 flex-col justify-center items-center p-4'>
              <h1 className='font-bold text-center text-2xl'>Get to know us</h1>
              <p className='font-semibold text-center' >Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Quaerat eum enim 
                voluptatum, atque et ipsam vel incidunt fuga? Rerum, repellat. 
                Dolorem quis totam assumenda possimus animi blanditiis, recusandae 
                voluptas?
              </p>
            </div>
            <div className='flex flex-col items-start mt-4'>
              {stuff.map((person) => (
                <div key={person.src} className='flex items-center mb-4'>
                  <img src={person.src} alt={person.name} className='w-16 h-16 rounded-full mr-4' />
                  <div>
                    <h2 className='font-bold'>{person.name}</h2>
                    <p className='text-sm'>{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 p-4'>
            {images.map((image, index) => (
              <div className='w-full h-64 hover:scale-105 duration-300 transition ease-in-out relative' key={image.src}>
                <img src={image.src} alt={`Image ${index + 1}`} className='w-full h-[100%] object-cover rounded-lg shadow-md' />
                <div className='absolute w-[100%] h-[100%] top-0 left-0 flex flex-col justify-center items-center text-center hover:opacity-100 opacity-0 bg-opacity-50 rounded-lg transition ease-in-out duration-300'>
                  <h2 className='text-white text-lg font-bold'>{image.event}</h2>
                  <p className='text-white text-sm'>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div>
          </div>
          <div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
