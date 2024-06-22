package server.postgres.clubs;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class ClubsController {
    private final ClubsService clubsService;

    public ClubsController(ClubsService clubsService) {
        this.clubsService = clubsService;
    }

    @GetMapping("/clubsByCompetition")
    public List<Clubs> getClubsByCompetitions(@RequestParam(name = "filterCompetition") String filterCompetition) {
        return clubsService.getClubsFromCompetition(filterCompetition);
    }

    @GetMapping("/clubsCountry")
    public List<String> getClubsCountry() {
        return clubsService.getCountry();
    }

    @GetMapping("/clubById/{clubId}")
    public Clubs getClubById(@PathVariable int clubId) {
        return clubsService.getClubById(clubId);
    }

    @GetMapping("/clubBySeason")
    public List<Integer> getClubSeason() {
        return clubsService.getClubsSeason();
    }

    @GetMapping("/clubsBySeasonAndCountry")
    public List<Clubs> getTeamsBySeasonAndCountry(@RequestParam(name = "filterCountry") String filterCountry,
                                                  @RequestParam(name = "filterSeason") int filterSeason) {
        return clubsService.getClubs(filterSeason,filterCountry);
    }


}
