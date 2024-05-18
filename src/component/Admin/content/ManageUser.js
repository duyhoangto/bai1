import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc"
import './ManageUser.scss'
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser, getUserwithPaginate } from "../../../services/APIservice";
import ModalUpdateUser from "./ModalUpdateUser";
import ModelViewDetailUser from "./ModalViewDetailUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {
    const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
    const [showModalViewUser, setshowModalViewUser] = useState(false);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [dataUpdate, setdataUpdate] = useState({});
    const [dataDelete, setdataDelete] = useState({});
    const [showModalDeleteUser, setshowModalDeleteUser] = useState(false)
    const limit_user = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [dataView, setdataView] = useState({});
    const [listuser, setlistuser] = useState([])
    useEffect(async () => {
        // fetchlistuser()
        fetchlistuserWithPaginate(1)
    }, [])

    const fetchlistuser = async () => {
        let res = await getAllUser()
        if (res.EC === 0) {
            setlistuser(res.DT)
        }
    }

    const fetchlistuserWithPaginate = async (page) => {
        let res = await getUserwithPaginate(page, limit_user)
        if (res.EC === 0) {
            setlistuser(res.DT.users)
            setPageCount(res.DT.totalPages)
        }
    }
    const handleClickBtnUpdate = (user) => {
        setshowModalUpdateUser(true)
        setdataUpdate(user);
    }

    const resetUpdateData = () => {
        setdataUpdate({})
    }

    const handleClickView = (user) => {
        setshowModalViewUser(true);
        setdataView(user);
    }

    const handleShowhideModal = (value) => {
        setShowModalCreateUser(value);
    }

    const handleClickDelete = (user) => {
        setshowModalDeleteUser(true);
        setdataDelete(user)
    }
    return (
        <div className="manage-user-container">
            <div className="title"></div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus /> add new user</button>
                </div>
                <div className="table-user-container">

                    {/* <TableUser listuser={listuser} handleClickBtnUpdate={handleClickBtnUpdate} handleClickView={handleClickView} handleClickDelete={handleClickDelete} /> */}
                    <TableUserPaginate listuser={listuser} handleClickBtnUpdate={handleClickBtnUpdate} handleClickView={handleClickView}
                        fetchlistuserWithPaginate={fetchlistuserWithPaginate} pageCount={pageCount} handleClickDelete={handleClickDelete}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage} />
                </div>
                <ModalCreateUser fetchlistuserWithPaginate={fetchlistuserWithPaginate} show={showModalCreateUser} setShow={setShowModalCreateUser}
                    fetchlistuser={fetchlistuser}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
                <ModalUpdateUser fetchlistuserWithPaginate={fetchlistuserWithPaginate} show={showModalUpdateUser} setShow={setshowModalUpdateUser}
                    dataUpdate={dataUpdate} fetchlistuser={fetchlistuser} resetUpdateData={resetUpdateData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />

                <ModelViewDetailUser fetchlistuserWithPaginate={fetchlistuserWithPaginate} show={showModalViewUser} setShow={setshowModalViewUser}
                    dataView={dataView} fetchlistuser={fetchlistuser} currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
                <ModalDeleteUser fetchlistuserWithPaginate={fetchlistuserWithPaginate} show={showModalDeleteUser} setShow={setshowModalDeleteUser}
                    dataDelete={dataDelete} fetchlistuser={fetchlistuser}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />

            </div>
        </div>
    )
}

export default ManageUser;