import Image from "next/image"
import arrowUp from '../../../public/assets/icons/arrowUp.svg'
import arrowDown from '../../../public/assets/icons/arrowDown.svg'
import { AnimatedCounter } from "../../_common/AnimatedCounter"

const data = [
    { isUp: true, label: 'React', imp: 1100},
    { isUp: false, label: 'CSS', imp: 100},
    { isUp: true, label: 'Redux', imp: 800},
    { isUp: true, label: 'HTML', imp: 2700}
]

const TopPerforming = () => 
<div className="md:w-1/3 flex flex-1 flex-col sm:min-w-max sm:max-h-[400px]">
    <h2 className="font-semibold mb-6">Top Performing keywords</h2>
    <div className="p-6 h-full rounded-3xl flex flex-col min-h-[340px] gap-3 justify-center">
            
    { data.map(item => 
        <div key={`${item.label}Keyword`} className="flex flex-wrap items-center border-zinc-200 border-b pb-3 gap-3">
            <div className="flex flex-1 items-center gap-2 font-semibold flex-wrap">
                { item.isUp ? <Image src={ arrowUp } alt="up" /> : <Image src={ arrowDown } alt="down" />}
                { item.label }
            </div>
            <span className={`${item.isUp ? 'bg-violet-200' : 'bg-orange-200'} px-6 py-2 w-40 text-center rounded-md `}>
            {item.isUp ? '+' : '-'}
            <AnimatedCounter from={0} to={item.imp} /> imp
            </span>
        </div>        
)}
       
    </div>
</div>

export default TopPerforming