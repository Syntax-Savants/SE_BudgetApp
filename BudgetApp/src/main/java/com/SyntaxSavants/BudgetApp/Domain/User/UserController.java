package com.SyntaxSavants.BudgetApp.Domain.User;

import com.SyntaxSavants.BudgetApp.Repository.UserRepository;
import com.SyntaxSavants.BudgetApp.Service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationService authentication;

    @GetMapping("/user")
    public ResponseEntity<User> getUser(@RequestHeader String auth) {
        Optional<User> user = authentication.authenticateUser(auth);

        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
    @PostMapping("/user")
    public ResponseEntity<?> addNewUser(@RequestBody CreateUserRequest request) {
        User u = new User();

        u.setFirst_name(request.getFirst_name());
        u.setLast_name(request.getLast_name());
        u.setUsername(request.getUsername());
        u.setPassword(request.getPassword());

        userRepository.save(u);

        return new ResponseEntity("it worked", HttpStatus.OK);
    }
}
