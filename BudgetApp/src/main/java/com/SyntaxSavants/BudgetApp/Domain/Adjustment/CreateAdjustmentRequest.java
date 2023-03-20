package com.SyntaxSavants.BudgetApp.Domain.Adjustment;
import com.SyntaxSavants.BudgetApp.Domain.User.User;
import lombok.Data;

import java.util.Date;

@Data
public class CreateAdjustmentRequest {
    //private Long id;

    private Date date;
    private String description;

    private float amt;

    private int planned;
}
