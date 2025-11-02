import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  Paper
} from '@mui/material'
import { 
  School, 
  FileDownload, 
  People, 
  TrendingUp 
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <FileDownload sx={{ fontSize: 40 }} />,
      title: 'دانلود منابع',
      description: 'دسترسی به هزاران منبع درسی معتبر'
    },
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: 'اشتراک‌گذاری',
      description: 'به اشتراک گذاری دانش و تجربه'
    },
    {
      icon: <People sx={{ fontSize: 40 }} />,
      title: 'جامعه علمی',
      description: 'ارتباط با دانشجویان و اساتید'
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'پیشرفت تحصیلی',
      description: 'ارتقاء سطح علمی با منابع به روز'
    }
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Paper 
        sx={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
              StudyHub
            </Typography>
            <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
              پلتفرم اشتراک‌گذاری منابع درسی دانشگاه
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' }
              }}
              onClick={() => navigate('/resources')}
            >
              شروع کنید
            </Button>
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom mb={6}>
          ویژگی‌های پلتفرم
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }} elevation={3}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component="div" color="primary" fontWeight="bold">
                ۱,۲۵۰+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                منبع درسی
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component="div" color="primary" fontWeight="bold">
                ۵۰۰+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                کاربر فعال
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component="div" color="primary" fontWeight="bold">
                ۱۵+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                رشته دانشگاهی
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Home