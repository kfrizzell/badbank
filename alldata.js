//all data available from user input
function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
      txtcolor="blue"
      bgcolor="secondary"
      header="All Account Data"
      key={ctx.users[0].name}
      body={
        <>
          <ul className="list-group list-group-flush make-center bg-dark">
            <li className="list-group-item make-center">
              Account Balance ${ctx.users[0].balance}
              Data {JSON.stringify(ctx)}<br/>
            </li>
          </ul>
        </>
      }
    />
  );
}
