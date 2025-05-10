import './SearchBox.css';

import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const InfoBox=({result})=>{

    let imageurl="https://images.unsplash.com/photo-1724337133759-79872a17ad3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="infobox">
 <h3>Weather Display -{result.weather}</h3>



 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageurl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {result.city}
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