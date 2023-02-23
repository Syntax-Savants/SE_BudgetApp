import "./CalendarPageSideBar.css"

export default function CalendarPageSideBar() {
    return (
        <div className="CSideBar">

            <div className="CSideBar-input">
                <label>My Savings Goal</label>
                <p></p>

            </div >

            <div style={{display:"inline-block"}}>
                <div style={{display:"inline-block"}}className="CSideBar-input">
                    <label>Goal</label>
            <p></p>
                </div >

                <div style={{display:"inline-block"}}className="CSideBar-input">
                    <label>My Savings Goal</label>
                    <p></p>

                </div >

            </div>
        </div>
    );
}

