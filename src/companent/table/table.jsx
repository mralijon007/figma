import axios from 'axios';
import React, { useEffect } from 'react'

const Table = () => {
    let api = 'http://localhost:3000/data';

    
    async function getData() {
        try {
            let { data } = await axios.get(api);
            get();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el) => {
                            <tr>
                                <td>
                                    {el.id}
                                </td>
                                <td>
                                    {el.name}
                                </td>
                                <td>
                                    {el.status}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table