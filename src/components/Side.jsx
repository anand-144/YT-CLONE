import { Stack, Button } from "@mui/material";
import { categories } from "../utils/constants";

const Side = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="column"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
    }}
  >
    {categories.map((category) => (
      <Button
        key={category.name}
        variant="contained"
        sx={{
          color: "white",
          backgroundColor:
            category.name === selectedCategory ? "#FC1503" : "transparent",
          "&:hover": {
            backgroundColor: "#FC1503",
          },
          mb: 1, // Add margin bottom between buttons
        }}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span style={{ marginRight: "15px" }}>{category.icon}</span>
        <span style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}>
          {category.name}
        </span>
      </Button>
    ))}
  </Stack>
);

export default Side;
