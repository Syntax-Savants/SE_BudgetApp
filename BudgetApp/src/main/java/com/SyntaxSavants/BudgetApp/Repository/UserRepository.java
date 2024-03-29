package com.SyntaxSavants.BudgetApp.Repository;

import com.SyntaxSavants.BudgetApp.Domain.User.BalanceRequest;
import com.SyntaxSavants.BudgetApp.Domain.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.sql.*;
import java.util.Optional;

@Repository
public class UserRepository {
    Statement statement;

    public boolean createUser(String first, String last, String user, String pw) throws SQLException{
        if (getUser(user).isPresent()) {
            return false;
        };

        String query = String.format("insert into user values('%s', '%s', '%s', '%s',1000,1000);", user, first, last, pw);
        statement.executeUpdate(query);
        return true;
    }

    public UserRepository() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        System.out.println("Driver loaded");

        // Connect to a database
        Connection connection = DriverManager.getConnection
                ("jdbc:mysql://localhost:3306/db_syntaxsavants" , "springuser", "SyntaxSavants42");
        System.out.println("Database connected");

        // Create a statement
        statement = connection.createStatement();
    }

    public Optional<User> getUser(String username) throws SQLException {
        String query = String.format("select * from user where username = '%s';", username);
        ResultSet resultSet = statement.executeQuery(query);

        if(!resultSet.next()){
            return Optional.empty();
        }
        return Optional.of(new User(resultSet.getString("username"),
                resultSet.getString("password"),
                resultSet.getString("first_name"),
                resultSet.getString("last_name"),
                resultSet.getDouble("balance"),
                resultSet.getDouble("savings_goal")));


    }

    public void updateBalance(BalanceRequest user) throws SQLException{
        String username = user.getUsername();
        double balance = user.getBalnce();

        String query = "UPDATE db_syntaxsavants.user SET balance = '"+ balance + "' WHERE (username = '"+ username +"');";
        statement.executeUpdate(query);
    }

    public void updateSavingsGoal(BalanceRequest user) throws SQLException{
        String username = user.getUsername();
        double savings_goal = user.getSavings_goal();
        String query = "UPDATE db_syntaxsavants.user SET savings_goal = '"+ savings_goal + "' WHERE (username = '"+ username +"');";
        statement.executeUpdate(query);
    }

}
