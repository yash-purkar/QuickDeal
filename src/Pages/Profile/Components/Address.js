import React, { useState } from 'react'
import './Address.css'
import { AddressForm } from './AddressForm/AddressForm'
import { AddressState } from '../../../Contexts/Address/AddressContext';
export const Address = () => {
  const [isHideForm, setIsHideForm] = useState(true);
  const { addressState: { addresses }, addressDispatch } = AddressState();
  const [selectedAddrId, setSelectedAddrId] = useState();

  const handleEdit = (id) => {
    setIsHideForm(false);
    const selectedAddress = addresses.find((addr) => addr.id === id);
    console.log(selectedAddress)
    setSelectedAddrId(selectedAddress.id)

    addressDispatch({ type: "SELECT_ADDRESS_TO_EDIT", payload: selectedAddress })
  }

  return (
    <div className='flex justify-center  '>
      <div className='width-100'>
        <div className='flex justify-between bottom-border-1 margin-bottom-1'>
          <h2 className='profile-head my-addr margin-bottom-1'>My Addresses</h2>
          <h4 className='margin-bottom-1 cursor-pointer add-new-address' onClick={() => setIsHideForm(false)}>Add New Address+</h4>
        </div>
        {
          addresses?.map((addr, i) => {
            const { name, street, cityName, state, country, postalCode, mobileNumber
            } = addr;
            return (
              <div className='margin-bottom-1 bottom-border-1' key={i}>
                <p className='profile-label address-user-name letter-spacing'>{name}</p>

                <div className='font-sm flex direction-column'>
                  <span className='capitalize'>{street}</span>
                  <span className='capitalize'>{cityName},{state} . {postalCode}</span>
                  <span className='capitalize'>{country}</span>
                  <span className='capitalize'> Phone Number : {mobileNumber}</span>
                </div>

                <div>
                  <button className='address-edit letter-spacing cursor-pointer' onClick={() => handleEdit(addr.id)}>Edit</button>

                  <button className='address-remove letter-spacing cursor-pointer' onClick={() => addressDispatch({ type: "REMOVE_ADDRESS", payload: addr.id })}>Remove</button>
                </div>
              </div>
            )
          })
        }
      </div>
      {!isHideForm && <AddressForm setIsHideForm={setIsHideForm} selectedAddrId={selectedAddrId} setSelectedAddrId={setSelectedAddrId} />}

    </div>
  )
}