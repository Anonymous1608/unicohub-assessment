import React, { useEffect, useState } from 'react'
import Usercard from './Usercard';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://dummyjson.com/users", {
          mode: "cors",
        });
        const res = await data.json();
        setUsers(res.users.slice(0, 20));
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <div className="text-white bg-black mx-auto w-full  pt-[120px] text-center flex flex-col gap-10">
        <h1 className="font-light  text-4xl">
            Users Data
        </h1>
      <div className="min-w-[300px] h-max lg:grid-cols-[repeat(4,minmax(200px,1fr))] flex-shrink-0 p-4  grid  grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
        {users.map((user) => (
          <Usercard key={user.id} user={user} />
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Users
