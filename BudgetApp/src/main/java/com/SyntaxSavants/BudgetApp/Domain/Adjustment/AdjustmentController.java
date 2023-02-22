package com.SyntaxSavants.BudgetApp.Domain.Adjustment;

import com.SyntaxSavants.BudgetApp.Domain.User.User;
import com.SyntaxSavants.BudgetApp.Repository.AdjustmentRepository;
import com.SyntaxSavants.BudgetApp.Service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.Vector;

@RestController
public class AdjustmentController {

    @Autowired
    private AdjustmentRepository adjustmentRepository;

    @Autowired
    private AuthenticationService authentication;

    @GetMapping("/adjustments")
    @CrossOrigin
    public ResponseEntity<List<Adjustment>> getAdjustments(@RequestHeader String auth) {
        Optional<User> userOptional = authentication.authenticateUser(auth);
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        User user = userOptional.get();

        return new ResponseEntity<>(user.getAdjustments(), HttpStatus.OK);
    }
}
