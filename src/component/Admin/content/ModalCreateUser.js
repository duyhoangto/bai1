
import { toast } from 'react-toastify';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"
import { postCreateNewUser } from '../../../services/APIservice';
const ModalCreateUser = (props) => {

    const { show, setShow } = props;
    const handleClose = () => {
        setShow(false)
        setemail("")
        setpassword("")
        setrole("")
        setusername("")
        setimage("")
        setPreviewImage("")
    };
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [image, setimage] = useState("");
    const [role, setrole] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const handleupload = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setimage(event.target.files[0])
        } else {
            //setPreviewImage("")
        }

    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitCreateUser = async () => {
        // validate

        let data = await postCreateNewUser(email, password, username, role, image)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose();
            await props.fetchlistuser();

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button> */}

            <Modal
                show={show}

                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user </Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => setemail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => setpassword(event.target.value)} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">User Name :</label>
                            <input type="text" className="form-control" value={username} onChange={(event) => setusername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setrole(event.target.value)} >
                                <option value="USER"> User</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='label-upload' ><FcPlus /> Upload file image</label>
                            <input type='file' hidden id='label-upload' onChange={(event) => handleupload(event)} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} /> :
                                <span>
                                    preview image
                                </span>
                            }


                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;