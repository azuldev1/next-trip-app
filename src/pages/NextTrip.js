import axios from 'axios';
import { useState, useEffect } from 'react';
 
function TripForm() {
  const [form, setForm] = useState({
    selectedRoute:'',
    selectedDirection: '',
  });
  const [route, setRoute] = useState([]);
  const [routeByAgency, setRouteByAgency] = useState([]);

  const [direction, setDirection] = useState([]);
  const [stopInfo, setStopInfo] = useState([]);

  useEffect( () => {
    async function getRouteData(){
      const fetchRoute = await axios(
        'https://svc.metrotransit.org/nextripv2/routes',
      );
      setRoute(fetchRoute.data);
    }
    getRouteData()
  },[]);

  useEffect( () => {
    async function getDirectionData(routeId){
      const fetchInfo = await axios(
        'https://svc.metrotransit.org/nextripv2/directions/' + routeId
      );
      setDirection(fetchInfo.data);
    }
    if(form.selectedRoute)getDirectionData(form.selectedRoute)
    if(form.selectedRoute === '') setDirection([])
  },[form, setDirection, setForm]);

  useEffect( () => {
    console.log("stop info")
    async function getStopInfoData(routeId, direction){
      const fetchInfo = await axios(
        'https://svc.metrotransit.org/nextripv2/stops/' + routeId + "/" + direction
      );
      setStopInfo(fetchInfo.data);
    }
    if(form.selectedRoute && form.selectedDirection) getStopInfoData(form.selectedRoute, form.selectedDirection)
  },[form, setDirection, setStopInfo, setForm]);

  useEffect( () => {
    function filterRoutesByAgency(){
      const routesByAgency = route.filter(routeItem => routeItem.agency_id === 0)
      setRouteByAgency(routesByAgency)
    }
    filterRoutesByAgency()
  },[route]);

  const handleInput = (e) => {
    const {name, value} = e.target

    if( name ==="selectedRoute" && !value){
      setForm(
        {
          ...form,
          [name]: value,
          selectedDirection: ''
        }
      )
    }else{
      setForm(
        {
          ...form,
          [name]: value
        }
      )
    }
  }  
  
  return (
    <form>
      
      <div>
        <label htmlFor="routes">Choose route:</label>
        <select name="selectedRoute" value={form.selectedRoute} id="route" onChange={ e => handleInput(e)}>
            <option value="" defaultValue="">Choose here</option>
          {
            routeByAgency.map( item=>(
              <option key={item.route_id} value={item.route_id}>{item.route_label}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="direction">Choose Direction:</label>
        <select name="selectedDirection" value={form.selectedDirection} id="direction"onChange={ e => handleInput(e)}>
          <option value="" defaultValue="">Choose here</option>
          {
            direction.map( item=>(
              <option key={item.direction_id} value={item.direction_id}>{item.direction_name}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="stop">Choose Stop:</label>
        <select name="selectedStop" value={form.selectedStop} id="direction"onChange={ e => handleInput(e)}>
          <option value="" defaultValue="">Choose here</option>
          {
            stopInfo.map( item=>(
              <option key={item.direction_id} value={item.place_code}>{item.description}</option>
            ))
          }
        </select>
      </div>
    </form>
  )
}
function NextTrip(props) {
  return (
    <div>
      <h1>Hello, FROM NEXT TRIP</h1>
      <TripForm />
    </div>
  );
}

export default NextTrip;