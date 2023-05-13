import { Component } from "react";
import Profile from "./Components/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      id: 1,
      fullName: "Noussa", 
      bio: "Biographie",
      imgSrc: "https://img.freepik.com/photos-gratuite/joyeuse-femme-robe-violette-parmi-fleurs-margaret-violet_1150-20472.jpg?size=626&ext=jpg&ga=GA1.2.1346180195.1678882729&semt=ais",
      profession: "Developpeur web",
      advice: "Le contact avec la nature pour améliorer la concentration et la santé mentale",
      isShow: true
   };
  }
  toggleVisibility=()=>this.setState({isShow:!this.state.isShow})
  render() {
    return (
      <div>
          <button onClick={this.toggleVisibility}>Click</button>
          {this.state.isShow && <Profile  element={this.state}/>}
      </div>
    );
  }
}

export default App;