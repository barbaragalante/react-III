import React, { Fragment, Component }from 'react'
import Card from '../components/Card/Card'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import ListaProdutos from '../mock/produtos'


class Produtos extends Component{
    constructor(){
        super();
        this.state = {
            value:"",
            produtos: ListaProdutos
        }
    }

    valorInput = (para)=>{
        let valor= para.target.value
        this.setState({value: valor})
        console.log(this.state.value)
    }

    pesquisar= ()=>{
        let nova= this.state.produtos.filter( pesq => pesq.title.includes(this.state.value))
        this.setState({
            produtos:nova
        })
        // this.setState({})
    }

    render(){
        return(
            <Fragment> 
                <Input
                placeholder="Pesquise seu produtor"
                tipo="text"
                change={this.valorInput}>
                </Input>
                <Button
                click={this.pesquisar}>
                Pesquisar
                </Button>
                <div className="">
                    {this.state.produtos.map(item => (
                        <Card key={item.id} produto={item}/>
                    ))}
                </div>
            </Fragment>
        )   
    }
}

export default Produtos
