package com.SyntaxSavants.BudgetApp.Domain.User;
import lombok.Data;

@Data
public class BalanceRequest {
    private String username;
    private double balnce;
    private double savings_goal;

}
