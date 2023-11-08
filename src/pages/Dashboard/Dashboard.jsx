import BaseTable from "../../components/BaseTable";
import Statistics from "../../components/Statistics/Statistics";
const Dashboard = () => {
  return (
    <>
      <div className="text-black space-y-10">
        <div>My Dashboard</div>
        <Statistics />
        <BaseTable />
      </div>
    </>
  );
};

export default Dashboard;
