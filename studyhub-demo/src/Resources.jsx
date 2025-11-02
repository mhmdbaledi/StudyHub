import { useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  Chip,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import { Download, Visibility, CalendarToday } from '@mui/icons-material'

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const mockResources = [
    {
      id: 1,
      title: 'جزوه مهندسی نرم‌افزار',
      course: 'مهندسی نرم‌افزار',
      professor: 'دکتر احمدی',
      type: 'جزوه',
      downloads: 150,
      views: 300,
      rating: 4.5,
      date: '1402/07/15',
      tags: ['نرم‌افزار', 'جزوه', 'پروژه']
    },
    {
      id: 2,
      title: 'نمونه سوالات پایگاه داده',
      course: 'پایگاه داده',
      professor: 'دکتر محمدی',
      type: 'نمونه سوال',
      downloads: 200,
      views: 450,
      rating: 4.2,
      date: '1402/07/10',
      tags: ['دیتابیس', 'SQL', 'امتحان']
    },
    {
      id: 3,
      title: 'پروژه هوش مصنوعی',
      course: 'هوش مصنوعی',
      professor: 'دکتر کریمی',
      type: 'پروژه',
      downloads: 80,
      views: 180,
      rating: 4.8,
      date: '1402/07/20',
      tags: ['هوش مصنوعی', 'پایتون', 'ماشین لرنینگ']
    }
  ]

  const filteredResources = mockResources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.professor.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(resource => 
    filter === 'all' || resource.type === filter
  )

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        منابع درسی
      </Typography>

      {/* Search and Filter Section */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          placeholder="جستجو در منابع..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ minWidth: 200, flexGrow: 1 }}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>نوع فایل</InputLabel>
          <Select
            value={filter}
            label="نوع فایل"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="all">همه</MenuItem>
            <MenuItem value="جزوه">جزوه</MenuItem>
            <MenuItem value="نمونه سوال">نمونه سوال</MenuItem>
            <MenuItem value="پروژه">پروژه</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Resources Grid */}
      <Grid container spacing={3}>
        {filteredResources.map((resource) => (
          <Grid item xs={12} md={6} lg={4} key={resource.id}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {resource.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  درس: {resource.course}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  استاد: {resource.professor}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Chip 
                    label={resource.type} 
                    color="primary" 
                    size="small" 
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CalendarToday fontSize="small" />
                    <Typography variant="body2">
                      {resource.date}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Rating value={resource.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="body2">
                    ({resource.rating})
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {resource.tags.map((tag, index) => (
                    <Chip key={index} label={tag} variant="outlined" size="small" />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Download fontSize="small" />
                    <Typography variant="body2">
                      {resource.downloads}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Visibility fontSize="small" />
                    <Typography variant="body2">
                      {resource.views}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>

              <CardActions>
                <Button 
                  fullWidth 
                  variant="contained" 
                  startIcon={<Download />}
                >
                  دانلود
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredResources.length === 0 && (
        <Box textAlign="center" py={8}>
          <Typography variant="h6" color="text.secondary">
            هیچ منبعی یافت نشد
          </Typography>
        </Box>
      )}
    </Container>
  )
}

export default Resources