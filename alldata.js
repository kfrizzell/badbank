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

<table
  id="table"
  data-toggle="table"
  data-toolbar="#toolbar"
  data-height="460"
  {JSON.stringify(ctx)}
  <thead>
    <tr>
      <th data-field="id">ID</th>
      <th data-field="name">Item Name</th>
      <th data-field="price">Item Price</th>
    </tr>
  </thead>
</table>
