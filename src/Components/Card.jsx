import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard({ elem }) {
  const Navigate = useNavigate();

  const handelClick = () => {
    Navigate(`./details/${elem.id}`);
  };

  return (
    <div>
      <div className="main_card">
        <Card
          sx={{
            maxWidth: 345,
            marginTop: "50px",
            textAlign: "center",
          }}
          className="card_1"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              style={{ height: "200px", display: "flex", width: "250px" }}
              image={elem.image}
              onClick={handelClick}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {elem.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {elem.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
