import { ReactNode } from "react";
import { Box, Typography, List, ListItem, Link, Container } from "@mui/material";

type Props = {
  children: ReactNode;
};

const PageLayout = ({ children }: Props) => {
  const menuItems = [
    { text: "होम", href: "https://udyami.bihar.gov.in/" },
    { text: "संकल्प", href: "https://udyami.bihar.gov.in/sankalp" },
    {
      text: "संबद्ध संस्थान",
      href: "https://udyami.bihar.gov.in/affiliated-institute",
    },
    {
      text: "परियोजना की सूची",
      href: "https://udyami.bihar.gov.in/project-list",
    },
    {
      text: "नोडल पदाधिकारी",
      href: "https://udyami.bihar.gov.in/nodal-officer",
    },
    { text: "संपर्क करें", href: "https://udyami.bihar.gov.in/contact-us" },
    {
      text: "उपयोगकर्ता पुस्तिका",
      href: "https://udyami.bihar.gov.in/user-manual",
    },
  ];
  return (
    <Container
      disableGutters
      sx={{
        bgcolor: "#eef2f7",
        minHeight: "100vh",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          borderRadius: 4,
          boxShadow: 3,
          overflow: "hidden",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              color: "white",
              p: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#fff",
                mb: { xs: 1, sm: 2 },
                textAlign: "left",
                fontWeight: "bold",
                borderBottom: "1px solid white",
                pb: { xs: 0.5, sm: 1 },
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
              }}
            >
              मुख्यमंत्री उद्यमी योजना (वित्तीय वर्ष 2024-25)
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 0.5, sm: 1 },
              }}
            >
              {menuItems.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    p: 0,
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
                  }}
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    underline="none"
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      fontWeight: 500,
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      py: { xs: 0.5, sm: 1 },
                    }}
                  >
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Typography
              variant="body2"
              component="div"
              sx={{
                color: "#fff",
                textAlign: "left",
                mt: { xs: 3, sm: 5 },
                fontSize: { xs: "10px", sm: "12px", md: "14px" },
                opacity: 0.8,
              }}
            >
              Copyright © 2025
              <br />
              Department of Industries
              <br />
              Government of Bihar
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "white",
            py: { xs: 3, sm: 4, md: 5 },
            px: { xs: 3, sm: 4, md: 6 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default PageLayout;
