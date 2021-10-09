
export default function Conclusao(props) {

    const pedido = props.location.state;
  
    return (
      <div className="container">
        <h1> Sua compra foi concluída!! </h1>
  
        <br />
        <br />
  
        <h3>
          Parabéns <span> {pedido.cliente} </span>, seu pedido 
          <span> {pedido.numero} </span> foi concluído e a 
          previsão de entrega está para o dia 
          <span> {pedido.dataEntrega} </span>.
        </h3>
  
  
        <br />
        <button> Voltar </button>
        
      </div>
    )
  }