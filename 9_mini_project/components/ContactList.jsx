import { getMessage, updateMessageStatus } from '@/actions'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const  ContactList = async () => {
  const contacts = await getMessage()
  // console.log(contacts)
  return (
    <div>
      <h1>Contact List ({contacts.length})</h1>
      {contacts.length === 0 ? (
        <div>
          <h1>No message yet!</h1>
        </div>
      ) : (
        <div>
          {contacts.map((contact) => (
            <Card key={contact._id}>
              <CardHeader>
                <CardTitle>{contact.subject}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{contact.message}</p>
                <p>
                  Send by {contact.name} from {contact.email}
                </p>
                {/* <p>{contact.createdAt.toDateTimeString}</p> */}
                <p>Status : {contact.status}</p>
                {contact.status === "new" && (
                  <form
                    action={async () => {
                      "use server";
                      await updateMessageStatus(contact._id, "read");
                    }}
                  >
                    <Button type="submit">Mark as read</Button>
                  </form>
                )}

                {contact.status === "read" && (
                  <form
                    action={async () => {
                      "use server";
                      await updateMessageStatus(contact._id, "replied");
                    }}
                  >
                    <Button type="submit">Mark as replied</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList