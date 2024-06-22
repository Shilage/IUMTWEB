package server.postgres.users;

import org.springframework.stereotype.Service;



@Service
public class UsersService {
    public final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public boolean saveUserDB(Users newUsers) {
        if(usersRepository.checkUser(newUsers.getEmail()) == null){
            usersRepository.save(newUsers);
            return true;
        }
            return false;

    }

    public Users checkCredentials(String email, String password) {
        return usersRepository.checkCredentials(email, password);
    }
}
