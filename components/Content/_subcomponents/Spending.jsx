import { useState } from "react"
import { AnimatedCounter } from "../../_common/AnimatedCounter"

const months = [
    { label: 'JAN', percentage: 90},
    { label: 'FEB', percentage: 35},
    { label: 'MAR', percentage: 65},
    { label: 'APR', percentage: 15},
    { label: 'MAY', percentage: 58},
    { label: 'JUN', percentage: 72},
]

const Spending = () => {
    
    const [height, showHeight] = useState(false)
    setTimeout(() => { showHeight(true) }, 100)

    return <div className="w-1/3 flex flex-1 flex-col min-w-fit sm:max-h-[400px]">
        <h2 className="font-semibold mb-6">Spending (6 months)</h2>
        <div className="bg-neutral-50 p-6 h-full rounded-3xl flex flex-col min-h-[340px]">
            <div className="flex items-center gap-2 flex-wrap">
                <span className="text-violet-900 text-4xl font-semibold flex-1">$<AnimatedCounter from={0} to={1200}  />,<AnimatedCounter from={0} to={90} /></span>
                <span className="text-neutral-400 text-sm">Monthly view</span>
            </div>
            <div className="flex h-full mt-6 justify-between">
                { months.map(month => 
                    <div key={`${month.label}Month`} className="h-full flex flex-col w-max items-center gap-3">
                        <div className="relative h-full w-2 bg-zinc-300 rounded-full">
                            <p style={{height: `${height ? month.percentage : 0}%`}} className={`transition-all duration-500 absolute bottom-0 bg-gradient-to-t from-violet-600 via-sky-700 to-violet-800 w-full rounded-full`}></p>
                        </div>
                        <p className="text-neutral-400 text-sm">{ month.label }</p>
                    </div>
                )}
            </div>
        </div>
    </div>
}

export default Spending