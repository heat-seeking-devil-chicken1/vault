import React, { useState, useEffect } from "react";
import logo from "../assets/v_logo.png";
import {
  AppBar,
  Box,
  Button,
  Modal,
  Typography,
  TextField,
} from "@mui/material";

const Header = (props) => {
  // const [synced, setSynced] = useState(false)
  const [loginAppear, setLoginAppear] = useState(false);
  const [registerAppear, setRegisterAppear] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;

  const changeHandler = (e) => {
    console.log("handler, ", e);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const body = {
      username,
      password,
    };
    e.preventDefault();
    setData({
      username: "",
      password: "",
    });
    console.log("About to fetch sync");
    fetch("/api/sync", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => {
        console.log("fetched successfully to /api/sync");
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    // <header className="header">
    //   {" "}
    //   <div className="header-login">
    //     <span className="login-text">Vault Login</span>
    //     <form onSubmit={submitHandler}>
    //       <input
    //         type="text"
    //         name="username"
    //         value={username}
    //         placeholder="username"
    //         onChange={changeHandler}
    //       />
    //       <br />
    //       <input
    //         type="password"
    //         name="password"
    //         value={password}
    //         placeholder="password"
    //         onChange={changeHandler}
    //       />
    //       <br />
    //       <input type="submit" name="submit" value="Add Account to Dashboard" />
    //     </form>
    //   </div>
    // </header>
    <AppBar
      sx={{
        height: "5%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        background: "lightgrey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "20%",
          height: "90%",
          display: "flex",
          paddingLeft: "10px",
        }}
      >
        <img src={logo} width="50px" height="96%"></img>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "10px",
          gap: "10px",
        }}
        small
      >
        <Button
          variant="contained"
          sx={{
            height: "80%",
          }}
          onClick={() => {
            setLoginAppear(true);
          }}
        >
          LOGIN
        </Button>

        <Button
          variant="contained"
          sx={{
            height: "80%",
            backgroundColor: "secondary.main",
          }}
        >
          REGISTER
        </Button>
      </Box>
      {loginAppear && (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClick={() => {
            setLoginAppear(false);
          }}
        >
          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      )}
    </AppBar>
  );
};

// return (
//   <header class="header">
//     <div class="header-search">Welcome Logged In User</div>
//   </header>
// )
// };

export default Header;
