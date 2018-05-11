import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class RandomChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { variants: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
  }

  handleChange(event) {
    const variants = event.target.value.split(' ');
    this.setState({ variants });
  }

  handleChoose() {
    const numVarians = this.state.variants.length;
    const randVariant = rand(numVarians);
    const choosen = this.state.variants[randVariant]; 
    alert(choosen);
  }

  isDisabled() {
    return !this.state.variants.filter((str) => str.length).length;
  }

  render() {
    return (<div>
        <ArrayToStringInput variants={this.state.variants}
                            handleChange={this.handleChange}
                            placeholder={'type variants here'} />
        <button onClick={this.handleChoose} disabled={this.isDisabled()}>Choose</button>
      </div>);
  }
}

function ArrayToStringInput(props) {
  const value = props.variants.join(' ');
  return <input type="text"
                value={value}
                onChange={props.handleChange}
                placeholder={props.placeholder} />;
}

ReactDom.render(
  <RandomChooser />,
  document.querySelector('[data-random-chooser]')
);
