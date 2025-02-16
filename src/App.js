
import React, { Component } from 'react';
import './component/index.css';
import cookieImg from './asseds/biscoito.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phraseText: '',
    };
    this.phrases = [
      "Acredite na magia dos novos começos.",
      "Seja a luz que você procura no mundo.",
      "A vida é uma tela em branco, pinte a sua obra-prima.",
      "Abrace as oportunidades que surgem em seu caminho.",
      "Seu sorriso é a chave que abre portas.",
      "A persistência realiza o impossível.",
      "Ame-se em primeiro lugar, e o resto se encaixa.",
      "A gratidão transforma o ordinário em extraordinário.",
      "Confie na força do seu potencial infinito.",
      "Seu futuro é tão brilhante quanto a sua fé.",
      "Grandes conquistas começam com pequenos passos.",
      "A beleza está nos olhos de quem sabe ver.",
      "Transforme seus medos em combustível para vencer.",
      "Cada dia é uma página nova da sua história.",
      "Acredite no poder dos seus sonhos.",
      "A felicidade está nas coisas simples da vida.",
      "Você é capaz de mais do que imagina.",
      "Deixe sua essência brilhar intensamente.",
      "O tempo cura, a esperança renova.",
      "Semeie bondade e colha amor."
    ];
  }

  handleCookieClick = () => {
    this.setState({
      phraseText: this.phrases[Math.floor(Math.random() * this.phrases.length)]
    });
  };

  render() {
    return (
      <div className='container'>
        <img src={cookieImg} alt="Fortune Cookie" className='img_container'/>
        <Button 
          label="Abrir Biscoito" 
          onClick={this.handleCookieClick}
        />
        <h3 className='phraseText'>{this.state.phraseText}</h3>
      </div>
    );
  }
}

const Button = ({ onClick, label }) => (
  <div>
    <button onClick={onClick}>{label}</button>
  </div>
);