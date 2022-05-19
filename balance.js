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
              Total Balance ${ctx.users[0].balance}
            </li>
          </ul>
        </>
      }
    />
  );
}
