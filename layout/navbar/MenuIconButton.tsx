import { useState, MouseEvent, KeyboardEvent } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Box,
} from "@mui/material";
import { GiSkateboard } from "react-icons/gi";

import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { StarBorder, ExpandMore, ExpandLess } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

interface MenuItem {
  Title: string;
  link: string;
  Id: number;
  subItems?: MenuItem[]; // Added subItems for nested drawers
}

interface MenuIconButtonProps {
  menuItems: MenuItem[];
  menuUser: MenuItem[];
}

const AllCategories = [
  { nameHE: "קרשים", name: "Decks", timeout: 2800 },
  { nameHE: "צירים", name: "Trucks", timeout: 2800 },
  { nameHE: "גלגלים", name: "Wheels", timeout: 2800 },
];

const AllCategoriess = [
  { nameHE: "חולצות", name: "Decks", timeout: 2800 },
  { nameHE: "כובעים", name: "Trucks", timeout: 2800 },
  // { nameHE: "גלגsלים", name: "Wheels", timeout: 2800 },
];


const MenuIconButton: React.FC<MenuIconButtonProps> = ({
  menuItems,
  menuUser,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleDrawer =
    (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleClick = (id: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((itemId) => itemId !== id)
        : [...prevOpenItems, id]
    );
  };

  const mapCategories = (data) =>
    data.map((category) => (
      <Link onClick={() => setDrawerOpen(false)} href={`/boards/${category.name}`}>
        <ListItemButton sx={{ pl: 4 }} key={category.name}>
          <ListItemIcon>
            <GiSkateboard />
          </ListItemIcon>
          <ListItemText primary={category.nameHE} />
        </ListItemButton>
      </Link>
    )) ;
  
  const renderMenuItems = (items: MenuItem[]) => {
    console.log(items);
    return items.map((item) => (
      <div key={item.Id}>
        <ListItemButton
          name={item.link}
          onClick={() => handleClick(item.Id)}
          button
        >
          {openItems.includes(item.Id) ? <ExpandLess /> : <ExpandMore />}
          <Link href={`/${item.link}`}>
          <ListItemText sx={{pl: 1}} primary={item.Title} />
          </Link>
        </ListItemButton>
        <Collapse in={openItems.includes(item.Id)} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.Id === 1 && mapCategories(AllCategories)}
            {item.Id === 2 && mapCategories(AllCategoriess)}
          </List>
        </Collapse>
      </div>
    ));
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List
          subheader={<ListSubheader id="nested-list">קטגוריות</ListSubheader>}
        >
          {renderMenuItems(menuItems)}
        </List>

        <List subheader={<ListSubheader  id="nested-list">משתמש</ListSubheader>}>
          {menuUser.map((item) => (
            <Link  href={`/user/${item.link}`} key={item.Id} onClick={toggleDrawer(false)}>
              <ListItemButton button>
                <ListItemText  onClick={toggleDrawer(false)} primary={item.Title} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MenuIconButton;
