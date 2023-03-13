package com.SyntaxSavants.BudgetApp.Service;

import com.SyntaxSavants.BudgetApp.Domain.User.User;
import com.SyntaxSavants.BudgetApp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.Optional;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> authenticateUser(String auth) throws SQLException {
        //return Optional.of(new User());
        System.out.println("auth: " + auth);
        String[] username_and_password = auth.split(":");
        if (username_and_password.length != 2) {
            return Optional.empty();
        }
        String username = username_and_password[0];
        String password = username_and_password[1];
        Optional<User> user = userRepository.getUser(username);

        System.out.println(user.toString());
        if (user.isEmpty()) {
            return Optional.empty();
        }

        if (user.get().getPassword().equals(password)) {
            return user;
        }

        return Optional.empty();
    }
}

