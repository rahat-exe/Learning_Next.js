import { getStats } from '@/actions';
import React from 'react'

const ContactStats = async () => {
    const stats = await getStats(); 
    console.log(stats)
  return (
    <div className="flex justify-between border border-gray-700 w-full p-5">
      <div className="border border-gray-600 px-10 py-5">Total: {stats.total}</div>
      <div className="border border-gray-600 px-10 py-5">New: {stats.totalNew}</div>
      <div className="border border-gray-600 px-10 py-5">Read: {stats.totalRead}</div>
      <div className="border border-gray-600 px-10 py-5">
       Replied: {stats.totalReplied}
      </div>
    </div>
  );
}

export default ContactStats