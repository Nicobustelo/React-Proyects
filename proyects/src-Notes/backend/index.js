require('dotenv').config();
const app = require('./app');
const logger = require('../utils/logger.cjs');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	logger.info(`Server running on port ${PORT}`);
});
