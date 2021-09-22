import React from 'react'

const UserTable = (props) => (
    <table className='table table-light table-hover'>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button
                            onClick={() => {
                                props.editRow(user)
                            }}
                            className="btn bg-warning"
                        >
                            Edit
                        </button>


                        <button
                            onClick={() => props.deleteUser(user.id)}
                            className="btn bg-danger ms-3"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )}
        </tbody>
    </table>
)

export default UserTable
