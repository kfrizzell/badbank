//home page with bank title, image, welcome message
function Home(){
  return (
    <Card
      txtcolor="blue"
      header="BadBank Home"
      title="Welcome to Katrina's Full Stack BadBank"
      text="Where expectations are as low as your account balance."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );
}
