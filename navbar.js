//BadBank navigation with create, deposit, withdraw, all data, home
function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">BadBank Home</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">
            <span title="Click here to create account">Create Account</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">
            <span title="Click here to deposit funds">Deposit</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">
            <span title="Click here to withdraw funds">Withdraw</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">
            <span title="Click here to see balance">Current Balance</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">
            <span title="Click here to see all data">All Data</span>
            </a>
              </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">
            <span title="Login to account">Login</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}
