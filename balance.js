//user account balance
function Balance(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
      txtcolor="blue"
      bgcolor="info"
      header="Account Balance"
      key={ctx.users[0].name}
      body={
        <>
          <ul className="list-group list-group-flush make-center bg-dark">
            <li className="list-group-item make-center">
              Total Balance ${ctx.users[0].balance};
              Name ${ctx.users[0].name}
              {JSON.stringify(ctx)}<br/>
            </li>
          </ul>
        </>
      }
    />
  );
}

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All User Data</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
