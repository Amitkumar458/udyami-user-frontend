import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";

const RegisterForm = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]); // for OTP input fields

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isOtpSent) {
      setIsOtpSent(true);
      // Add API call logic to send OTP here
    } else {
      // OTP verification logic here
      console.log("OTP Submitted:", otp.join(""));
    }
  };

  const handleOtpChange = (e: any, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  return isOtpSent ? (
    <>
      <Typography
        variant="h5"
        sx={{
          mb: { xs: 2, sm: 3 },
          color: "primary.main",
          textAlign: "center",
          fontSize: { xs: "16px", sm: "20px", md: "24px" },
        }}
      >
        अपने फोन को सत्यापित करें
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          py: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 450,
          mx: "auto",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, color: "purple" }}>
          कृपया ओटीपी दर्ज करें
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              variant="outlined"
              type="number"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              inputProps={{ maxLength: 1 }}
              sx={{
                width: "60px",
                height: "60px",
                fontSize: "24px",
              }}
            />
          ))}
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            py: 1.5,
            fontSize: "16px",
            bgcolor: "primary.main",
            "&:hover": { bgcolor: "primary.main" },
            borderRadius: 3,
            mt: 3,
          }}
        >
          सत्यापित करें
        </Button>

        <Box sx={{ mt: 2 }}>
          <Typography
            onClick={(e) => {
              e.preventDefault();
              setIsOtpSent(false);
            }}
            variant="body2"
            sx={{
              textAlign: "center",
              color: "primary.main",
              marginTop: "10px",
            }}
          >
            <a href="/" style={{ color: "#42079e" }}>
              {" "}
              ओटीपी पुनः भेजें
            </a>
          </Typography>
        </Box>
      </Box>
    </>
  ) : (
    <>
      <Typography
        variant="h5"
        sx={{
          mb: { xs: 2, sm: 3 },
          color: "primary.main",
          textAlign: "center",
          fontSize: { xs: "16px", sm: "20px", md: "24px" },
        }}
      >
        यहां रजिस्टर करें
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
            flexDirection: { xs: "column", sm: "row" },
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
              प्रथम नाम
            </Typography>
            <TextField
              fullWidth
              required
              label="प्रथम नाम"
              placeholder="eg. Aman"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
              मध्य नाम
            </Typography>
            <TextField
              fullWidth
              label="मध्य नाम"
              placeholder=""
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
              अंतिम नाम
            </Typography>
            <TextField
              fullWidth
              label="अंतिम नाम"
              placeholder="eg. Sharma"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
            ईमेल आईडी
          </Typography>
          <TextField
            fullWidth
            required
            label="ईमेल आईडी"
            type="email"
            placeholder="name@example.com"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
            क्या यह आपका नया व्यवसाय है?
          </Typography>
          <TextField
            fullWidth
            required
            select
            label="क्या यह आपका नया व्यवसाय है?"
            defaultValue="empty"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
            }}
          >
            <MenuItem value="empty">चयन करें</MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
            लिंग
          </Typography>
          <TextField
            fullWidth
            required
            select
            label="लिंग"
            defaultValue="empty"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
            }}
          >
            <MenuItem value="empty">चयन करें</MenuItem>
            <MenuItem value="male">पुरुष</MenuItem>
            <MenuItem value="female">स्त्री</MenuItem>
            <MenuItem value="other">अन्य</MenuItem>
          </TextField>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
            मोबाइल नं0
          </Typography>
          <TextField
            fullWidth
            required
            label="मोबाइल नं0"
            type="number"
            inputProps={{ maxLength: 10 }}
            placeholder="9191234864"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
            आधार नं0
          </Typography>
          <TextField
            fullWidth
            required
            label="आधार नं0"
            type="number"
            inputProps={{ maxLength: 12 }}
            placeholder="1261 8891 7711"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 3,
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <Typography variant="body1" sx={{ mb: 1, color: "purple" }}>
            आवेदन का प्रकार
          </Typography>
          <TextField
            fullWidth
            required
            select
            label="आवेदन का प्रकार"
            defaultValue="empty"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": { fontSize: "16px", height: "45px" },
            }}
          >
            <MenuItem value="empty">चयन करें</MenuItem>
            <MenuItem value="new">नया आवेदन</MenuItem>
            <MenuItem value="update">अद्यतन आवेदन</MenuItem>
          </TextField>
        </Box>

        <Box sx={{ textAlign: "center", maxWidth: 450, mx: "auto" }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              py: 1.5,
              fontSize: "16px",
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "purple" },
              borderRadius: 3,
            }}
          >
            ओटीपी प्राप्त करें
          </Button>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "primary.main",
              marginTop: "10px",
            }}
          >
            <a href="/login" style={{ color: "#42079e" }}>
              पहले से ही खाता है, यहां लॉगिन करें
            </a>
          </Typography>
        </Box>
      </form>
    </>
  );
};

export default RegisterForm;
