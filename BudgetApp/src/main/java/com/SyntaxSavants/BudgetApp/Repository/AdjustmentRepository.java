package com.SyntaxSavants.BudgetApp.Repository;

import com.SyntaxSavants.BudgetApp.Domain.Adjustment.Adjustment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdjustmentRepository extends JpaRepository<Adjustment, Long> {
}
