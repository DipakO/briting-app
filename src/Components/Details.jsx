import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../MusicCard/music.css";
import { useParams } from "react-router-dom";
import img from "../images/mad1.webp";
import path from "C:/Users/ADMIN/Downloads/ulpdah.mp3";
// import path from "../../public/Asset/my-life-main-6670.ogg";
import { List } from "./List.jsx";
import { useGetBrithingDataQuery } from "../service/Api";

export default function MediaControlCard() {
  const { data, isLoading, isSuccess } = useGetBrithingDataQuery();
  const { id } = useParams();
  const filt = List?.filter((item) => {
    if (item.id == id) {
      return item;
    }
  });
  let filt2;

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // } else {
  filt2 = filt[0].music_1;
  // }
  console.log(filt);
  return (
    <div className="cont">
      <audio controls src={path}></audio>
      <div className="music_card">
        <div className="music_child">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
            </CardContent>
          </Box>
          {filt?.map((item, i) => {
            return (
              <div key={i}>
                <img className="img" src={item.image} alt="nature" />
                <p className="title">title : {item.title}</p>
                {/* <audio controls src={item.song}></audio> */}
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
