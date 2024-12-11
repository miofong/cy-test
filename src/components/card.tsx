// task 2: create a user card component that takes a user object as props and displays the user's name, age, gender and remarks.

import React from 'react'
import User from "../interfaces/user"

interface CardProps {
  user: User;
}

export default function Card({ user }: CardProps) {
  return (
    <div className="border-2 rounded border-slate-800 p-2" >
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Remarks: {user.remarks}</p>
    </div>
  )
}
