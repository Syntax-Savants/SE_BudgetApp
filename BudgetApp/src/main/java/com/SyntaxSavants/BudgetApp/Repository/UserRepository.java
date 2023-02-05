package com.SyntaxSavants.BudgetApp.Repository;

import com.SyntaxSavants.BudgetApp.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
