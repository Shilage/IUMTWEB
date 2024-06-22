package server.postgres.users;

import org.springframework.web.bind.annotation.*;

@RestController
public class UsersController {
    private final UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/sign-up")
    public boolean  saveUserDB(@RequestBody Users newUser) {
        return usersService.saveUserDB(newUser);
    }

    @GetMapping("/check-credentials")
    public Users  checkCredentials(@RequestParam(name = "email") String email,
                                  @RequestParam(name = "password") String password) {
        return usersService.checkCredentials(email, password);
    }


}
