import "./styles.css";
import React, { Fragment } from "react";

// Elementos JSX Agregados:
// const nombre = "Matias Epifanio";
// const elemento = <h1>Hola, {nombre}</h1>;
/*const usuario = {
  primerNombre: "Claudio",
  apellido: "Perez"
};
// const elemento = <h1>Hola, {usuario.primerNombre + " " + usuario.apellido}</h1>;
function obtenerSaludo(u) {
  if (u) {
    return <h1>Hola, {u.primerNombre + " " + u.apellido}</h1>;
  } else {
    return <h1>Hola Extraño</h1>;
  }
}*/
// const elemento = obtenerSaludo(usuario);

/* const elemento = (
  <div tabIndex="0">
    <h1>Hola!</h1>
    <h2>Genial Verte aqui</h2>
  </div>
); */

/* const elemento = (
  <div>
    <h1>Hola Mundo</h1>
    <h2>Es {new Date().toLocaleTimeString()}</h2>
  </div>
);
*/

/* function Welcome(props) {
  return <h1>Hola, {props.name}</h1>;
}*/

/* class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
const elemento = (
  <div>
    <Welcome name="Matias" />
    <Welcome name="Guido" />
    <Welcome name="Eduardo" />
  </div>
);
*/

/* function Comment(props) {
  return (
    <div>
      <div>{props.author}</div>
      <div>{props.titulo}</div>
    </div>
  );
} */

/* const elemento = <Comment author="Matias" titulo="Gorra" />; */

/* class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // Esta sintaxis nos asegura que `this` esta ligado dentro de handleClick
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}
const elemento = <LoggingButton />; */

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function LoginButton(props) {
  return <button onClick={console.log("Loguearse")}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={console.log("Desloguearse")}>Logout</button>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <Fragment>
        <UserGreeting />
        <LogoutButton />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <GuestGreeting />
      <LoginButton />
    </Fragment>
  );
}

const elemento = <Greeting isLoggedIn={true} />;

export default function App() {
  return elemento;
}
