import React, { useState } from 'react';
import { Container, Paper, Typography, Card, CardContent, TextField, Button, Grid, Chip, Box } from '@mui/material';

function Budget() {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({ description: '', amount: '', category: 'accommodation' });

  const categories = [
    { name: 'accommodation', label: 'Accommodation', budget: 8000, spent: 0 },
    { name: 'transport', label: 'Transport', budget: 4000, spent: 0 },
    { name: 'food', label: 'Food', budget: 3000, spent: 0 },
    { name: 'activities', label: 'Activities', budget: 3000, spent: 0 }
  ];

  const addExpense = () => {
    if (!expense.description || !expense.amount) return;
    
    const newExpense = {
      ...expense,
      amount: parseFloat(expense.amount),
      id: Date.now()
    };
    
    setExpenses([...expenses, newExpense]);
    setExpense({ description: '', amount: '', category: 'accommodation' });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}>
          💰 Budget Tracker
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
          Track expenses for 12 travelers • Total Budget: ¥20,000
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {categories.map((cat) => (
            <Grid item xs={12} md={3} key={cat.name}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>{cat.label}</Typography>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    ¥{cat.budget.toLocaleString()}
                  </Typography>
                  <Chip 
                    label={`Spent: ¥${cat.spent}`} 
                    color={cat.spent > cat.budget ? 'error' : 'success'}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card sx={{ borderRadius: 3, mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Add Expense
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="Category"
                  value={expense.category}
                  onChange={(e) => setExpense({...expense, category: e.target.value})}
                  SelectProps={{ native: true }}
                >
                  {categories.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.label}</option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Description"
                  value={expense.description}
                  onChange={(e) => setExpense({...expense, description: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Amount (¥)"
                  type="number"
                  value={expense.amount}
                  onChange={(e) => setExpense({...expense, amount: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} md={1}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={addExpense}
                  disabled={!expense.description || !expense.amount}
                  sx={{ height: '56px', background: 'linear-gradient(45deg, #DC143C 30%, #FFD700 90%)' }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {expenses.length > 0 && (
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Recent Expenses
              </Typography>
              {expenses.map((exp) => (
                <Box key={exp.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #eee' }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {exp.description}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {exp.category}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'error.main', fontWeight: 'bold' }}>
                    -¥{exp.amount.toLocaleString()}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}
      </Paper>
    </Container>
  );
}

export default Budget;