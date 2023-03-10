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

    @ManyToOne()
    @JoinColumn(name = "user_username", nullable = false)
    private User user;

    private Date date;

    private float amt;

    private boolean planned;

}
