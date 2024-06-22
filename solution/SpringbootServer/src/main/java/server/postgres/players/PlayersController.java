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
    @GetMapping("/players")
    public List<Players> getPlayers(){
        return playersService.getPlayers();
    }

    /**
     * Get a player by their unique player ID.
     *
     * @param filter The unique player ID.
     * @return The Players object corresponding to the specified player ID.
     */
    @GetMapping("/playerById")
    public Players getPlayerById(@RequestParam(name = "filter") int filter) {
        return playersService.getPlayerById(filter);
    }


    /**
     * Get a list of players belonging to a specific team.
     *
     * @param filter The team ID used to filter players.
     * @return A list of Players who are part of the specified team.
     */
    @GetMapping("/playersByClubId")
    public List<Players> getPlayersByTeam(@RequestParam(name = "filter") int filter) {
        return playersService.getPlayersByClubId(filter);
    }

}