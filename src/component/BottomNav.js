import * as React from "react";

import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import "./BottomNav.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/tvseries");
    else if (value === 3) navigate("/Search");
  }, [value, navigate]);
  return (
    <BottomNavigation
      showLabels
      value={value}
      style={{ width: "100%", position: "fixed", bottom: 0 }}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction label="movies" icon={<MovieCreationIcon />} />
      <BottomNavigationAction label="TV series" icon={<TvIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
