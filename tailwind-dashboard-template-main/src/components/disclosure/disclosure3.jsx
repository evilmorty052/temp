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
                <span className={styles.paragraph} >What Will It Feel Like When I Take CBD Oil?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={`${styles.paragraph} px-4 pt-4 pb-2 text-md text-gray-500 bg-white text-left`}>
              The most accurate answer to that question is - it depends. Meaning, it depends on what your body needs. Each body is different, so everybody will have a different response. Since hemp extract with cannabinoids works with the body’s internal Endocannabinoid System to maintain good health, the effect is personalized based on what you have going on internally. That being said, quite a few people mention a feeling of relaxation, while others note that hemp extract helps them feel focused.* The best way to find out how CBD will work for you, is to try it for yourself!
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className=" px-4 flex w-full justify-between rounded-lg bg-slate-300 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className={styles.paragraph}>Are There Side Effects To Taking CBD Oil?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-2 text-sm text-gray-500">
              CBD is generally well tolerated and considered safe. As with any other supplement, there is a chance that it could cause adverse reactions for some people, and/ or could interact with certain medications. As with any dietary supplement, consult your physician before use if you are pregnant, nursing, have or suspect a medical condition or are taking any medications.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className=" px-4 flex w-full justify-between rounded-lg bg-slate-300  text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className={styles.paragraph}>Who Can Take CBD Oil?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Studies show that hemp extract with CBD can be well-tolerated by many. Since the most common results of taking it are calm and focus; relief from exercise-induced inflammation; support for healthy sleep cycles; and relief from everyday stresses, anyone looking for balance in these areas might benefit from a cannabinoid extract with CBD and additional plant compounds.* And don’t forget about your furry friends! See how CBD works for dogs too.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
