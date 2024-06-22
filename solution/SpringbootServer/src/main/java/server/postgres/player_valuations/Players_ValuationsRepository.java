package server.postgres.player_valuations;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;
@Repository
public interface Players_ValuationsRepository extends JpaRepository<Players_Valuations, Long> {
    Optional<Players_Valuations> findByPlayerId(int player_id);
    @Query(value = "SELECT * FROM players_valuations WHERE player_id = :name", nativeQuery = true)
    List<Map<String, Object>> findPlayerValuationByPlayerId(String name);

    @Query(value = "SELECT * FROM players_valuations", nativeQuery = true)
    List<Players_Valuations> getPlayerValuations();
}