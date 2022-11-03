import Spending from './Spending'
import TopPerforming from './TopPerforming'
import ClickMap from './ClickMap'

const Bottom = () =>
    <div className="text-neutral-800 flex h-full flex-wrap justify-center gap-2">
      <Spending/>
      <TopPerforming/>
      <ClickMap/>
    </div>

export default Bottom