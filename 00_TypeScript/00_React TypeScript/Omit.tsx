type UserType = {
    id: number;
    name: string;
    email: string;
  };
  
  // Remove 'id'
  type UserWithoutID = Omit<UserType, "id">;
  
  const user: UserWithoutID = {
    name: "Parth",
    email: "parth@example.com",
  };

  console.log(user);
  