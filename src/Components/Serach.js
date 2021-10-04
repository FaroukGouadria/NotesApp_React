import React from 'react'
import { MdSearch } from 'react-icons/md'

const Serach = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <MdSearch className="serach-icon" size='1.3rem' /> 
            <input onChange={(event) =>
                 handleSearchNote(event.target.value)} type='text' placeholder='type to serach'></input> 
        </div>
    )
}

export default Serach
