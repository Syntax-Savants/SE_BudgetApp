package com.SyntaxSavants.BudgetApp.Domain.User;

import com.SyntaxSavants.BudgetApp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user")
    public ResponseEntity<User> getUser(@RequestHeader String auth) {
        String[] username_and_password = auth.split(":");
        if (username_and_password.length != 2) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        String username = username_and_password[0];
        String password = username_and_password[1];
        Optional<User> user = userRepository.findById(username);

        if (user.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }

        if (user.get().getPassword().equals(password)) {
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
