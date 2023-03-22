import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../slices/userSlice';

const Users = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector(state => state.users)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <div className="container mx-auto p-5">
                <h1 className="text-2xl font-semibold mt-2.5 mb-10">Users List</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>USER</th>
                                <th>EMAIL</th>
                                <th>OPTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users && users.map(user => {
                                    return (
                                        <tr key={user?.id}>
                                            <th>{user?.id}</th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={user?.avatar} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{user?.first_name} {user?.last_name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{user?.email}</td>
                                            <td>
                                                <button className="btn btn-square btn-ghost">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="btn-group">
                    <button className="btn bg-base-100 text-base-content mr-2 rounded-3xl">«</button>
                    <button className="btn bg-base-100 text-base-content mr-2 rounded-3xl">1</button>
                    <button className="btn bg-base-100 text-base-content mr-2 rounded-3xl">2</button>
                    <button className="btn bg-base-100 text-base-content mr-2 rounded-3xl">3</button>
                    <button className="btn bg-base-100 text-base-content mr-2 rounded-3xl">4</button>
                    <button className="btn bg-base-100 text-base-content mr-2 rounded-3xl">»</button>
                </div>
            </div>
        </>
    )
}

export default Users