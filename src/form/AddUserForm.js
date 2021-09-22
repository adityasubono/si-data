import React, {useState} from 'react'

const AddUserForm = (props) => {
    const initialFormState = {id: null, name: '', username: ''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.username) return

                props.addUser(user)
                setUser(initialFormState)
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
            <button className='btn bg-primary text-white'>Add new user</button>
        </form>
    )
}

export default AddUserForm
