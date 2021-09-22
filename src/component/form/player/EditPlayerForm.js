import React, {useEffect, useState} from 'react'

const EditPlayerForm = (props) => {
    const [player, setPlayer] = useState(props.currentPlayer)

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setPlayer({...player, [name]: value})
    }

    useEffect(() => {
        setPlayer(props.currentPlayer)
    }, [props])

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.updatePlayer(player.id, player)
            }}
        >
            <div className='card bg-light rounded-3 p-3'>
                <div className="row mb-3">

                    <div className='col-md-6'>
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label">
                            Nama Lengkap
                        </label>
                        <input type="text"
                               className="form-control"
                               id="exampleFormControlInput1"
                               name='fullname'
                               value={player.fullname}
                               onChange={handleInputChange}
                               placeholder="ex: Maman Abdurahman"/>
                    </div>


                    <div className='col-md-6'>
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label">
                            Tempat Tanggal Lahir
                        </label>
                        <div className='row'>
                            <div className="col-6">
                                <input type="text"
                                       className="form-control"
                                       id="exampleFormControlInput1"
                                       name='placeofbirth'
                                       value={player.placeofbirth}
                                       onChange={handleInputChange}
                                       placeholder="ex: Balikpapan"/>

                            </div>
                            <div className="col-6">
                                <input type="date"
                                       className="form-control"
                                       id="exampleFormControlInput1"
                                       name='dateofbirth'
                                       value={player.dateofbirth}
                                       onChange={handleInputChange}
                                       placeholder="aditya"/>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-3 mt-2'>
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label">
                            Kebangsaan Negara
                        </label>
                        <input type="text"
                               className="form-control"
                               id="exampleFormControlInput1"
                               name='nationality'
                               value={player.nationality}
                               onChange={handleInputChange}
                               placeholder="aditya"/>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label">
                            Klub
                        </label>
                        <input type="text"
                               className="form-control"
                               id="exampleFormControlInput1"
                               name='club'
                               value={player.club}
                               onChange={handleInputChange}
                               placeholder="ex: Sriwijaya FC"/>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label">
                            Posisi Pemain
                        </label>
                        <input type="text"
                               className="form-control"
                               id="exampleFormControlInput1"
                               name='position'
                               value={player.position}
                               onChange={handleInputChange}
                               placeholder="ex: Center Back"/>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label">
                            Nomer Punggung
                        </label>
                        <input type="number"
                               className="form-control"
                               id="exampleFormControlInput1"
                               name='number'
                               value={player.number}
                               onChange={handleInputChange}
                               placeholder="ex: 11"/>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label">
                            Tinggi Badan
                        </label>
                        <input type="number"
                               className="form-control"
                               id="exampleFormControlInput1"
                               name='weight'
                               value={player.weight}
                               onChange={handleInputChange}
                               placeholder="ex: 170 cm"/>
                    </div>
                </div>
                <div className='d-flex'>
                    <button
                        className='btn btn-outline-warning'
                        style={{
                            width: '130px'
                        }}>Update
                    </button>

                    <button
                        onClick={() => props.setEditPlayer(false)}
                        className="btn bg-danger text-white ms-3"
                        style={{
                            width: '130px'
                        }}
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </form>
)
}

export default EditPlayerForm
