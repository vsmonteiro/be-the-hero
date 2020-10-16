import React, { useState, useEffect } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./styles.css";
import api from "../../services/api";

export default function Profile() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((res) => {
        setIncidents(res.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch {
      alert("Erro ao deletar caso");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className='profile-container'>
      <header>
        <img src={logo} alt='Be the hero' />
        <span> Bem vinda, {ongName} </span>
        <Link to='/incidents/new' className='button'>
          Cadastrar novo caso
        </Link>
        <button>
          <FiPower onClick={handleLogout} size={18} color='#E02041' />
        </button>
      </header>

      <h1>
        {" "}
        Casos cadastrados
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id}>
              <strong> CASO: </strong>
              <p> {incident.title} </p>
              <strong> DESCRIÇÃO: </strong>
              <p> {incident.description} </p>
              <strong> VALOR: </strong>
              <p>
                {" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(incident.value)}{" "}
              </p>
              <button>
                <FiTrash2
                  onClick={() => handleDeleteIncident(incident.id)}
                  size={20}
                  color='#a8a8b3'
                />
              </button>
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}
