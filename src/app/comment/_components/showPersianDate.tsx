type ShowPersianDate = {
    timeStamp: string | number;
}

const ShowPersianDate = ({timeStamp} : ShowPersianDate) => {
    return (
        <span className="captiopn1 text-primary">
            {new Date(timeStamp).toLocaleDateString("fa")}
        </span>
    );
};

export default ShowPersianDate;