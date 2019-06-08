import React, { Component } from "react";

class Formulario extends Component {
  //Crear refs
  brandRef = React.createRef();
  yearRef = React.createRef();
  basicPlanRef = React.createRef();
  fullPlanRef = React.createRef();

  handle = (e) => {
    e.preventDefault();

    //Obtener radioButton seleccionado
    const plan = this.basicPlanRef.current.checked ? 'basico':'completo';

    //Objeto para imprimir auto
    const infoAuto = {
      brand: this.brandRef.current.value,
      year: this.yearRef.current.value,
      plan: plan 
    }

    console.log(infoAuto);
  }

  render() {
    return (
      <form className="cotizar-auto" onSubmit={this.handle}>
        <div className="campo">
          <label>Marca</label>
          <select name="marca" ref={this.brandRef}>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </select>
        </div>

        <div className="campo">
          <label>Año</label>
          <select name="year" ref={this.yearRef}>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
          </select>
        </div>
        <div className="campo">
          <label>Plan:</label>
          <input type="radio" name="plan" value="basico" ref={this.basicPlanRef} /> Básico
          <input type="radio" name="plan" value="completo" ref={this.full} /> Completo
        </div>

        <button type="submit" className="boton">
          Cotizar
        </button>
      </form>
    );
  }
}

export default Formulario;
