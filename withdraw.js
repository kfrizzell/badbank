//withdraw input, button, balance, success, overdraft, alert and disable
function Withdraw(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[0].balance);

  return (
    <Card
      txtcolor="blue"
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <WithdrawForm setShow={setShow} />
        ) : (
          <WithdrawMessage setShow={setShow} />
        )
      }
    />
  );

  //Form and tracking
  function WithdrawForm(props) {
    const [withdraw, setWithdraw] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleWithdraw() {
      if (!validate(Number(withdraw), balance)) return;

      setBalance(balance - withdraw);
      ctx.users[0].balance = balance - Number(withdraw);
      setWithdraw("");
      setShow(false);
    }

    return (
      <>
        <span className="balance-information">Account Balance{balance}</span>
        <br />
        <br />
        Total Withdrawal
        <input
          type="input"
          className="form-control"
          id="withdraw"
          placeholder="Enter dollar value"
          value={withdraw}
          onChange={(e) => {
            setWithdraw(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        <button
          type="submit"
          className="btn btn-dark"
          onClick={handleWithdraw}
          disabled={disabled}
        >
          Withdraw
        </button>
      </>
    );
  }

  //Show success message
  function WithdrawMessage(props) {
    return (
      <>
        <span className="balance-information">Account Balance{balance}</span>
        <br />
        <br />
        <h5>Success! Withdrawal confirmed</h5>
        <button
          type="submit"
          className="btn btn-dark"
          onClick={() => props.setShow(true)}
        >
          CONFIRM!
        </button>
      </>
    );
  }

//validate fields on submit
  function validate(withdraw, balance) {
    if (isNaN(withdraw)) {
      setStatus("Error: Not a number");
      setTimeout(() => setStatus(""), 6000);
      return false;
    }
    if (withdraw > balance) {
      setStatus("Error: Overdraft");
      setTimeout(() => setStatus(""), 6000);
      return false;
    }
    if (withdraw < 0) {
      setStatus("Error: Negative withdrawal attempt");
      setTimeout(() => setStatus(""), 6000);
      return false;
    }
    return true;
  }
}
