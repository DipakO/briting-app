import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./music.css";
import { useParams } from "react-router-dom";
import { useGetBrithingDataQuery } from "../service";

export default function MediaControlCard() {
  const { data, isLoading } = useGetBrithingDataQuery();
  const { id } = useParams();
  const filt = data?.filter((item) => {
    if (item.id == id) {
      return item;
    }
  });

  let filt2;

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    filt2 = filt[0].music_1;
  }

  return (
    <div className="cont">
      <div className="music_card">
        <div className="music_child">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
            </CardContent>
          </Box>
          {filt.map((item, i) => {
            return (
              <div key={i}>
                <img className="img" src={item.pic} alt="nature" />
                <p className="title">title : {item.title}</p>
              </div>
            );
          })}
          {filt2.map((item, i) => {
            const song = item.music;
            return <audio key={i} controls src={song}></audio>;
          })}
        </div>
      </div>
    </div>
  );
}
