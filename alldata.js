//all data available from user input
function AllData(){
  const ctx = React.useContext(UserContext);
  
  return (
    <div className="card-group">
    <div className="card">
      <div className="card-header bg-info text-center text-blue">
        Account Holder
      </div>
      {ctx.users.map(({name}) => { return ( <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">{name}</li>
      </ul> </>)})} 
    </div> 
    <div className="card">
        <div className="card-header bg-info text-center text-blue">
          Email Address
        </div>
        {ctx.users.map(({email}) => { return ( <>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">{email}</li> 
        </ul> </>)})}
      </div>
      <div className="card">
        <div className="card-header bg-info text-center text-blue">
          Password
        </div>
        {ctx.users.map(({balance}) => { return ( <>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">$ {balance}</li>
        </ul> </>)})}
      </div>
        {ctx.users.map(({password}) => { return ( <>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">{password}</li>
        </ul> </>)})}
      </div>
      <div className="card">
        <div className="card-header bg-info text-center text-blue">
          Account Balance
      </div>       
    </div> 
);    
}
