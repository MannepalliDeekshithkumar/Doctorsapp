import Navbar from "./assets/components/Navbar"
import Section from "./assets/components/Section"
import Doctorcard from "./assets/components/Doctorcard"
import Adddoctor from "./assets/components/Adddoctor"
function App(){

  return(
    
    <div>
     
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>

        <Doctorcard name='kanna' specialization='psychology' gender='male'/>
        <Doctorcard name='geethu' specialization='cardio' gender='female'/>
        <Doctorcard name='varshu' specialization='nuerology' gender='female'/>
        <Doctorcard name='revi' specialization='ENT' gender='male'/>

      </div>
      <Adddoctor/>
    </div>

  )
}
export default App