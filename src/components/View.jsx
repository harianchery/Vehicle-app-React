import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [data, changeData] = useState(
        [
            {"Name":"Car","RegNo":"KL42874","Type":"Four Wheeler","image":"https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6"},
            {"Name":"Bike","RegNo":"KL4274","Type":"Two Wheeler","image":"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg"},
            {"Name":"Jeep","RegNo":"KL41574","Type":"Four Wheeler","image":"https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/174977/wrangler-facelift-right-front-three-quarter.jpeg?isig=0&q=80"}


        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {
                                data.map(
                                    (value, index) =>{
                                        return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card" >
                                            <img src={value.image} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">Name:{value.Name}</h5>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Reg No:{value.RegNo}</li>
                                                <li class="list-group-item">Category:{value.Type}</li>
                                                
                                            </ul>
                                            <div class="card-body">
                                                <a href="#" class="card-link">View </a>
                                                
                                            </div>
                                        </div>
                                    </div>
        
                                    }
                           )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View