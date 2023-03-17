package com.SyntaxSavants.BudgetApp.Domain.Adjustment;

import com.SyntaxSavants.BudgetApp.Domain.User.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Adjustment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;

    /*@ManyToOne()                                                  //commented out
    @JoinColumn(name = "user_username", nullable = false)           //old way of using data type User
    private User user;*/
    private String user_username;    //changed from User data type to String

    private Date date;

    private float amt;

    private boolean planned;
}
