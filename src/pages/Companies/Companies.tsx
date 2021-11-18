import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies, getUnits } from "../../store/ducks/units/actions";
import { ReducerDataUnits } from "../../store/ducks/units/types";

import styles from "./Companies.module.css";

const Companies = () => {
  const dispatch = useDispatch();
  const units = useSelector(
    (state: ReducerDataUnits) => state.units.arrayUnits
  );
  const companies = useSelector(
    (state: ReducerDataUnits) => state.units.companies
  );

  const dd = units.map((iten: any) => {
    return {
      unit: iten.name,
      companyId: iten.companyId,
      id: iten.id,
    };
  });

  const merged = dd.map((screen) => ({
    ...companies.find((o) => o.id === screen.companyId),
    ...screen,
  }));

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/companies")
      .then((response) => dispatch(getCompanies(response.data)));

    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/units")
      .then((response) => dispatch(getUnits(response.data)));
  }, [dispatch]);

  return (
    <div className={styles.div}>
      {merged !== undefined &&
        merged.map((iten: any) => (
          <div key={iten.id} className={styles.container}>
            <span className={styles.text}>{iten.name}</span>
            <span>{iten.unit}</span>
          </div>
        ))}
    </div>
  );
};

export default Companies;
