import { useState } from 'react'
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Alert,
  Divider
} from '@mui/material'
import { Email, Lock, Person } from '@mui/icons-material'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login/register logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          {isLogin ? 'ورود به حساب' : 'ثبت‌نام'}
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          این یک دمو است. اطلاعات وارد شده ذخیره نمی‌شود.
        </Alert>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {!isLogin && (
            <TextField
              fullWidth
              label="نام کامل"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                startAdornment: <Person sx={{ color: 'action.active', mr: 1 }} />
              }}
            />
          )}

          <TextField
            fullWidth
            label="ایمیل دانشگاهی"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              startAdornment: <Email sx={{ color: 'action.active', mr: 1 }} />
            }}
          />

          <TextField
            fullWidth
            label="رمز عبور"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              startAdornment: <Lock sx={{ color: 'action.active', mr: 1 }} />
            }}
          />

          {!isLogin && (
            <TextField
              fullWidth
              label="تکرار رمز عبور"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
            />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLogin ? 'ورود' : 'ثبت‌نام'}
          </Button>

          <Divider sx={{ my: 2 }} />

          <Box textAlign="center">
            <Link
              component="button"
              type="button"
              variant="body2"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin 
                ? 'حساب کاربری ندارید؟ ثبت‌نام کنید' 
                : 'قبلاً ثبت‌نام کرده‌اید؟ وارد شوید'
              }
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login