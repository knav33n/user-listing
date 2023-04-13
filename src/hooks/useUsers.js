import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeUser = (username) => {
    setUsers(users.filter((u) => u.username !== username));
  };

  const updateUser = (userId, data) =>
    setUsers(
      users.map((user) => (user.id === userId ? { ...user, ...data } : user))
    );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((r) => {
        setUsers(r);
      });
  }, []);

  useEffect(() => {
    if (users.length) {
      setIsLoading(false);
    }
  }, [users]);

  return { users, isLoading, removeUser, updateUser };
};

export default useUsers;
