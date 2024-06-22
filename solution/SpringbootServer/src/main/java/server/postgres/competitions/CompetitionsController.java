package server.postgres.competitions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class CompetitionsController {
    private final CompetitionsService competitionsService;

    //Constructor
    @Autowired
    public CompetitionsController(CompetitionsService competitionsService) {
        this.competitionsService = competitionsService;
    }

    @GetMapping("/AllCompetitions")
    public List<Competitions> getCompetitions(){
        List<Competitions> clist = competitionsService.getCompetitions();
        return clist;
    }

    @GetMapping("/AllCompetitionsByCountry")
    public List<Competitions> getCompetitionsByCountry(@RequestParam(name = "filter") String filter) {
        List<Competitions> competitionsList = null;
        if(filter.equals("All")){
            competitionsList = competitionsService.getCompetitions();
        }else{
            competitionsList = competitionsService.getCompetitionsByCountry(filter);
        }
        return  competitionsList;
    }

    @GetMapping("/CountryOfCompetitions")
    public List<String> getCompetitionsCountry() {
        return competitionsService.getCountry();
    }

    @GetMapping("/competitionById")
    public Competitions getCompetitionById(@RequestParam(name = "competitionId") String competitionId) {
        return  competitionsService.getCompetitionById(competitionId);
    }
}
