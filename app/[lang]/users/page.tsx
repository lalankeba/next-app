"use client";
import { Link } from '@/routing';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 }
  });
  return res.json();
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const t = useTranslations('HomePage');

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Press <Link href="/users/new">{t('newUser')}</Link></p>
    </>
  )
}

export default UsersPage;