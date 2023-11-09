import BaseDashTable from "../../components/BaseDashTable";
import Statistics from "../../components/Statistics/Statistics";
const Dashboard = () => {
  return (
    <>
      <div className="text-black space-y-10">
        <div>My Dashboard</div>
        <Statistics />
        <BaseDashTable />
      </div>
    </>
  );
};

export default Dashboard;

// headers = ['reference', 'amount', 'currency',]
// map ---> ['pay me', '71632687', 'naira]
// create object {}
// ['pay me', '71632687', 'naira]  ---- forEach  'pay me' index = 0
// object.refernece = 'pay me' desired result
// object[headers[0]] = itm = 'pay me'