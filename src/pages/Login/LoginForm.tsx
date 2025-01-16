import { Box, Button, TextField, Typography } from '@mui/material'

const LoginForm = () => {
    return (
        <>
          <Typography
            variant="h5"
            sx={{
              mb: { xs: 2, sm: 3 },
              color: 'primary.main',
              textAlign: 'center',
              fontSize: { xs: '16px', sm: '20px', md: '24px' },
            }}
          >
             यहां लॉगिन करें
            {/* {isRegister && <span>अपने फोन को सत्यापित करें </span>} */}
          </Typography>
      
        <Box maxWidth="sm"
            sx={{
                width: 360,
             
            }}
        >
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: "bold",
                        mb: 1,
                        color:"primary.main", 
                    }}
                >
                    आधार नं0
                </Typography>
            <TextField
                fullWidth
                label="आधार नं0"
                variant="outlined"
                placeholder='1261 8891 7711'
                sx={{ mb: 2, borderRadius: 2, }}
            />
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: "bold",
                        mb: 1,
                        color:"primary.main", 
                    }}
                >
                    आपका पासवर्ड
                </Typography>
            <TextField
                fullWidth
                label="आपका पासवर्ड"
                placeholder='आपका पासवर्ड'
                variant="outlined"
                type="password"
                sx={{ mb: 3 }}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mb: 2, py:"12px" , borderRadius:3,}}
            >
                लॉगिन करें
            </Button>
            <Typography variant="body2" sx={{ textAlign: 'center', color: 'primary.main' }}>
                <a href="/forgot-password" style={{ color: "#42079e" }}>यहां अपना पासवर्ड बदलें</a>
            </Typography>
        </Box>
        </>
    )
}

export default LoginForm