import ContactList from '@/components/ContactList';
import React from 'react'

const Contacts = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className='text-center mt-5'>Contacts List</h1>
      <ContactList />
    </div>
  );
}

export default Contacts