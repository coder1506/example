import '../styles/popup.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Cần thiết cho screen readers

function AddEmployeeModal({ isOpen, onRequestClose, addEmployee }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(), // Giả lập id duy nhất
      name,
      email,
      address,
      phone,
    };
    addEmployee(newEmployee);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Employee"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='form-input'>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='form-input'>
          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className='form-input'>
          <label>Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <br></br>
        <button type="button" onClick={onRequestClose}>Cancel</button>
        <button type="submit">Add</button>
      </form>
    </Modal>
  );
}

export default AddEmployeeModal;