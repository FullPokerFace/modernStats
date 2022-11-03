import Image from 'next/image'
import heroImg from '../../../public/assets/images/hero_1.svg'
import time from '../../../public/assets/icons/time.svg'
import pageView from '../../../public/assets/icons/pageView.svg'
import graph from '../../../public/assets/icons/graph_1.svg'
import searchBig from '../../../public/assets/images/searchBig.svg'
import { AnimatedCounter } from '../../_common/AnimatedCounter'

const Top = () =>
    <div className="flex flex-col md:flex-row flex-wrap gap-6 gap-y-12">
        <div className="flex flex-wrap flex-1 flex-col sm:flex-row gap-2 bg-gradient-to-r from-neutral-50 to-neutral-200 rounded-2xl p-6 text-neutral-800 relative">
            <div className='flex-1'>
                <p className='text-sm sm:text-lg'>Click Through Rate Today</p>
                <p className='text-5xl md:text-9xl'>0.<AnimatedCounter from={10} to={15} step={1} />%</p>
                <div className='flex gap-2 mt-2'>
                    <Image src={ time } alt='average time'/>
                    <div>
                        <p>Average time</p>
                        <p className='text-xl'>1m 32s</p>
                    </div>
                </div>
                <div className='flex gap-2 mt-2'>
                    <Image src={ pageView } alt='average time'/>
                    <div>
                        <p>Average pages</p>
                        <p className='text-xl'>12</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex items-center md:min-w-[200px] justify-end'>
                <Image src={ heroImg } alt ="At a glance statistics"/>
            </div>
            <button className='transition-all hover:bg-violet-900 hover:scale-105 absolute -right-0 -left-0 -bottom-8 
            bg-violet-800 sm:px-14 py-4 text-white rounded-2xl rounded-tr-none rounded-bl-none lg:left-auto lg:-right-4 lg:-bottom-4'> View full statistics</button>
        </div>
        <div className=" justify-evenly flex flex-col xl:max-w-[320px] bg-orange-200 rounded-2xl p-6 text-neutral-800 flex-1">
            <div className='flex gap-2'>
                <div className='font-bold w-1/2 text-sm'>
                    <p className='text-center'>Most searched keywords</p>
                    <p className='text-center text-8xl'><AnimatedCounter from={0} to={12} step={1} /></p>
                </div>
                <Image src={ searchBig } alt='most searched keywords'/>
            </div>
            <p className='text-xl text-center mt-6 xl:text-xs'>
                You have <span className='font-bold'>3 new keywords</span> that will likely increase your chances of getting more activity.
            </p>
            <div className='mt-6 bg-white p-4 rounded-xl flex flex-col sm:flex-row gap-2 text-base xl:text-xs'>
                <div className='flex items-center min-w-[35px]'>
                    <Image src={ graph } alt='review keywords'/>
                </div>
                Review your keyowrds, add matching and similar terms, get insights
            </div>
        </div>
    </div>

export default Top