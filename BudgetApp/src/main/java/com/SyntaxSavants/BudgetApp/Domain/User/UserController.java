package com.SyntaxSavants.BudgetApp.Domain.User;

import com.SyntaxSavants.BudgetApp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public ResponseEntity<User> getUser(@RequestHeader String raw_auth) {
        String[] auth = raw_auth.split(":");
        if (auth.length != 2) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        String username = auth[0];
        String password = auth[1];
        Optional<User> user = userRepository.findById(username);

        if (user.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }

        if (user.get().getPassword().equals(password)) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
    @PostMapping("/")
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
