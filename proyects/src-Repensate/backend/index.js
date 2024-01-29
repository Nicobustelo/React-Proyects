const logger = require('./utils/logger');
const app = require('./app');
const config = require('./utils/config');

app.listen(config.PORT, () => logger.info('server is running on port 3001'));
