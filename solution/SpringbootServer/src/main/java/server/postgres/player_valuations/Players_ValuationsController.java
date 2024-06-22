package server.postgres.player_valuations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class Players_ValuationsController {
    private final Players_ValuationsService players_ValuationsService;

    //Constructor
    @Autowired
    public Players_ValuationsController(Players_ValuationsService players_ValuationsService) {
        this.players_ValuationsService = players_ValuationsService;
    }

    @GetMapping("/player_valuations")
    public List<Players_Valuations> getPlayers_Valuations(){
        List<Players_Valuations> pvlist = players_ValuationsService.getPlayers_Valuations();
        return pvlist;
    }
}

