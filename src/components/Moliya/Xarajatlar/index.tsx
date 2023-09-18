
import MoliyaChartLine from './Chart/MoliyaChartLine'
import MoliyaChartPia from './Chart/MoliyaChartPia'
import XarajaTable from './Dashbor/MoliyaTable'

export default function Xarajatlar() {
  return (
    <div>
      <div className='flex gap-5'>
        <div>
          <MoliyaChartLine />
        </div>
        <MoliyaChartPia />
      </div>
      <XarajaTable/>
    </div>
  )
}