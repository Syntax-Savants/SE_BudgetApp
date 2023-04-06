package com.SyntaxSavants.BudgetApp.Domain.Adjustment;

import com.SyntaxSavants.BudgetApp.Domain.User.User;
import com.SyntaxSavants.BudgetApp.Repository.AdjustmentRepo;
import com.SyntaxSavants.BudgetApp.Repository.AdjustmentRepository;
import com.SyntaxSavants.BudgetApp.Service.AdjustmentService;
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
    private AdjustmentRepo adjustmentRepo;

    @Autowired
    private AdjustmentService adjustmentService;

    @Autowired
    private AuthenticationService authentication;

    @PostMapping("/balance")
    @CrossOrigin
    public Adjustment postDetails(@RequestBody Adjustment adjustment){
        System.out.println("Adjustment "  + adjustment);
        return adjustmentService.saveAdjustment(adjustment);
    }

    @GetMapping("/balance")
    @CrossOrigin
    public ResponseEntity<List<Adjustment>> getAdjustmentsByName(@RequestHeader String auth) throws SQLException{
        String[] str = auth.split(":");
        String user = str[0];
        Optional<User> userOptional = authentication.authenticateUser(auth);
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<List<Adjustment>>(adjustmentRepo.findByUsername(user), HttpStatus.OK);
    }

    @DeleteMapping("/balance")
    @CrossOrigin
    public void deleteAdjustment(@PathVariable Long id){
        Adjustment adjustment = adjustmentRepo.getReferenceById(id);
        adjustmentRepo.delete(adjustment);
    }




    /*@GetMapping("/balance")
    @CrossOrigin
    public ResponseEntity<List<Adjustment>> getAdjustments(@RequestHeader String auth) throws SQLException {
        Optional<User> userOptional = authentication.authenticateUser(auth);
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        User user = userOptional.get();

        return new ResponseEntity<>(user.getAdjustments(), HttpStatus.OK);

    }*/

    /*@PostMapping("/balance")
    @CrossOrigin
    public ResponseEntity<List<Adjustment>> createAdjustment(@RequestBody Adjustment request, @RequestHeader String auth) throws SQLException{

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

        if(adjustmentRepository.Adjustment(t.getId(), t.getDescription(), t.getUser_username(),  t.getDate(), t.getAmt(), t.getPlanned())) {
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        //return null;
    }*/

}
