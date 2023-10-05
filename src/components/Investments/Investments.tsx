import "./Investments.css";

export const Investments = (props: { piles: { career: number, health: number } }) => {
    const secondsInADay = 24 * 60 * 60; // Total seconds in a day

    function calculatePercentage(seconds: number) {
        const percentage = (seconds / secondsInADay) * 100;
        return percentage.toFixed(2);
    }

    return (
        <div className="wrapper">
            <p><strong>Investments for today</strong></p>
            <div className="row">
                <div className="item">
                    <p>Career</p>
                    {calculatePercentage(props.piles.career)}%
                </div>
                <div className="item">
                    <p>Health</p>
                    {calculatePercentage(props.piles.health)}%
                </div>
            </div>
        </div>
    );
};