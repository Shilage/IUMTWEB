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


    /**
     * Get a list of competitions filtered by country or all competitions if 'All' is specified.
     *
     * @param filter The country to filter by or 'All' to get all competitions.
     * @return A list of Competitions based on the country filter or all competitions.
     */
    @GetMapping("/all-competitions")
    public List<Competitions> getCompetitionsByCountry(@RequestParam(name = "filter") String filter) {
        List<Competitions> competitionsList = null;
        if(filter.equals("All")){
            competitionsList = competitionsService.getAllCompetition();
        }else{
            competitionsList = competitionsService.getCompetitionsByCountry(filter);
        }

        return  competitionsList;
    }

    /**
     * Get a list of countries that have competitions.
     *
     * @return A list of country names as Strings.
     */
    @GetMapping("/get-competitions-country")
    public List<String> getCompetitionsCountry() {
        return competitionsService.getCountry();
    }


    /**
     * Get a competition by its unique competition ID.
     *
     * @param competitionId The unique competition ID.
     * @return The Competitions object corresponding to the specified competition ID.
     */
    @GetMapping("/get-competitions-by-id")
    public Competitions getCompetitionById(@RequestParam(name = "competitionId") String competitionId) {
        return  competitionsService.getCompetitionById(competitionId);
    }
}
