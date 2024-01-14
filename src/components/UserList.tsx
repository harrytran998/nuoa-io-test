import { useEffect, useState } from "react";
import { useToggle } from "react-use";
import { globalFetch } from "../utils/fetch";
import { UserForm } from "./UserForm";
import type { UserModel } from "./UserForm/userform.schema";
import { Button } from "./shared/button";

export const UserList = () => {
  const [users, setUser] = useState<UserModel[]>([]);
  const [isOpenDialog, toggleDialog] = useToggle(false);

  useEffect(() => {
    getAllUser();
  }, []);

  const handleAddNewUser = () => {
    toggleDialog();
  };

  const handleUpdateUser = (userId: string) => {};

  const handleDeleteUser = (userId: string) => {};

  async function getAllUser() {
    try {
      const res = await globalFetch("http://localhost:5500/api/users");
      setUser(res);
    } catch (error) {
      console.log("getAllUser  👻  error:", error);
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <p>User management</p>
          <Button onClick={handleAddNewUser}>Create New User</Button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Career</th>
              <th>Career</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.career}</td>
                <td>{u.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpenDialog && <UserForm title="XX" isOpen={isOpenDialog} onAddSuccess={getAllUser} />}
    </>
  );
};
