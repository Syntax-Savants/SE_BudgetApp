
package com.SyntaxSavants.BudgetApp.Repository;


import com.SyntaxSavants.BudgetApp.Domain.Adjustment.Adjustment;
import com.SyntaxSavants.BudgetApp.Domain.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.sql.*;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Optional;
import java.util.Date;
import java.time.*;
//@Repository
public class AdjustmentRepository {/*

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
        String query = String.format("select * from adjustment where id = '%s';", id);
        ResultSet resultSet = statement.executeQuery(query);

        if(!resultSet.next()){
            return Optional.empty();
        }
        return Optional.of(new Adjustment(resultSet.getLong("id"),
                resultSet.getString("description"),
                resultSet.getString("username"),                //changed to getting string              //getUser does not work
                resultSet.getDate("date"),
                resultSet.getFloat("amt"),
                resultSet.getInt("planned")));
        //return null; //preventing errors

    }

    public Optional<Adjustment> getAllAdjustment(String username) throws SQLException {
        String query = String.format("select * from adjustment where user_username = '%s';", username);
        ResultSet resultSet = statement.executeQuery(query);

        if(!resultSet.next()){
            return Optional.empty();
        }
        return Optional.of(new Adjustment(resultSet.getLong("id"),
                resultSet.getString("description"),
                resultSet.getString("username"),                   //changed to getting string             //getUser does not work
                resultSet.getDate("date"),
                resultSet.getFloat("amt"),
                resultSet.getInt("planned")));
        //return null; //preventing errors


    }

    public boolean createAdjustment(Long id, String desc, String user, Date date, Float amt, int planned) throws SQLException{
        if (getOneAdjustment(id.floatValue()).isPresent()) {
            return false;
        }

        System.out.println("Java Date: " + date);              //for testing purposes

        java.util.Date temp = new Date(date.getTime() + (1000 * 60 * 60 * 24));
        //System.out.println("Temp:" + temp);                    //for testing purposes

        java.sql.Date sqlDate = new java.sql.Date(temp.getTime());
        //System.out.println("SQL Date:" + sqlDate);             //for testing purposes
        //System.out.println();

        String query = String.format("insert into adjustment values('%s', '%s', '%s', '%s', '%s', '%s')", id,  amt, sqlDate, desc, planned, user);
        statement.executeUpdate(query);
        return true;
    }

    fetch("http://localhost:8080/balance", {
        method: "Post",
                headers: {
            "Content-Type": "application/json",
                    "auth":"JohnDoe123:rootPW"
        },
        body: JSON.stringify({amt:550, date:"2017-05-04",description:"Test3",planned:0})
    }).then((x)=> {
        console.log(x)
    })
    */

}
