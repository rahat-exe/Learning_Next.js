import ContactList from '@/components/ContactList';
import ContactStats from '@/components/ContactStats';
import React from 'react'

const Contacts = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center mt-5">Contacts List</h1>
      <ContactStats />
      <ContactList />
    </div>
  );
}

export default Contacts