import React, {Component} from 'react';
import Search from './Search'
import './App.css';
import axios from "axios";
import Infos from "./Infos"

const key = '6e22fed80820db920d264c490eba855e'


class App extends Component {
  state = {
    input:'',
    json:{},
    error:"",
    lockRequest: false
  }
  componentWillMount(){
    this.getDataFromApi();
  }
  getDataFromApi = ()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input===""?"Paris":this.state.input}&appid=${key}`)
    .then(response => {
      console.log(response);
      this.setState({json:response, error:""}, () => {

      })
    })
    .catch(error =>{
      console.log(error);
      this.setState({error:"Cette ville n'existe pas !", json:""}, ()=>{})
    })
  }
  inputStock = (event) =>{
    this.setState({input:event.target.value}, ()=>{
      if(!this.state.lockRequest){
        this.setState({lockRequest:true})
        setTimeout(()=>{
          this.clickSearch();
          this.setState({lockRequest:false})
        }, 2000)

      }
      // ()=>{} permet de relancer la fonction car des fois la fonction met du temps à charger donc on fait un call back pour relancer la fonction et avoir les vraies données.
    })
    
  }

  clickSearch = ()=>{
    this.getDataFromApi()
  }

  render() {
    const renderInfos= () => {
      if(this.state.json.data){
        return <Infos bidule={this.state.json.data}/>
      }
    }
    return (
      <div>
        <Search chouette={this.inputStock} ville={this.clickSearch}/>
        <p>{this.state.error}</p>
        {renderInfos()}
      </div>
    );
  }
}

export default App;
