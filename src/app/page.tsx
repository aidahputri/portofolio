import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen text-8xl text-white opacity-80 select-none text-shadow z-[100]">
        Bubbles
      </div>
      <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-tr from-bg1 to-bg2">
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div
          className="w-full h-full blur-[40px]"
          style={{ filter: 'url(#goo)' }}
        >
          <div className="absolute top-[calc(50%-40%/2)] left-[calc(50%-40%/2)] w-[80%] h-[80%] bg-color1 rounded-full mix-blend-hard-light animate-moveVertical"></div>
          <div className="absolute top-[calc(50%-40%/2)] left-[calc(50%-40%/2)] w-[80%] h-[80%] bg-color2 rounded-full mix-blend-hard-light animate-[moveInCircle_20s_reverse_infinite]"></div>
          <div className="absolute top-[calc(50%-40%/2+200px)] left-[calc(50%-40%/2-500px)] w-[80%] h-[80%] bg-color3 rounded-full mix-blend-hard-light animate-moveInCircle"></div>
          <div className="absolute top-[calc(50%-40%/2)] left-[calc(50%-40%/2)] w-[80%] h-[80%] bg-color4 rounded-full mix-blend-hard-light animate-moveHorizontal"></div>
          <div className="absolute top-[calc(50%-80%)] left-[calc(50%-80%)] w-[160%] h-[160%] bg-color5 rounded-full mix-blend-hard-light animate-[moveInCircle_20s_ease_infinite]"></div>
          <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-color-interactive rounded-full mix-blend-hard-light opacity-70"></div>
        </div>
      </div> */}
    </main>
  )
}
