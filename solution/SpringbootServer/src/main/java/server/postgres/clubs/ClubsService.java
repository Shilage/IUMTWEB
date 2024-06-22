package server.postgres.clubs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClubsService {
    private final ClubsRepository clubsRepository;
    @Autowired
    public ClubsService(ClubsRepository clubsRepository) {
        this.clubsRepository = clubsRepository;
    }

    public List<Clubs> getClubs(){
        return clubsRepository.getClubs();
    }

    public List<Clubs> getClubsFromCompetition(String compid) {return clubsRepository.getClubsFromCompetition(compid);}

    public List<Clubs> getClubsByName(char letter){return clubsRepository.getClubsByName(letter);}

    public Clubs getClubById(int id){return clubsRepository.getClubById(id);}

}