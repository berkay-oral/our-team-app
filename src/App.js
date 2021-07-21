import logo from './logo.svg';
import './App.css';
import Karticerik from './Karticerik';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <section>
          <div className="container">
             <div className="row  ">
                <div className="col-lg-6 mx-auto text-center mt-4 ">
                  <div className="card">
                     <h2 className="card-title pt-4">EKİBİMİZ</h2>
                    <hr/>

                   <div className="card-content">
                        <Karticerik />
                   </div>

                  </div>
                </div>
             </div>
          </div>
      </section>    
  )
}

export default App;
