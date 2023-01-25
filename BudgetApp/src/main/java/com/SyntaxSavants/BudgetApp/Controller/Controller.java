package com.SyntaxSavants.BudgetApp.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
//controller to communicate app health to web page
@RestController
public class Controller{
    @GetMapping("/health")
    public String getHealthCheck(){
        return "Endpoint met"; //postman test
    }
}