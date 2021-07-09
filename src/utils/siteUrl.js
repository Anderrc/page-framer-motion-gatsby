export default process.env.ENVIRONMENT !== 'LOCAL' ?  process.env.SITE_URL : 'http://localhost:8000'
