import React from "react";
import {
  Container,
  Grid,
  Paper,
  styled,
  Box,
  List,
  ListItem,
} from "@material-ui/core";
import "./CategoryBar.css";

const CategoryBar = ({ setCategory }) => {
  return (
    <Container maxWidth="md">
      <Box className="downloadMessage" sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid xs={4} md={4}>
            <List>
              <ListItem button onClick={() => setCategory("Sports")}>
                Sports
              </ListItem>
            </List>
          </Grid>
          <Grid xs={4} md={4}>
            <List>
              <ListItem button onClick={() => setCategory("Business")}>
                Business
              </ListItem>
            </List>
          </Grid>
          <Grid xs={4} md={4}>
            <List>
              <ListItem button onClick={() => setCategory("Health")}>
                Health
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CategoryBar;
