package com.SyntaxSavants.BudgetApp.Controller;
import com.SyntaxSavants.BudgetApp.Domain.User.CreateUserRequest;
import com.SyntaxSavants.BudgetApp.Repository.UserRepository;
import com.SyntaxSavants.BudgetApp.Domain.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

//controller to communicate app health to web page
@RestController
public class Controller{

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/health")
    public String getHealthCheck(){
        return "Endpoint met"; //postman test
    }


}