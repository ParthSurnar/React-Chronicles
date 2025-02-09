type User = {
    id: number;
    name: string;
    email: string;
  };
  
  const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  };
  
  const UsersList = async () => {
    const users = await fetchUsers();
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    );
  };
  