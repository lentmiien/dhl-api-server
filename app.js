const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const { sequelize } = require('./models');

const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const dhlRoutes = require('./routes/dhlRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/dhl', dhlRoutes);

sequelize.sync({ force: false }) // Use { force: true } only in development to drop and recreate tables
  .then(() => {
    console.log('Database & tables created!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});