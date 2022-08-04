//user login page
function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser]         = React.useState('');
  const ctx = React.useContext(UserContext);
  const disable = (!email);
  //let successName = "Success";
  
  return (
    <>
    <Initnav />
   <center>
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" disabled={disable} className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
            ):(
              <>
              <h5>{user}</h5>
              <a className="btn btn-light" href="#/balance/" role="button">Continue to Balance</a>
              </>
            )}
    />
    </center>
    </>
  )
}
