import { useState } from 'react'
import { Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SecurityRounded } from '@mui/icons-material'

const SampleVideos = [
  {
    title: 'Video 1',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnail: 'https://picsum.photos/200/300?random=1',
  },
  {
    title: 'Video 2',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
    thumbnail: 'https://picsum.photos/200/300?random=2',
  },
  {
    title: 'Video 3',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
    thumbnail: 'https://picsum.photos/200/300?random=3',
  },
  {
    title: 'Video 4',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4',
    thumbnail: 'https://picsum.photos/200/300?random=4',
  },
]

const VideoContainer = styled(Paper)(({ theme }) => ({
  position: 'relative',
  paddingBottom: '56.25%', // 16:9
  height: 0,
  overflow: 'hidden',
  '& video': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    objectFit: 'cover',
  },
}))

export default function Second() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleVideoClick = (video) => {
    setSelectedVideo(video.url)
  }

  return (
    <Grid container spacing={2}>
      {SampleVideos.map((video) => (
        <Grid item xs={6} md={3} key={video.title}>
          <Paper
            onClick={() => handleVideoClick(video)}
            sx={{ cursor: 'pointer' }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{ width: '100%' }}
            />
          </Paper>
        </Grid>
      ))}
      {selectedVideo && (
        <Grid item xs={12}>
          <VideoContainer>
            <video controls autoPlay src={selectedVideo} />
          </VideoContainer>
        </Grid>
      )}
    </Grid>
  )
}
