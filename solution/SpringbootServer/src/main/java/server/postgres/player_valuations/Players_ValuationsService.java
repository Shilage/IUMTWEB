package server.postgres.player_valuations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class Players_ValuationsService {
    private final Players_ValuationsRepository players_ValuationsRepository;
    @Autowired
    public Players_ValuationsService(Players_ValuationsRepository players_ValuationsRepository) {
        this.players_ValuationsRepository = players_ValuationsRepository;
    }

    public List<Players_Valuations> getPlayers_Valuations(){
        return players_ValuationsRepository.getPlayerValuations();
    }

}