import CalendarComponet from "../componets/CalendarPage/CalendarComponet";
import CalendarPageSideBar from "../componets/CalendarPage/CalendarPageSideBar";

import Navbar from "../componets/Navbar";
import { getCurrentUser } from "../Global";

function CalendarPage() {

    console.log("Welcome to Calendar page " + getCurrentUser());

    return (
        <div className="" style={{ height: '100%' }}>

            <Navbar logged={true} />
            <div style={{ margin: 0, padding: 0 }}>
                <CalendarPageSideBar />

                <CalendarComponet />
            </div>
        </div>);
}

export default CalendarPage;