//1.fecth data dari API backend menggunakan {useState, useEffect} 
import React, {useState, useEffect} from "react";
//2.import axios krna berinteraksi dg API
import axios from "axios";
import { Link } from "react-router-dom";



const UserList = () => {
    //3.membuat state baru dg nama users dan fungsi untuk update statenya yaitu setUser
    const [users, setUser] = useState([]);

    //5.menjalankan function getUsers 
    useEffect(()=>{
        getUsers();
    },[]);

    //4.membuat sebuah methos untuk fetch datanya
    //ini adalah function getUsers
    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        //6.memasukan data table yg dr backend ke state no 3
        setUser(response.data);
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
            <Link to={`add`} className="button is-success">Add New</Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {users.map((user, index) => (
                            //7.looping state users no 3
                            //setiap looping memiliki key
                            <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                            <Link to={`edit/${user.id}`} className="button is-small is-info mr-2">Edit</Link>
                                <button className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList