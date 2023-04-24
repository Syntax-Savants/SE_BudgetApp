package com.SyntaxSavants.BudgetApp.Service;

import com.SyntaxSavants.BudgetApp.Domain.User.User;
import com.SyntaxSavants.BudgetApp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;



}
