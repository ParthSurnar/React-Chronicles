import React from "react";
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  // Pick only 'name' and 'email'
  type UserPreview = Pick<User, "name" | "email">;
  
  const user: UserPreview = {
    name: "Parth",
    email: "parth@example.com",
  };
  