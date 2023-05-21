import DashboardBody from './components/Body'
import DashboardHeader from './components/Header'
import { DashboardStyles } from './dashboard.styles'

export const DashboardComponent = () => (
  <>
    <div className="dashboard__container">
      <DashboardHeader />
      <DashboardBody />
    </div>

    <style jsx>{DashboardStyles}</style>
  </>
)
