import React from "react";
import { useSelector } from "react-redux";
import { ItensUsers, ReducerDataUsers } from "../../store/ducks/users/types";

import styles from "./Users.module.css";

const Users = () => {
  const data = useSelector((state: ReducerDataUsers) => state.users.arrayUsers);

  return (
    <div className={styles.div}>
      {data !== undefined &&
        data.map((iten: ItensUsers) => (
          <div key={iten.id} className={styles.container}>
            <span>{iten.name}</span>
            <span>{iten.email}</span>
          </div>
        ))}
    </div>
  );
};

export default Users;
