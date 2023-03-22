import Navbar from "../components/Navbar";
import "./BalancePage.css";
import "./HelpPage.css";

export default function HelpPage(){
    return(<div>
        <Navbar></Navbar>
        <div
            className = "HelpPage-header">
            <h2>
             Help Me Decide
            </h2>
        </div>

        <div className="subtitle">
            <h3>
                How do personal loans work?
            </h3>
        </div>

        <div className="body">
            <ul>
                <li>
                    Personal loans can either be secured or unsecured. 
                    A secured personal loan means that you must offer collateral; 
                    an asset that has worth in case you are unable to he money you owe back. 
                    If you cannot pay the lender back, the lender gets the collateral. 
                    With an unsecured personal loan, you are not required to put up collateral; 
                    however, if you cannot pay the lender back your credit score will be damaged. 
                </li>
                <li>
                    Personal loans are issued as a grand sum where all the money is directly deposited
                    into your bank account at once. Commonly, you are required to pay back the loan
                    over a fixed period of time at a fixed interest rate. 
                    The loan period differs based on each loan and lender. 
                </li>
                </ul>
        </div>
        <div className="subtitle">
            <h3>
                When should I take out a personal loan?
            </h3>
        </div>
        
        <div className="body">
            <ul>
                <li>
                    If you need cash quickly to pay for necessary expenses, 
                    a personal loan may be right for you. 
                    Typically, interest rates are lower than those of credit cards. 
                    Whenever, considering taking out a personal loan one must consider 
                    their ability to pay it off. If you will be able to make several payments 
                    over the course of the loan term, a personal loan may be a good idea. 
                </li>
                <li>
                    A few common reasons people take out personal loans include home remodeling, 
                    moving costs, emergency expenses, large purchases, vehicle financing, wedding expenses, 
                    vacation costs, etc.
                </li>
            </ul>
        </div>

        <div className="subtitle">
            <h3>
                When should I not take out a personal loan?
            </h3>
        </div>

        <div className="body">
            <p>
                Personal loans are very useful when it come to financing larger or unexpected expenses; 
                however, personal loans are not for everyone.
            </p>
            <ul>
                
                <li>
                    If your credit score is on the lower end a personal loan may not be best. 
                    The lower your credit score is the higher your interest rates may be. 
                    This will make it more difficult to pay back your loan.
                </li>
                <li>
                    If you cannot afford the monthly payments needed to pay back your loan a personal 
                    loan will not be beneficial to you. 
                </li>
            </ul>
        </div>
        <div className="square"></div>
    </div>);

}