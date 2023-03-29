package com.SyntaxSavants.BudgetApp.Domain.Adjustment;

import com.SyntaxSavants.BudgetApp.Domain.User.User;
import com.SyntaxSavants.BudgetApp.Repository.AdjustmentRepository;
import com.SyntaxSavants.BudgetApp.Service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
public class AdjustmentController {

    @Autowired
    private AdjustmentRepository adjustmentRepository;

    @Autowired
    private AuthenticationService authentication;

    @GetMapping("/balance")
    @CrossOrigin
    public ResponseEntity<List<Adjustment>> getAdjustments(@RequestHeader String auth) throws SQLException {
        Optional<User> userOptional = authentication.authenticateUser(auth);
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        User user = userOptional.get();

        //return new ResponseEntity<>(user.getAdjustments(), HttpStatus.OK);
        return null;
    }

    @PostMapping("/balance")
    @CrossOrigin
    public ResponseEntity<List<Adjustment>> createAdjustment(@RequestBody CreateAdjustmentRequest request, @RequestHeader String auth) throws SQLException{

        Optional<User> userOptional = authentication.authenticateUser(auth);
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        Random random = new Random();
        Adjustment t = new Adjustment();
        t.setId(random.nextLong());
        t.setAmt(request.getAmt());
        t.setDate(request.getDate());
        t.setDescription(request.getDescription());
        t.setPlanned(request.getPlanned());
        t.setUser_username(userOptional.get().getUsername());     //changed to fit change to string data type

        if(adjustmentRepository.createAdjustment(t.getId(), t.getDescription(), t.getUser_username(),  t.getDate(), t.getAmt(), t.getPlanned())) {
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        //return null;
    }

}
