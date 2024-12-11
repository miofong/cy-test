// task 3.1: complete the getUsers() function to retrieve the data from API 
// API URL = "https://my-json-server.typicode.com/Kenzo800/interview-test-api/users"

"use client";
import User from "@/interfaces/user"
import Card from "@/components/card"
import { useState, useEffect } from "react";

async function getUsers(){
  const response = await fetch("https://my-json-server.typicode.com/Kenzo800/interview-test-api/users");
  const users: User[] = await response.json();

  return users || [];
}

// task 3.2: handle the data and show it in card view correctly
export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  }

  return (
    <>
      <main className="m-4">
        <div className="grid grid-cols-4 gap-2">
          {users.map((user: User) => (
            <Card user={user} />
          ))}
        </div>
      </main>
    </>
  );
}
