import CalendarComponet from "../componets/CalendarPage/CalendarComponet";
import CalendarPageSideBar from "../componets/CalendarPage/CalendarPageSideBar";

import Navbar from "../componets/Navbar";

function CalendarPage() {
    return (
        <div className="App" style={{ height: '100%' }}>

            <Navbar logged={true} />
            <CalendarComponet />

        </div>);
}

export default CalendarPage;