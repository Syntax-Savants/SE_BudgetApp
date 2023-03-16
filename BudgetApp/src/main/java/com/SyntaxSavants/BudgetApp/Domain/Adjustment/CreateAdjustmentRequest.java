package com.SyntaxSavants.BudgetApp.Domain.Adjustment;
import com.SyntaxSavants.BudgetApp.Domain.User.User;
import lombok.Data;

import java.util.Date;

@Data
public class CreateAdjustmentRequest {
    private Long id;
    private User user;

    private Date date;

    private float amt;

    private boolean planned;
}
