module.exports = {
  development: {
    port: process.env.PORT || 5000,
    saltingRounds: 10
  },
  mongoURI: 'mongodb://localhost/chatApi',
  JWT_SECRET: 'addjsonwebtokensecretherelikeQuiscustodietipsoscustodes'
}