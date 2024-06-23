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
    /**
     * Get a list of teams participating in a specific competition.
     *
     * @param filterCompetition The competition ID used to filter teams.
     * @return A list of Clubs that are part of the specified competition.
     */
    @GetMapping("/get-teams-by-competition")
    public List<Clubs> getTeamsByCompetitions(@RequestParam(name = "filterCompetition") String filterCompetition) {

        return clubsService.getAllTeamsByCompetition(filterCompetition);
    }

    /**
     * Get a list of countries that have clubs.
     *
     * @return A list of country names as Strings.
     */
    @GetMapping("/get-teams-country")
    public List<String> getTeamsCountry() {

        return clubsService.getCountry();
    }
    /**
     * Get a team by its unique club ID.
     *
     * @param clubId The unique club ID.
     * @return The Clubs object corresponding to the specified club ID.
     */
    @GetMapping("/get-team-by-id/{clubId}")
    public Clubs getTeamById(@PathVariable int clubId) {
        return clubsService.getTeamById(clubId);
    }

    /**
     * Get a list of seasons that clubs participate in.
     *
     * @return A list of season years as Integers.
     */
    @GetMapping("/get-club-season")
    public List<Integer> getClubSeason() {

        return clubsService.getClubsSeason();
    }

    /**
     * Get a list of clubs filtered by season and country.
     *
     * @param filterCountry The country to filter by.
     * @param filterSeason The season to filter by.
     * @return A list of Clubs that match the specified season and country.
     */
    @GetMapping("/get-teams-by-season-and-country")
    public List<Clubs> getTeamsBySeasonAndCountry(@RequestParam(name = "filterCountry") String filterCountry,
                                                  @RequestParam(name = "filterSeason") int filterSeason) {


        return clubsService.getAllTeams(filterSeason,filterCountry);
    }


}
