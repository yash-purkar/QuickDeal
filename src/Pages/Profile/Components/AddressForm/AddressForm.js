import React, { useState } from 'react';
import './AddressForm.css'
import { AddressState } from '../../../../Contexts/Address/AddressContext';
import { success } from '../../../../Services/Toasts/ToastServices';

export const AddressForm = ({ setIsHideForm, selectedAddrId, setSelectedAddrId }) => {

  const { addressDispatch, addressState: { addressDetails, addresses } } = AddressState();

  const [inputs, setInputs] = useState(addressDetails);

  const { name, street, cityName, state, country, postalCode, mobileNumber } = inputs;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }))
  }



  const handleAdd = () => {
    if (name && street && cityName && state && country && postalCode && mobileNumber) {
      if (selectedAddrId) {
        const updatedAddressArr = addresses.map(addr => addr.id === selectedAddrId ? { ...inputs } : addr);
        addressDispatch({ type: "UPDATE_ADDRESS", payload: updatedAddressArr })
      }
      else {
        addressDispatch({ type: "ADD_NEW_ADDRESS", payload: { ...inputs, id: selectedAddrId ? selectedAddrId : new Date().getTime().toString() } })
        success("Addres Added")
      }
      setIsHideForm(true);
    }
    else {
      alert("Fill the details")
    }
    addressDispatch({ type: "CLEAR_ADDRESS_DETAILS" })
    setSelectedAddrId(null)
  }


  const handleDummyAddress = () => {
    setInputs({
      name: "John Doe",
      street: "FC, Road",
      cityName: "Mumbai",
      state: "Maharashtra",
      country: "India",
      postalCode: 411258,
      mobileNumber: 7798745845,
    })
  }

  const handleCancle = () => {
    setIsHideForm(true)
    addressDispatch({ type: "CLEAR_ADDRESS_DETAILS" })
    setSelectedAddrId(null)
  }

  return (
    <div className='addr-form-main'>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className='address-form-container flex direction-column '>
          <h3 className='text-center margin-bottom-1'>Add New Address</h3>

          <input type="text" placeholder='Name' className='address-input padding-1' name='name' onChange={handleInputChange} value={name} />

          <input type="text" placeholder='House No. Street' className='address-input padding-1' name="street" onChange={handleInputChange} value={street} />

          <input type="text" placeholder='City' className='address-input padding-1' name='cityName' onChange={handleInputChange} value={cityName} />

          <input type="text" placeholder='State' className='address-input padding-1' name='state' onChange={handleInputChange} value={state} />

          <input type="text" placeholder='Country' className='address-input padding-1' name='country' onChange={handleInputChange} value={country} />

          <input type="number" placeholder='Postal Code' className='address-input padding-1' name='postalCode' onChange={handleInputChange} value={postalCode} />

          <input type="number" placeholder='Mobile Number' className='address-input padding-1' name='mobileNumber' onChange={handleInputChange} value={mobileNumber} />

          <div className='flex wrap justify-around top-padding-08'>

            <button className='addr-add-btn cursor-pointer' onClick={handleAdd}>Save</button>

            <button className='addr-cancel-btn cursor-pointer' onClick={handleCancle}>Cancel</button>

            <button className='addr-dummy-data cursor-pointer' onClick={handleDummyAddress}>Dummy Data</button>
          </div>
        </div>
      </form>
    </div>
  )
}
