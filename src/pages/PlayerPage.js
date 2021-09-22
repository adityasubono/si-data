import {useState} from "react";
import EditUserForm from "../form/EditUserForm";
import AddPlayerForm from "../component/form/player/AddPlayerForm";
import TablePlayer from "../component/table/player/TablePlayer";
import EditPlayerForm from "../component/form/player/EditPlayerForm";
import {useLocalStorage} from "../useLocalStorage";

const PlayerPage = () => {

    const playerData = [
        {
            id: 1,
            fullname: 'Aditya Nugroho Subono',
            placeofbirth: 'Balikpapan',
            dateofbirth: '11/05/1989',
            nationality: 'Indonesia',
            club: 'Madura United',
            position: 'Gelandang Serang',
            number: '11',
            weight: '170'
        },
    ]

    const [players, setPlayers] = useState(playerData)

    const addPlayer = (player) => {
        player.id = players.length + 1
        console.log('setPlayer', setPlayers)
        setPlayers([...players, player])
    }


    const deletePlayer = (id) => {
        setPlayers(players.filter((player) => player.id !== id))
    }

    const [editPlayers, setEditPlayers] = useState(false)


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

    const [currentPlayer, setCurrenPlayer] = useState(initialFormStatePlayer)

    const editRowPlayer = (player) => {
        setEditPlayers(true)
        setCurrenPlayer({
            id: player.id,
            fullname: player.fullname,
            placeofbirth: player.placeofbirth,
            dateofbirth: player.dateofbirth,
            nationality: player.nationality,
            club: player.club,
            position: player.position,
            number: player.number,
            weight: player.weight
        })
    }

    const updatePlayer = (id, updatedPlayer) => {
        setEditPlayers(false)

        setPlayers(players.map((player) => (player.id === id ? updatedPlayer : player)))
    }

    return (

        <div className="container">
            <h3>Data Pemain Bola</h3>

            {editPlayers ? (
                <div>
                    <h4 className='text-success'>Edit Data Pemain</h4>
                    <EditPlayerForm
                        setEditPlayer={setEditPlayers}
                        currentPlayer={currentPlayer}
                        updatePlayer={updatePlayer}
                    />
                </div>
            ) : (
                <div>
                    <h4 className='text-success'>Input Data Player</h4>
                    <AddPlayerForm addPlayer={addPlayer}/>
                </div>
            )}


            <h3 className='mt-2'>View Data Player</h3>
            <TablePlayer
                players={players}
                editRowPlayer={editRowPlayer}
                deletePlayer={deletePlayer}
            />
        </div>
    )
}


export default PlayerPage;
