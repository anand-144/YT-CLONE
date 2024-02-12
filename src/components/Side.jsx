import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCatergory = "New";

const Side = () => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCatergory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCatergory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span style={{opacity: category.name === selectedCatergory ? '1' : '0.8'}}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Side;
