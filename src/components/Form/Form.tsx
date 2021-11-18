import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addAssets, updateAssets } from "../../store/ducks/assets/assets";

import styles from "./Form.module.css";
import axios from "axios";

const Form = ({ toEdit, setToEdit, id, text }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state: any) => state.assets.search);

  const inputName = useRef<HTMLInputElement>(null);
  const inputSensors = useRef<HTMLInputElement>(null);
  const inputStatus = useRef<HTMLInputElement>(null);
  const inputMaxTemp = useRef<HTMLInputElement>(null);
  const inputPower = useRef<HTMLInputElement>(null);
  const inputRpm = useRef<HTMLInputElement>(null);
  const inputhealthscore = useRef<HTMLInputElement>(null);
  const inputTotalCollectsUptime = useRef<HTMLInputElement>(null);
  const inputTotalUptime = useRef<HTMLInputElement>(null);
  const inputImg = useRef<HTMLInputElement>(null);

  const cleanForm = () => {
    if (inputName && inputName.current) {
      inputName.current.value = "";
    }

    if (inputSensors && inputSensors.current) {
      inputSensors.current.value = "";
    }

    if (inputStatus && inputStatus.current) {
      inputStatus.current.value = "";
    }

    if (inputMaxTemp && inputMaxTemp.current) {
      inputMaxTemp.current.value = "";
    }

    if (inputhealthscore && inputhealthscore.current) {
      inputhealthscore.current.value = "";
    }

    if (inputTotalCollectsUptime && inputTotalCollectsUptime.current) {
      inputTotalCollectsUptime.current.value = "";
    }

    if (inputTotalUptime && inputTotalUptime.current) {
      inputTotalUptime.current.value = "";
    }

    if (inputPower && inputPower.current) {
      inputPower.current.value = "";
    }

    if (inputRpm && inputRpm.current) {
      inputRpm.current.value = "";
    }

    if (inputImg && inputImg.current) {
      inputImg.current.value = "";
    }
  };

  const update = (e: any) => {
    e.preventDefault();

    interface Input {
      name: string | undefined;
      sensors: string | undefined;
      status: string | undefined;
      maxTemp: number | undefined;
      power: number | undefined;
      rpm: number | undefined;
      healthscore: number | undefined;
      totalCollectsUptime: number | undefined;
      totalUptime: number | undefined;
      image: string | undefined;
    }

    const requisicao: Input = {
      name: inputName.current?.value,
      sensors: inputSensors.current?.value,
      status: inputStatus.current?.value!,
      maxTemp: Number(inputMaxTemp.current?.value),
      power: Number(inputPower.current?.value),
      rpm: Number(inputRpm.current?.value),
      healthscore: Number(inputhealthscore.current?.value),
      totalCollectsUptime: Number(inputTotalCollectsUptime.current?.value),
      totalUptime: Number(inputTotalUptime.current?.value),
      image: inputImg.current?.value,
    };

    if (requisicao.name !== "") {
      requisicao.name = inputName.current?.value;
    } else {
      requisicao.name = data?.name;
    }

    if (requisicao.sensors !== "") {
      requisicao.sensors = inputSensors.current?.value;
    } else {
      requisicao.sensors = data?.sensors;
    }

    if (requisicao.status !== "") {
      requisicao.status = inputStatus.current?.value;
    } else {
      requisicao.status = data?.status;
    }

    if (requisicao.maxTemp !== 0) {
      requisicao.maxTemp = Number(inputMaxTemp.current?.value);
    } else {
      requisicao.maxTemp = data?.specifications?.maxTemp;
    }

    if (requisicao.healthscore !== 0) {
      requisicao.healthscore = Number(inputhealthscore.current?.value);
    } else {
      requisicao.healthscore = data?.healthscore;
    }

    if (requisicao.totalCollectsUptime !== 0) {
      requisicao.totalCollectsUptime = Number(
        inputTotalCollectsUptime.current?.value
      );
    } else {
      requisicao.totalCollectsUptime = data?.metrics?.totalCollectsUptime;
    }

    if (requisicao.totalUptime !== 0) {
      requisicao.totalUptime = Number(inputTotalUptime.current?.value);
    } else {
      requisicao.totalUptime = data?.metrics?.totalUptime;
    }

    if (requisicao.power !== 0) {
      requisicao.power = Number(inputPower.current?.value);
    } else {
      requisicao.power = data?.specifications?.power;
    }

    if (requisicao.rpm !== 0) {
      requisicao.rpm = Number(inputRpm.current?.value);
    } else {
      requisicao.rpm = data?.specifications?.rpm;
    }

    if (requisicao.image !== "") {
      requisicao.image = inputImg.current?.value;
    } else {
      requisicao.image = data?.image;
    }

    const asset = {
      name: requisicao.name,
      sensors: requisicao.sensors,
      status: requisicao.status,
      image: requisicao.image,
      specifications: {
        maxTemp: requisicao.maxTemp,
        power: requisicao.power,
        rpm: requisicao.rpm,
      },
      metrics: {
        totalCollectsUptime: requisicao.totalCollectsUptime,
        totalUptime: requisicao.totalUptime,
      },
      healthscore: requisicao.healthscore,
    };

    localStorage.setItem("asset", JSON.stringify(asset));
    let storage = localStorage.getItem("asset");
    let storageAsset = storage !== null && JSON.parse(storage);

    if (text === "product") {
      axios
        .patch(
          `https://my-json-server.typicode.com/tractian/fake-api/assets/${id}`,
          storageAsset
        )
        .then((response) => {
          if (response.status === 200) {
            dispatch(updateAssets(response.data));
            setToEdit(false);
          }
        });
    } else {
      axios
        .post(
          "https://my-json-server.typicode.com/tractian/fake-api/assets",
          storageAsset
        )
        .then((response) => dispatch(addAssets(response.data)));

      navigate("/");
    }

    cleanForm();
  };
  return (
    <div>
      {toEdit === true && (
        <form className={styles.form}>

          <div className={styles.input}>
            <input type="text" placeholder="Modelo" ref={inputName} />
            <input type="text" placeholder="Sensors" ref={inputSensors} />
            <input type="text" placeholder="Status" ref={inputStatus} />
            <input type="text" placeholder="Temp. máx" ref={inputMaxTemp} />
            <input type="text" placeholder="Power" ref={inputPower} />
            <input type="text" placeholder="RPM" ref={inputRpm} />
            <input
              type="text"
              placeholder="HealthScore"
              ref={inputhealthscore}
            />
            <input
              type="text"
              placeholder="Horas de Coletas"
              ref={inputTotalCollectsUptime}
            />
            <input
              type="text"
              placeholder="Total de Coletas"
              ref={inputTotalUptime}
            />
            {text === "add" && (
              <input type="text" placeholder="Link Imagem" ref={inputImg} />
            )}
          </div>

          {text === "add" ? (
            <div className={styles.button}>
              <button type="submit" onClick={update}>
                Cadastrar
              </button>
            </div>
          ) : (
            <div className={styles.button}>
              <button type="submit" onClick={update}>
                Atualizar
              </button>
              <button type="button" onClick={() => setToEdit(false)}>
                Cancelar
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
