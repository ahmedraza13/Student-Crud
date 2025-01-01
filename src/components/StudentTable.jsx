function StudentTable(props) {
  console.log(props);
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.rollNo}</td>
      <td>{props.data.contactNo}</td>
      <td>{props.data.course}</td>
      <td className="d-flex gap-2">
        <button className="btn btn-primary"  onClick={() => props.onUpdateHandler(props.data.id)}>Edit</button>
        <button className="btn btn-danger" onClick={() => props.onDeleteHandler(props.data.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default StudentTable;
