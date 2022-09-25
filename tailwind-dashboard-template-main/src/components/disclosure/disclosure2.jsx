import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import styles from '../../style'

export default function Disclosure2() {
  return (
    <div className="max-w-screen-lg mx-auto mb-10  pt-16">
      <div className="mx-auto w-full max-w-full rounded-2xl bg-white p-5 pb-20">
        <Disclosure>
          {({ open }) => (
            <>
            {/* <h2 class="mb-3 font-bold  text-[32px] md:text-[36px] text-slate-500 font-poppins text-center">WHAT IS CBD?</h2> */}
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4  text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className={styles.paragraph} >What Are The Benefits Of CBD And Full-Spectrum Hemp Supplements?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={`${styles.paragraph} px-4 pt-4 pb-2 text-md text-gray-500 bg-white text-left`}>
              Many people integrate CBD into their health routine to support their cellular and molecular health.* CBD, or cannabidiol, is just one of over 100+ cannabinoids that can be extracted from hemp. In fact, scientists found that these plant compounds have a better effect on the body when they work together, rather than alone. This means that CBD and all those other great compounds can support the body more fully than just CBD. And how, exactly, do they provide support to the body? Among the many benefits that our users experience, some of the main ones are: a sense of calm for focus; relief from everyday stresses; help in recovery from exercise-induced inflammation; and support for healthy sleep cycles*. Charlotte's Web is a full-spectrum cannabinoid extract with CBD and other cannabinoids and beneficial plant compounds like terpenes and flavonoids. Since research shows that using the full plant maximizes benefits delivered throughout the body and supplies additional wellness components, we make sure to give you as much of Mother Nature’s goodness as we can.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className=" px-4 flex w-full justify-between rounded-lg bg-slate-300 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className={styles.paragraph}>What Is The Difference Between Hemp Oil And Hemp Extract?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className=" px-4 flex w-full justify-between rounded-lg bg-slate-300  text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className={styles.paragraph}>Hemp vs Marijuana?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              No. Charlotte’s Web comes from hemp plants, not marijuana. Hemp and marijuana are close relatives, but not the same. By definition, hemp contains no more than .3% THC - the psychoactive compound that is found in higher concentration in marijuana. By contrast, hemp naturally has higher levels of CBD, a non-psychoactive compound known for helping human bodies maintain health and overall wellness.*
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
