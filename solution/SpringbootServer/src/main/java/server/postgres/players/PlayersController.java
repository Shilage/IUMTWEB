package server.postgres.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlayersController {
    private final PlayersService playersService;

    //Constructor
    @Autowired
    public PlayersController(PlayersService playersService) {
        this.playersService = playersService;
    }

    /**
     * Get a list of all players.
     *
     * @return A list of all Players.
     */
    @GetMapping("/get-all-players")
    public List<Players> getAllPlayers() {
        return playersService.getAllPlayers();
    }


    /**
     * Get a player by their unique player ID.
     *
     * @param filter The unique player ID.
     * @return The Players object corresponding to the specified player ID.
     */
    @GetMapping("/get-player-by-playerId")
    public Players getPlayerByID(@RequestParam(name = "filter") int filter) {
        return playersService.getPlayerByID(filter);
    }


    /**
     * Get a list of players belonging to a specific team.
     *
     * @param filter The team ID used to filter players.
     * @return A list of Players who are part of the specified team.
     */
    @GetMapping("/get-player-by-team")
    public List<Players> getPlayersByTeam(@RequestParam(name = "filter") int filter) {
        return playersService.getPlayersByTeam(filter);
    }

}