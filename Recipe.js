import React, { useEffect, useState } from 'react'
import './Recipe.css'

export default function Recipe() {
    const [value, setValues] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // console.log(data.results)
                setValues(data.results)
            });
    }, [])

    return (
        <div>
            <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder='Enter the items to search' />
            <button>Search</button>
            {value.filter((results) => {
                if (search.toLowerCase() === "") {
                    return results

                }
                else if (results.name.first.toLowerCase().includes(search.toLowerCase())) {
                    return results
                }

            }).map((results, index) => {
                return (
                    <div key={index}>

                        <div className="flex">
                            <div className="child">
                                <h2>{results.name.first}</h2>
                                <ul>
                                    <li>{results.email}</li>
                                    <li>Gender: {results.gender}</li>
                                    <li>Age: {results.dob.age}</li>
                                    <li>Location: {results.location.country}</li>
                                </ul>
                                <img className='img' src={results.picture.large} alt="" height={100} width={100} />
                            </div>

                        </div></div>

                )
            })}

        </div>
    )
}
