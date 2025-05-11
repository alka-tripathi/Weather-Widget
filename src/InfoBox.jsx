import './SearchBox.css';




import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const InfoBox=({result})=>{

    let imageurl="https://images.unsplash.com/photo-1724337133759-79872a17ad3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/453477435/photo/hot.jpg?s=2048x2048&w=is&k=20&c=5E7YShgQZW79Wjuj3ZDPlPH-y163UocLk_24t9iDokI=";
    const COLD_URL="https://media.istockphoto.com/id/930879822/photo/winter-morning-scene-rural-india.jpg?s=2048x2048&w=is&k=20&c=Cb9VW5bb0LqvRvFW2ZxHhJVCc3LI2F-AQfOy-pb9UZ4=";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="infobox">
 <h3>Weather Display -{result.weather}</h3>



 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={result.humidity >80? RAIN_URL:result.temp >15 ?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {result.city}{result.humidity >80? <ThunderstormIcon/>:result.temp>15?<LocalFireDepartmentIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature:{result.temp}&deg;C</p>
          <p>Humidity:{result.humidity}</p>
          <p>Min-Temperature:{result.tempMin}</p>
           <p>Max-Temperature:{result.tempMax}</p>
            <p>Feels Like:{result.feelsLike}</p>
                

        </Typography>
      </CardContent>

    </Card>


        </div>
    )

}
export default InfoBox;