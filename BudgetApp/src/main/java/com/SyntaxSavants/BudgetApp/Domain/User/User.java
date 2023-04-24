package com.SyntaxSavants.BudgetApp.Domain.User;


import com.SyntaxSavants.BudgetApp.Domain.Adjustment.Adjustment;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    private String username;
    private String password;

    private String first_name;
    private String last_name;
    private double savings_goal = 0;
    private double balance = 0;

    //@OneToMany(fetch = FetchType.LAZY,  mappedBy = "user")
    //private List<Adjustment> adjustments;

}
