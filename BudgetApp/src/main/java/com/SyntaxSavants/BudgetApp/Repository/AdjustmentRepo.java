package com.SyntaxSavants.BudgetApp.Repository;

import com.SyntaxSavants.BudgetApp.Domain.Adjustment.Adjustment;
import com.SyntaxSavants.BudgetApp.Domain.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdjustmentRepo extends JpaRepository<Adjustment, Long> {

    List<Adjustment> findByUsername(String name);
    List<Adjustment>   findByUsernameAndDescription(String name, String Description);



}
