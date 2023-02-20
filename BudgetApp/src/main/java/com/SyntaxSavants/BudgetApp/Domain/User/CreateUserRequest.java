package com.SyntaxSavants.BudgetApp.Domain.User;

import lombok.Data;

@Data
public class CreateUserRequest {
    private String username;
    private String password;
    private String first_name;
    private String last_name;

}
