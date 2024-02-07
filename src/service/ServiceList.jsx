import './service.css'
import serviceStore from "./serviceStore";
import { getServices } from "./serviceServer";
import images from '../images/images.jpeg';
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Card, CardActionArea, CardContent, Typography, Grid } from '@mui/material';


const ServiceList = observer(() => {

  useEffect(() => {
    //לוקח נתונים מהשרת
    getServices();
  }, []);


  return (
    <>
      <Typography className="cotert">
        השירותים שלנו:
      </Typography>
{console.log('serviceStore.services',serviceStore.services.length)}
{console.log('serviceStore.services',serviceStore.services[6])}
      <Grid className='container' container spacing={2}>
        {serviceStore.services.map((x) => (
          <Grid item key={x.name} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <img src={images} alt="My Image" />
                  <Typography gutterBottom variant="h5" component="div">
                    {x.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {x.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
});

export default ServiceList;
