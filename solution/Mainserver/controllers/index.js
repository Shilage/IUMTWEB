//obtaining all the controllers
const clubsController = require('./clubsController')
const gamesController = require('./gamesController')
const playersController = require('./playersController')
const players_evaluationsController = require('./players_evaluationsController')
const competitionsController = require('./competitionsController')
const appearencesController= require('./appearencesController')
const clubGamesController= require('./clubGamesController')
const gameEventsController= require('./gameEventsController')
const gameLineupsController= require('./gameLineupsController')

module.exports = {
    clubsController,
    gamesController,
    playersController,
    players_evaluationsController,
    competitionsController,
    appearencesController,
    clubGamesController,
    gameEventsController,
    gameLineupsController
}