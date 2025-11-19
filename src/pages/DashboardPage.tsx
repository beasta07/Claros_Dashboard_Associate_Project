import AnalyticChart from "../components/Dashboard/AnalyticChart"
import Overview from "../components/Dashboard/Overview"
import RecentTransactions from "../components/Dashboard/RecentTransactions"
import SavingPlan from "../components/Dashboard/Clients"
import Clients from "../components/Dashboard/Clients"


const Dashboard = () => {
  return (
    <>
      <div className=' pb-8 w-full lg:px-10 px-4'>
        <div className='lg:flex items-start  gap-5 w-full '>
          <div className='lg:w-[70%]'>
            <Overview />
            <AnalyticChart />

          </div>
          <div className='lg:w-[30%]  h-full'>
            <Clients />
            <RecentTransactions />
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard
