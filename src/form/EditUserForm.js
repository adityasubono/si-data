import React, {useEffect, useState} from 'react'

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"
                       className="form-label">
                    Name
                </label>
                <input type="text"
                       className="form-control"
                       id="exampleFormControlInput1"
                       name='name'
                       value={user.name}
                       onChange={handleInputChange}
                       placeholder="aditya"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"
                       className="form-label">
                    Username
                </label>
                <input type="text"
                       className="form-control"
                       id="exampleFormControlInput1"
                       name='username'
                       value={user.username}
                       onChange={handleInputChange}
                       placeholder="paijo"/>
            </div>
            <button className='btn btn-outline-warning '>Update</button>
            <button
                onClick={() => props.setEditing(false)}
                className="btn bg-danger text-white ms-3"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm
