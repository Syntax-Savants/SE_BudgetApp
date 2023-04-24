package com.SyntaxSavants.BudgetApp.Domain.User;

import com.SyntaxSavants.BudgetApp.Repository.UserRepository;
import com.SyntaxSavants.BudgetApp.Service.AuthenticationService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationService authentication;

    @GetMapping("/user")
    @CrossOrigin
    public ResponseEntity<User> getUser(@RequestHeader String auth) throws SQLException {
        Optional<User> user = authentication.authenticateUser(auth);

        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
    @PostMapping("/user")
    @CrossOrigin
    public ResponseEntity<?> addNewUser(@RequestBody CreateUserRequest request) throws SQLException {
        User u = new User();

        u.setFirst_name(request.getFirst_name());
        u.setLast_name(request.getLast_name());
        u.setUsername(request.getUsername());
        u.setPassword(request.getPassword());


        userRepository.createUser(request.getFirst_name(), request.getLast_name(), request.getUsername(), request.getPassword());
        //Statement.executeQuery
        //createUser(request.getFirst_name(), request.getLast_name(), request.getUsername(), request.getPassword());


        if(userRepository.createUser(request.getFirst_name(), request.getLast_name(), request.getUsername(), request.getPassword())) {
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        //Statement.executeQuery
        //createUser(request.getFirst_name(), request.getLast_name(), request.getUsername(), request.getPassword());


    }

    @PutMapping("/balance")
    @CrossOrigin
    public void updateBalance(@RequestHeader BalanceRequest request) throws SQLException{
        userRepository.updateBalance(request);

    }

    @PutMapping("/balance")
    @CrossOrigin
    public void updateSavingsGoal(@RequestHeader BalanceRequest request) throws SQLException{
        userRepository.updateSavingsGoal(request);
    }





    /*public void createUser(String first, String last, String user, String pw) throws SQLException{
        statement.executeQuery("insert into user values('JohnDoe123', 'John', 'Doe', 'rootPW')");
    }*/

    /*public void createUser(String first, String last, String user, String pw) throws SQLException{
        statement.executeQuery("insert into user values('JohnDoe123', 'John', 'Doe', 'rootPW')");
    }*/
}
