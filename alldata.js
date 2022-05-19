//all data available from user input
function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All User Data</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}

  return (
    <Card
      txtcolor="blue"
      bgcolor="info"
      header="All Data"
      key={ctx.users[0].name}
      body={
        <>
          <ul className="list-group list-group-flush make-center bg-dark">
            <li className="list-group-item make-center">
              Total Balance ${ctx.users[0].balance}
              {ctx}
            </li>
          </ul>
        </>
      }
    />
  );
}
