//deposit input, button, balance, success, alerts and disable
function Deposit(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[0].balance);

  return (
    <Card
      txtcolor="white"
      bgcolor="success"
      header="Deposit Funds"
      status={status}
      body={
        show ? (
          <DepositForm setShow={setShow} />
        ) : (
          <DepositMessage setShow={setShow} />
        )
      }
    />
  );

  function DepositForm(props) {
    const [deposit, setDeposit] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleDeposit() {
      if (!validate(Number(deposit), balance)) return;

      setBalance(balance + Number(deposit));
      ctx.users[0].balance = balance + Number(deposit);
      setDeposit("");
      setShow(false);
    }

    return (
      <>
        <span className="balance-information">Account Balance ${balance} </span>
        <br />
        <br />
        Deposit (USD) $
        <input
          type="input"
          className="form-control"
          id="deposit"
          placeholder="Enter $ amount (USD)"
          value={deposit}
          onChange={(e) => {
            setDeposit(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        <button
          type="submit"
          className="btn btn-dark"
          onClick={handleDeposit}
          disabled={disabled}
        >
          Deposit
        </button>
      </>
    );
  }

  //functionality to show a success message if submit passes validation with the option to deposit again
  function DepositMessage(props) {
    return (
      <>
        <span className="balance-information">Account Balance ${balance}</span>
        <br />
        <br />
        <h5>Success! Deposit confirmed</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}
        >
          MAKE ANOTHER DEPOSIT
        </button>
      </>
    );
  }

//Provide validation and error message in deposit amount is not a number or a negative number
  function validate(deposit, balance) {
    if (isNaN(deposit)) {
      setStatus("Error: Please enter a valid number");
      setTimeout(() => setStatus(""), 8000);
      return false;
    }
    if (deposit < 1) {
      setStatus("Error: Deposit cannot be a negative value");
      setTimeout(() => setStatus(""), 8000);
      return false;
    }
    return true;
  }
}
