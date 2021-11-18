import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { searchAssets } from "../../store/ducks/assets/assets";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import axios from "axios";

import styles from "./Product.module.css";
import Form from "../Form/Form";

const Product = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const data = useSelector((state: any) => state.assets.search);

  const [toEdit, setToEdit] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tractian/fake-api/assets/${params.id}`
      )
      .then((response) => dispatch(searchAssets(response.data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const metrics = {
    title: {
      text: "Metrics",
    },
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "Tempo de atividade",
        },
      },
    ],
    series: [
      {
        name: "Total Collects Uptime",
        data: [0, data?.metrics?.totalCollectsUptime],
      },
      {
        name: "Total Uptime",
        data: [0, data?.metrics?.totalUptime],
      },
    ],
  };

  const specifications = {
    chart: {
      type: "column",
    },
    title: {
      text: "Specifications",
    },
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "°C - kWh - RPM",
        },
      },
    ],
    series: [
      {
        name: "Temperatura Máxima °C",
        data: [data?.specifications?.maxTemp],
      },

      {
        name: "Potência kWh",
        data: [data?.specifications?.power],
      },

      {
        name: "RPM",
        data: [data?.specifications?.rpm],
      },
    ],
  };

  const healthscore = {
    chart: {
      type: "bar",
    },
    title: {
      text: "HealthScore",
    },
    series: [
      {
        name: "HealthScore",
        data: [data?.healthscore],
      },
    ],
  };

  return (
    <div className={styles.form} id="topo">
      {toEdit === true && (
        <Form
          toEdit={true}
          setToEdit={setToEdit}
          id={params.id}
          text={"product"}
        />
      )}

      <div className={styles.div}>
        <div key={data?.id} className={styles.container}>
          <img src={data?.image} alt="motor" className={styles.img} />
          <div className={styles.card}>
            <div>
              <span className={styles.title}>{data?.name}</span>
              <div className={styles.span}>
                <span className={styles.titleIten}>Sensor</span>
                <span>{data?.sensors}</span>
              </div>
              <div className={styles.span}>
                <span className={styles.titleIten}>Status</span>
                <span>{data?.status}</span>
              </div>
              <div className={styles.span}>
                <span className={styles.titleIten}>Healthscore</span>
                <span>{data?.healthscore}%</span>
              </div>
            </div>

            <div>
              <span className={styles.title}>Specifications</span>
              <div className={styles.span}>
                <span className={styles.titleIten}>Temp. máx</span>
                <span>{data?.specifications?.maxTemp}°C</span>
              </div>
              {data?.specifications?.power !== "0" &&
                data?.specifications?.power !== undefined && (
                  <div className={styles.span}>
                    <span className={styles.titleIten}>Potência</span>
                    <span>{data?.specifications?.power} kWh</span>
                  </div>
                )}

              {data?.specifications?.rpm && (
                <div className={styles.span}>
                  <span className={styles.titleIten}>RPM</span>
                  <span>{data?.specifications?.rpm}</span>
                </div>
              )}
            </div>

            <div>
              <span className={styles.title}>Métricas Coletas</span>
              <div className={styles.span}>
                <span className={styles.titleIten}>Tempo</span>
                <span>{data?.metrics?.totalCollectsUptime}</span>
              </div>
              <div className={styles.span}>
                <span className={styles.titleIten}>Horas</span>
                <span>{data?.metrics?.totalUptime.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <a
            href="#topo"
            className={styles.edit}
            type="button"
            onClick={() => setToEdit(true)}
          >
            Editar
          </a>

          <div className={styles.metrics}>
            <HighchartsReact highcharts={Highcharts} options={metrics} />
          </div>

          <div className={styles.metrics}>
            <HighchartsReact highcharts={Highcharts} options={specifications} />
          </div>

          <div>
            <HighchartsReact highcharts={Highcharts} options={healthscore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
