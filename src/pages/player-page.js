import {useState} from "react";
import UserTable from "../tables/UserTable";
import AddUserForm from "../form/AddUserForm";
import EditUserForm from "../form/EditUserForm";

const PlayerPage = () => {

    const playerData = [
        {
            id: 1,
            fullname: 'Aditya Nugroho Subono',
            placeofbirth: 'Balikpapan',
            dateofbirth: '11 Mei 2021',
            nationality: 'Indonesia',
            club: 'Madura United',
            position: 'Gelandang Serang',
            number: '11',
            weight: '170 cm'
        },
    ]


    const [users, setUsers] = useState(playerData)

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const [players, setPlayers] = useState(playerData)
    const addPlayer = (player) => {
        player.id = players.length + 1
        setUsers([...users, player])
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const deletePlayer = (id) => {
        setPlayers(players.filter((player) => player.id !== id))
    }

    const [editing, setEditing] = useState(false)
    const [editPlayer, setEditPlayer] = useState(false)

    const initialFormState = {id: null, name: '', username: ''}
    const initialFormStatePlayer = {
        id: null,
        fullname: '',
        placeofbirth: '',
        dateofbirth: '',
        nationality: '',
        club: '',
        position: '',
        number: '',
        weight: ''
    }

    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [currentPlayer, setCurrenPlayer] = useState(initialFormStatePlayer)
    const editRow = (user) => {
        setEditing(true)

        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

    return (

        <div className="container">
            <h1>Sistem Pendataan Pemain Bola</h1>
            <div className="row">
                <div className="col-6">
                    <div className="flex-large">
                        {editing ? (
                            <div>
                                <h2>Edit user</h2>
                                <EditUserForm
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-6">
                    <h2>View users</h2>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
    )
}


export default PlayerPage;
