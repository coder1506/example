import React, { useState } from 'react';
import '../styles/MainSection.css';
import AddEmployeeModal from './popup.js';
import employees from './data.js';

const MainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeesData, setEmployees] = useState(employees);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addEmployee = (newEmployee) => {
    setEmployees([...employeesData, newEmployee]);
  };
  return (
      <div>
        <div className='table-header'>
          <div className='inline table-title'>Manage <b>Employees</b></div>
          <div>
              <button className='del-btn'>Delete</button>
              <button className='add-btn' onClick={openModal}>Add New Employee</button>
          </div>
        </div>
          <table className='table-container' border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((employee, index) => (
                 <tr>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phone}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                </tr>
              ))}
            </tbody>
         </table>
         <div className='table-footer'>
              <div className='inline footer-left'>showing <b>5</b> out of <b>25</b> entries</div>
              <div className='inline footer-right'>
                    <div className='inline ml-8'>Previous</div>
                    <div className='inline ml-8 nb'>1</div>
                    <div className='inline ml-8 nb'>2</div>
                    <div className='inline ml-8 nb'>3</div>
                    <div className='inline ml-8 nb'>4</div>
                    <div className='inline ml-8 nb'>5</div>
                    <div className='inline ml-8'>Next</div>
              </div>
         </div>
         <AddEmployeeModal isOpen={isModalOpen} onRequestClose={closeModal} addEmployee={addEmployee}/>
      </div>
  );
};

export default MainSection;