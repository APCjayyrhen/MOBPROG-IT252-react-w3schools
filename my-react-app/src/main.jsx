import { createRoot } from 'react-dom/client'

const users = [
  { id: 1, name: 'Jayyrhen', age: 30 },
  { id: 2, name: 'labine', age: 25 },
  { id: 3, name: 'micael', age: 35 }
];

function UserList() {
  return (
    <ul>
      {users.map(user => 
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <UserList />
)
