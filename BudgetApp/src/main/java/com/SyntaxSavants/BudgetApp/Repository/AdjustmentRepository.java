package com.SyntaxSavants.BudgetApp.Repository;

import com.SyntaxSavants.BudgetApp.Domain.Adjustment.Adjustment;
import com.SyntaxSavants.BudgetApp.Domain.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.sql.*;
import java.util.Optional;
import java.util.Date;
@Repository
public class AdjustmentRepository {

    Statement statement;
    public AdjustmentRepository() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        System.out.println("Driver loaded (Adjustment)");

        // Connect to a database
        Connection connection = DriverManager.getConnection
                ("jdbc:mysql://localhost:3306/db_syntaxsavants" , "springuser", "SyntaxSavants42");
        System.out.println("Database connected (Adjustment)");

        // Create a statement
        statement = connection.createStatement();
    }

    public Optional<Adjustment> getOneAdjustment(Float id) throws SQLException {
        String query = String.format("select * from adjustment where id = '%d';", id);
        ResultSet resultSet = statement.executeQuery(query);

        if(!resultSet.next()){
            return Optional.empty();
        }
        /*return Optional.of(new Adjustment(resultSet.getLong("id"),
                resultSet.getUser("user"),                              //getUser does not work
                resultSet.getDate("date"),
                resultSet.getFloat("amt"),
                resultSet.getBoolean("planned")));*/
        return null; //preventing errors

    }

    public Optional<Adjustment> getAllAdjustment(String username) throws SQLException {
        String query = String.format("select * from adjustment where user_username = '%s';", username);
        ResultSet resultSet = statement.executeQuery(query);

        if(!resultSet.next()){
            return Optional.empty();
        }
        /*return Optional.of(new Adjustment(resultSet.getLong("id"),
                resultSet.getUser("user"),                              //getUser does not work
                resultSet.getDate("date"),
                resultSet.getFloat("amt"),
                resultSet.getBoolean("planned")));*/
        return null; //preventing errors


    }

    public void createAdjustment(Long id, User user, Date date, Float amt, boolean planned) throws SQLException{
        String query = String.format("insert into adjustment values('%d', '%a', '%s', '%b', '%s", id, amt, date, planned, user);
        statement.executeUpdate(query);
    }

}
