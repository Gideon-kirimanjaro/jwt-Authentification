import { Notifications, Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Typography } from "@mui/material";
import React from "react";
import { Icons } from "../ui/Icons";
import { Search } from "../ui/Search";
import { StyledToolBar } from "../ui/StyledToolBar";
import MailIcon from "@mui/icons-material/Mail";
import { AvatarBox } from "../ui/AvatarBox";
import { useState } from "react";
import NavMenu from "../ui/NavMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const avatarHandler = (e) => {
    setOpen(!open);
  };
  return (
    <AppBar position="stick">
      <StyledToolBar>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Maca Admin
        </Typography>
        <Pets
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge
            badgeContent={4}
            sx={{ marginRight: "5px", display: { xs: "none", md: "block" } }}
            color="error"
          >
            <MailIcon color="action" />
          </Badge>
          <Badge
            badgeContent={2}
            color="error"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Notifications color="action" />
          </Badge>
          <AvatarBox onClick={avatarHandler}>
            {" "}
            <Avatar src="/av.jpg" />
            <NavMenu open={open} />
            <Typography>John Doe</Typography>
          </AvatarBox>
        </Icons>{" "}
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
