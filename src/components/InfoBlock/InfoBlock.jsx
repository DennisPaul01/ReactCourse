import React, { useState } from "react";

import { BsThreeDotsVertical, BsPencilSquare } from "react-icons/bs";
import { BiSolidTrash } from "react-icons/bi";

import editImg from "../../assets/school.png";
import deleteImg from "../../assets/delete.png";

import style from "./InfoBlock.module.css";
import Modal from "../Modal/Modal";

export default function InfoBlock({ type, info, onDelete, onEdit }) {
  const [modal, setModal] = useState(false);
  const [newName, setNewName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("edit");

  const openModalEdit = () => {
    setIsModalOpen(true);
    setModal(false);
    setTypeModal("edit");
  };

  const openModalDelete = () => {
    setIsModalOpen(true);
    setModal(false);
    setTypeModal("delete");
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModal = () => {
    setModal(!modal);
    console.log("Salut");
  };

  const handlerDelete = () => {
    onDelete(info);
    setIsModalOpen(false);
  };

  const handlerEdit = () => {
    onEdit(info, newName);
    setIsModalOpen(false);
  };

  return (
    <div className={style.info}>
      <p>{info}</p>
      <button onClick={handleModal}>
        <BsThreeDotsVertical />
      </button>

      {modal && (
        <div className={style.modal}>
          <button onClick={openModalEdit}>
            <BsPencilSquare />
            <p>Edit</p>
          </button>
          <button onClick={openModalDelete}>
            <BiSolidTrash />
            <p>Delete</p>
          </button>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        {typeModal === "edit" ? (
          <>
            <img src={editImg} width="40" />
            <h2>EDIT {type} INFORMATION</h2>
            <label>
              {type}
              <br />
              <input
                type="text"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
                name={type}
                value={newName}
                placeholder={type}
              />
            </label>
            <button onClick={handlerEdit}>Save</button>
          </>
        ) : (
          <>
            <img src={deleteImg} width="40" />
            <h2>{type} REMOVAL</h2>
            <p>
              All materials and information about the faculty will be deleted
            </p>
            <div>
              <button onClick={null}>NO</button>
              <button onClick={handlerDelete}>YES</button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
