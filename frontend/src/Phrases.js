import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, Card, CardContent, Button, Box, Chip, TextField } from '@mui/material';
import { VolumeUp as AudioIcon } from '@mui/icons-material';

function Phrases() {
  const [searchTerm, setSearchTerm] = useState('');

  const phrases = [
    { category: 'Greetings', chinese: '你好', pinyin: 'Nǐ hǎo', english: 'Hello' },
    { category: 'Greetings', chinese: '谢谢', pinyin: 'Xièxiè', english: 'Thank you' },
    { category: 'Greetings', chinese: '对不起', pinyin: 'Duìbùqǐ', english: 'Sorry' },
    { category: 'Greetings', chinese: '再见', pinyin: 'Zàijiàn', english: 'Goodbye' },
    { category: 'Transport', chinese: '火车站在哪里？', pinyin: 'Huǒchē zhàn zài nǎlǐ?', english: 'Where is the train station?' },
    { category: 'Transport', chinese: '多少钱？', pinyin: 'Duōshao qián?', english: 'How much?' },
    { category: 'Hotel', chinese: '酒店', pinyin: 'Jiǔdiàn', english: 'Hotel' },
    { category: 'Hotel', chinese: '预订', pinyin: 'Yùdìng', english: 'Reservation' },
    { category: 'Food', chinese: '菜单', pinyin: 'Càidān', english: 'Menu' },
    { category: 'Food', chinese: '很好吃', pinyin: 'Hěn hào chī', english: 'Very delicious' },
    { category: 'Emergency', chinese: '帮助', pinyin: 'Bāngzhù', english: 'Help' },
    { category: 'Emergency', chinese: '医院', pinyin: 'Yīyuàn', english: 'Hospital' }
  ];

  const playAudio = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      speechSynthesis.speak(utterance);
    }
  };

  const filteredPhrases = phrases.filter(phrase =>
    phrase.chinese.includes(searchTerm) ||
    phrase.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    phrase.english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}>
          🗣️ Essential Mandarin Phrases
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search phrases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {['Greetings', 'Transport', 'Hotel', 'Food', 'Emergency'].map(category => (
            <Grid item key={category}>
              <Chip 
                label={category} 
                onClick={() => setSearchTerm(category)}
                sx={{ cursor: 'pointer', backgroundColor: 'secondary.main', color: 'white' }}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          📚 All Phrases
        </Typography>
        
        {['Greetings', 'Transport', 'Hotel', 'Food', 'Emergency'].map(category => {
          const categoryPhrases = filteredPhrases.filter(p => p.category === category);
          if (categoryPhrases.length === 0) return null;
          
          return (
            <Box key={category} sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                {category}
              </Typography>
              
              <Grid container spacing={2}>
                {categoryPhrases.map((phrase, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <Card sx={{ borderRadius: 2, boxShadow: 1, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-2px)' } }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                              {phrase.chinese}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {phrase.pinyin}
                            </Typography>
                            <Typography variant="body1">
                              {phrase.english}
                            </Typography>
                          </Box>
                          <Button
                            size="small"
                            onClick={() => playAudio(phrase.chinese)}
                            sx={{ color: 'primary.main', minWidth: 'auto' }}
                          >
                            <AudioIcon />
                          </Button>
                        </Box>
                        <Chip 
                          label={phrase.category} 
                          size="small" 
                          sx={{ mt: 1 }}
                          variant="outlined"
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Paper>
    </Container>
  );
}

export default Phrases;