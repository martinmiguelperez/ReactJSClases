import {
  Badge,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ShoppingCart, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const ProbandoComponents = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Button
        sx={{ margin: "20px", backgroundColor: "red" }}
        variant="contained"
        color="error"
        size="large"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <FormControl
        sx={{ m: 1, width: "25ch", margin: "20px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff color="error" />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Badge size="large" badgeContent={41} color="primary">
        <ShoppingCart color="action" sx={{ fontSize: "35px" }} />
      </Badge>
    </div>
  );
};

export default ProbandoComponents;
