import { observer } from "mobx-react";
import { useEffect } from "react";
import { getServices } from "./serviceServer";
import serviceStore from "./serviceStore";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import images from '../images/images.jpeg';
import { useNavigate, useParams } from "react-router-dom";
import './service.css'


const ServiceList = observer(() => {

  useEffect(() => {
    //לוקח נתונים מהשרת
    getServices();
  }, []);


  return (
    <>
      <Typography class="cotert">
        השירותים שלנו:
      </Typography>

      <Grid class='container' container spacing={2}>
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
              {/* <Button onClick={() => handleViewClick(x)}>הצג</Button> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
});

export default ServiceList;
