package server.postgres.competitions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetitionsService {
    private final CompetitionsRepository competitionsRepository;

    @Autowired
    public CompetitionsService(CompetitionsRepository competitionsRepository) {
        this.competitionsRepository = competitionsRepository;
    }

    public List<Competitions> getCompetitions() {
        List<Competitions> competitionsList = competitionsRepository.getCompetitions();
        return competitionsList;
    }


    public List<Competitions> getCompetitionsByCountry(String filter) {
        List<Competitions> competitionsList = competitionsRepository.findByCountry(filter);
        return competitionsList;
    }

    public Competitions getCompetitionById(String competitionId) {
        System.out.println("competitionId--->" + competitionId);
        Competitions competitions = competitionsRepository.getCompetitionById(competitionId);
        return competitions;
    }

    public List<String> getCountry() {
        List<String> countryList = competitionsRepository.getCountry();
        countryList.add("All");
        return countryList;
    }

    public List<String> getCompetitionsId() {
        List<String> competitionIdList = competitionsRepository.getCompetitionsId();
        competitionIdList.add("All");
        return competitionIdList;
    }

}
