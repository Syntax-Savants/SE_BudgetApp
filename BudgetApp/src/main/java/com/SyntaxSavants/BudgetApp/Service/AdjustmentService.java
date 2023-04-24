package com.SyntaxSavants.BudgetApp.Service;

import com.SyntaxSavants.BudgetApp.Domain.Adjustment.Adjustment;
import com.SyntaxSavants.BudgetApp.Domain.User.User;
import com.SyntaxSavants.BudgetApp.Repository.AdjustmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdjustmentService {

    private List<Adjustment> adjustments = new ArrayList<>();

    @Autowired
    private AdjustmentRepo adjustmentRepo;

    public Adjustment saveAdjustment(Adjustment adjustment) {
        return adjustmentRepo.save(adjustment);
    }

}


    /*@GetMapping("/{name}")
    public ResponseEntity<User> getAdjustmentByName(@PathVariable("name") String name) {
        User user = adjustmentRepo.findUserByName(name);

        if(user == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }*/



