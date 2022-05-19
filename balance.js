//user account balance
function Balance(){
  const ctx = React.useContext(UserContext);

  ctx.users.push({name,email,password,balance:1000})
  
let table = document.querySelector("table");
let data = ctx.users.push({name,email,password,balance:1000});
generateTable(table, mountains);
generateTableHead(table, data);  
  
function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All User Data</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
