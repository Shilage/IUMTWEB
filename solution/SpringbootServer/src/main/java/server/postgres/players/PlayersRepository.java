package server.postgres.players;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface PlayersRepository extends JpaRepository<Players,Long> {
    // Add custom query methods if required, no implementation, already in JpaRepository

    @Query(value = "SELECT DISTINCT * " +
            "FROM players ",
            nativeQuery = true)
    List<Players> getPlayers();

    @Query(value = "SELECT DISTINCT * " +
            "FROM players " + "WHERE player_id = :filter ",
            nativeQuery = true)
    Players getPlayerById(int filter);

    @Query(value = "SELECT DISTINCT * " +
            "FROM players " + "WHERE current_club_id = :filter ",
            nativeQuery = true)
    List<Players> getPlayersByClubId(long filter);
}