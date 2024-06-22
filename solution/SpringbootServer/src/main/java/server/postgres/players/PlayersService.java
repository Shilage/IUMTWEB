package server.postgres.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayersService {
    private final PlayersRepository playersRepository;
    @Autowired
    public PlayersService(PlayersRepository playersRepository) {
        this.playersRepository = playersRepository;
    }

    /**
     * Retrieve a list of all players.
     *
     * @return A list of all Players.
     */
    public List<Players> getPlayers(){
        List<Players>  players = playersRepository.getPlayers();
        return players;
    }
    /**
     * Retrieve a player by their unique player ID.
     *
     * @param filter The unique player ID.
     * @return The Players object corresponding to the specified player ID.
     */
    public Players getPlayerById(int filter){
        Players player =  playersRepository.getPlayerById(filter);
        return player;
    }

    /**
     * Retrieve a list of players belonging to a specific team.
     *
     * @param filter The team ID used to filter players.
     * @return A list of Players who are part of the specified team.
     */
    public List<Players> getPlayersByClubId(int filter) {
        List<Players> playersList = playersRepository.getPlayersByClubId(filter);
        return playersList;
    }
}