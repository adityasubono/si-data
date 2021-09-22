import React from 'react'

const TablePlayer = (props) => (
    <table className='table table-light table-hover table-sm'>
        <thead>
        <tr>
            <th>Nama Lengkap</th>
            <th>Tempat Tanggal Lahir</th>
            <th>Kebangsaan Negara</th>
            <th>Nama Klub</th>
            <th>Posisi Pemain</th>
            <th>Nomer Punggung</th>
            <th>Tinggi Badan</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {props.players.length > 0 ? (
            props.players.map((player) => (
                <tr key={player.id}>
                    <td>{player.fullname}</td>
                    <td>{player.placeofbirth + ',' + player.dateofbirth}</td>
                    <td>{player.nationality}</td>
                    <td>{player.club}</td>
                    <td>{player.position}</td>
                    <td>{player.number}</td>
                    <td>{player.weight} cm</td>
                    <td className='d-flex'>
                        <button
                            onClick={() => {
                                props.editRowPlayer(player)
                            }}
                            className="btn btn-sm bg-warning"
                        >
                            <i className='fa fa-pencil'></i>
                        </button>


                        <button
                            onClick={() => props.deletePlayer(player.id)}
                            className="btn btn-sm bg-danger ms-3 text-white"
                        >
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={8} className='text-danger fw-bold text-center'>No Data Player</td>
            </tr>
        )}
        </tbody>
    </table>
)

export default TablePlayer
