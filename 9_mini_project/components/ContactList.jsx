import { getMessage } from '@/actions'
import React from 'react'

const  ContactList = async () => {
  const contacts = await getMessage()
  console.log(contacts)
  return (
    <div>
      <h1>ContactList</h1>
    </div>
  );
}

export default ContactList