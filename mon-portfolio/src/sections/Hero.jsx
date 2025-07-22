import { Typewriter } from 'react-simple-typewriter'

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center">
        Hello, moi c’est{' '}
        <div className="inline-block">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#036bfc,#030ffc,#8c03fc)]">
                Abdel-Hadi
            </span>
             <div className="h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 block md:hidden" style={{width: '50%'}} />
        </div>
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium text-gray-700 text-center">
        <Typewriter
          words={[
            'UX/UI Designer',
            'Développeur Frontend créatif',
            'Passionné par le design mobile',
            'Motivé & déterminé',
            'Toujours prêt à relever un défi',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
    </section>
  )
}

export default Hero
