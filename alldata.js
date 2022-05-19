//all data available from user input
function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h4>Account Data</h4>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
