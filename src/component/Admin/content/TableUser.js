import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/APIservice";

const TableUser = (props) => {

    const { listuser } = props;

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User Name </th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listuser && listuser.length > 0 && listuser.map((item, index) => {
                        return (
                            <tr key={`table-user-${index}`}>
                                <th>{item.id}</th>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary"
                                        onClick={() => {
                                            props.handleClickView(item)
                                        }}
                                    >View</button>
                                    <button className="btn btn-warning mx-3"
                                        onClick={() => {
                                            props.handleClickBtnUpdate(item)
                                        }}
                                    >Update</button>
                                    <button className="btn btn-danger"
                                        onClick={() => {
                                            props.handleClickDelete(item)
                                        }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    })}

                    {listuser && listuser.length === 0 && <tr>
                        <td colSpan={'4'}>
                            Not found user
                        </td>
                    </tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser;