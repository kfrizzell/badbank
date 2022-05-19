//BadBank navigation with create, deposit, withdraw, all data, home
function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">BadBank Home</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
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
            <span title="Click here to see balance">Balance</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">
            <span title="Click here to see all data">All Data</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}
