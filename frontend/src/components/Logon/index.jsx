import React, { useContext, useState } from "react";
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

export default function Logon() {
  const [Id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/sessions", {
        id: Id,
      });

      localStorage.setItem("ongId", Id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch {
      alert(`Falha no login, tente novamente`);
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logo} alt='Be the hero' />
        <form onSubmit={handleLogin}>
          <h1> Faça seu logon </h1>
          <input
            value={Id}
            onChange={(e) => setId(e.target.value)}
            placeholder='Sua id'
          />
          <button type='submit' className='button'>
            Entrar
          </button>
          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#E02041' /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt='Heroes' />
    </div>
  );
}
