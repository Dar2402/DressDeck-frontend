import React from "react";
import { useTheme, Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            DressDeck
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            voluptas doloribus molestias numquam repudiandae et veniam sed
            maxime! Ad eos maxime ut a adipisci fugiat error et quibusdam
            eligendi tenetur.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Bulk Purchasing</Typography>
          <Typography mb="30px">Retuns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Fuyuki, Kotoku, TOKYO, JAPAN 〒135-0041
          </Typography>
          <Typography mb="30px">Email: something@gmail.com</Typography>
          <Typography mb="30px">(000)111-2222</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
