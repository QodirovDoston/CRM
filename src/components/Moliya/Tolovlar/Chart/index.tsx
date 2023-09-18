
import MoliyaChartLine from './MoliyaChartLine'
import MoliyaChartPia from './MoliyaChartPia'

export default function TolovPage() {
  return (
    <div>
      <div className='flex gap-5'>
        <div>
          <MoliyaChartLine />
        </div>
        <MoliyaChartPia />
      </div>
    </div>
  )
}
