import Image from "next/image"
import map from '../../../public/assets/images/map.svg'
import usa from '../../../public/assets/icons/flagPins/usa.svg'
import uk from '../../../public/assets/icons/flagPins/uk.svg'
import japan from '../../../public/assets/icons/flagPins/japan.svg'

const pins = [
    { label: 'USA', perc: 45, img: usa, top: 0, left: 12},
    { label: 'UK', perc: 25, img: uk, top: 10, left: 35},
    { label: 'Japan', perc: 25, img: japan, top: 10, left: 70},
]

const ClickMap = () => 
<div className="w-1/3 flex flex-1 flex-col min-w-max max-h-[400px]">
        <h2 className="font-semibold mb-6">Spending (6 months)</h2>
        <div className="bg-neutral-50 p-6 h-full rounded-3xl flex flex-col md:min-h-[340px] gap-8 items-center">
            <span className="text-neutral-400 text-sm">Top 3 (2654 clicks)</span>
            <div className="w-[150px] relative max-w-max sm:w-auto">
                <Image src={ map } alt="map" />
                { pins.map(pin => 
                    <span key={`${pin.label}Pin`} 
                    style={ {top: `${pin.top}%`, left: `${pin.left}%`, animation: 'bounce .5s 1.5'}}
                    className={`cursor-pointer absolute w-[${pin.perc}px] font-semibold  flex-col items-center hidden sm:flex`}>
                        {`${pin.label}(${pin.perc}%)`}
                        <Image src={ pin.img } alt={pin.label}/>
                    </span>                    
                ) }
            </div>
        </div>
    </div>

export default ClickMap