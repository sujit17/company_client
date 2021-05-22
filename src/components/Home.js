import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Company Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>
              {users.slice(pagination.start,pagination.end).map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody> */}
        </table>
      </div>
    </div>
  );
}

export default Home;
