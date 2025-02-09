import React from "react";

type Admin = {
    role: "admin";
    dashboardAccess: boolean;
  };
  
  type User = {
    role: "user";
    points: number;
  };
  
  type Person = Admin | User;
  
  const Dashboard = ({ person }: { person: Person }) => {
    if (person.role === "admin") {
      return <p>Admin Access: {person.dashboardAccess ? "Granted" : "Denied"}</p>;
    }
    return <p>User Points: {person.points}</p>;
  };
  
  // Usage Example
  export default function App() {
    const user: Person = { role: "user", points: 100 };
    return <Dashboard person={user} />;
  }
  