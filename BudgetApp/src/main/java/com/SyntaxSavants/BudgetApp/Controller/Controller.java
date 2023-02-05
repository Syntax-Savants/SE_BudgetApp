package com.SyntaxSavants.BudgetApp.Controller;
import com.SyntaxSavants.BudgetApp.Domain.CreateUserRequest;
import com.SyntaxSavants.BudgetApp.Repository.UserRepository;
import com.SyntaxSavants.BudgetApp.Domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
//controller to communicate app health to web page
@RestController
public class Controller{

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/health")
    public String getHealthCheck(){
        return "Endpoint met"; //postman test
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