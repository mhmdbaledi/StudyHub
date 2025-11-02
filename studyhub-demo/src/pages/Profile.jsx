import { useState } from 'react'
import {
  Container,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Rating,
  Tab,
  Tabs
} from '@mui/material'
import { Edit, School, Download, Upload } from '@mui/icons-material'

const Profile = () => {
  const [tabValue, setTabValue] = useState(0)

  const userData = {
    name: 'علی محمدی',
    email: 'ali.mohammadi@university.ac.ir',
    major: 'مهندسی کامپیوتر',
    semester: '6',
    studentId: '401234567',
    level: 'کاربر فعال',
    joinDate: '1401/09/15',
    avatar: '/'
  }

  const userResources = [
    {
      id: 1,
      title: 'جزوه ساختمان داده',
      course: 'ساختمان داده',
      downloads: 120,
      rating: 4.3,
      date: '1402/06/20'
    },
    {
      id: 2,
      title: 'پروژه پایگاه داده',
      course: 'پایگاه داده',
      downloads: 85,
      rating: 4.7,
      date: '1402/07/05'
    }
  ]

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Profile Header */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Avatar
            sx={{ width: 100, height: 100, bgcolor: 'primary.main' }}
            src={userData.avatar}
          >
            {userData.name.charAt(0)}
          </Avatar>
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {userData.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {userData.major} - ترم {userData.semester}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
              <Chip label={userData.level} color="primary" />
              <Chip label={`شماره دانشجویی: ${userData.studentId}`} variant="outlined" />
            </Box>
          </Box>

          <Button variant="outlined" startIcon={<Edit />}>
            ویرایش پروفایل
          </Button>
        </Box>
      </Paper>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Upload color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" component="div" color="primary">
                ۱۲
              </Typography>
              <Typography variant="body2" color="text.secondary">
                فایل آپلود شده
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Download color="secondary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" component="div" color="secondary">
                ۴۵۰
              </Typography>
              <Typography variant="body2" color="text.secondary">
                مجموع دانلودها
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: 'center' }}>
              <School color="success" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" component="div" color="success.main">
                ۸
              </Typography>
              <Typography variant="body2" color="text.secondary">
                درس‌های مشارکت شده
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" component="div" color="warning.main">
                ۴.۵
              </Typography>
              <Rating value={4.5} precision={0.1} readOnly size="small" />
              <Typography variant="body2" color="text.secondary">
                میانگین امتیاز
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabs */}
      <Paper elevation={2}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="فایل‌های من" />
          <Tab label="فایل‌های دانلود شده" />
          <Tab label="علاقه‌مندی‌ها" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Grid container spacing={3}>
              {userResources.map((resource) => (
                <Grid item xs={12} md={6} key={resource.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {resource.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {resource.course}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Download fontSize="small" />
                          <Typography variant="body2">
                            {resource.downloads}
                          </Typography>
                        </Box>
                        <Rating value={resource.rating} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {resource.date}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {tabValue !== 0 && (
            <Box textAlign="center" py={4}>
              <Typography variant="h6" color="text.secondary">
                این بخش در نسخه دمو در دسترس نیست
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  )
}

export default Profile