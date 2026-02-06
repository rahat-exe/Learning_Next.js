"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { sendMessage } from '@/actions'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [message, setMessage] = useState('')

  const handleClick = async (formData) => {
    setIsSubmitting(true)
    setMessage("")

    const response = await sendMessage(formData)

    if(response.success){
      setMessage("Message send successfully")

      const form = document.getElementById("contact-form")
      form.reset()
    }else{
      setMessage(response.error || "Message not send")
    }
    setIsSubmitting(false)
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="contact-form" action={handleClick} className='space-y-4'>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" type="text" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" type="text" required />
            </div>
            <Button type="submit">Send message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactForm