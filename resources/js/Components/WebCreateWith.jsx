import Aos from 'aos'
import 'aos/dist/aos.css'

export default function WebCreateWith() {
    return (
      <div className="bg py-24 sm:py-15" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 txt">
          Big thanks for
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/storage/images/logo/react.png"
              alt="ReactJS"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/storage/images/logo/laravel.png"
              alt="Laravel"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/storage/images/logo/tailwind.png"
              alt="Tailwind CSS"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/storage/images/logo/daisyui.png"
              alt="Daisy UI"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/storage/images/logo/jagoanhosting.png"
              alt="Jagoan Hosting"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  