type User = {
    id: number;
    name: string;
    email: string;
};

// Make everything optional
type OptionalUser = Partial<User>;

const updateUser = (user: OptionalUser) => {
    console.log(user);
};

updateUser({ name: "Parth" }); // ✅ Allowed because all fields are optional
updateUser({}); // ✅ Allowed because all fields are optional
updateUser({ name: "Parth", email: " [email protected]" }); // ✅ Allowed because all fields are optional  