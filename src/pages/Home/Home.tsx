import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAssets,
  deleteNew,
  getActions,
} from "../../store/ducks/assets/assets";
import {
  ItensActive,
  ReducerDataActions,
} from "../../store/ducks/assets/types";
import { Link } from "react-router-dom";

import axios from "axios";
import styles from "./Home.module.css";
import { getUsers } from "../../store/ducks/users/actions";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: ReducerDataActions) => state.assets.array);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/assets")
      .then((response) => dispatch(getActions(response.data)));

    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/users")
      .then((response) => dispatch(getUsers(response.data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remove = (id: any) => {
    console.log("id", id);

    if (id > 10) {
      axios
        .get("https://my-json-server.typicode.com/tractian/fake-api/assets")
        .then((response) => dispatch(deleteNew(response.data)));
    } else {
      axios
        .delete(
          `https://my-json-server.typicode.com/tractian/fake-api/assets/${id}`
        )
        .then((response) => {
          if (response.status === 400) {
            console.log("ola mundo");
          }
          console.log(response.status);
          dispatch(deleteAssets(id));
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
  };

  return (
    <div className={styles.div}>
      {data !== undefined &&
        data.map((iten: ItensActive) => (
          <div key={iten.id} className={styles.container}>
            <span className={styles.title}>{iten.name}</span>
            <img src={iten.image} alt="motor" className={styles.img} />
            {iten.id <= 10 && (
              <Link to={`/product/${iten.id}`} className={styles.link}>
                Informações
              </Link>
            )}
            <span onClick={() => remove(iten.id)} className={styles.button}>
              Excluir
            </span>
          </div>
        ))}
    </div>
  );
};

export default Home;
