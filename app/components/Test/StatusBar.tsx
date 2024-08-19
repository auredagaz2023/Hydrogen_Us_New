const StatusBar = ({status}: {status: number}) => {
  return (
    <div className="mattress-statusbar-root">
      <div className="mattress-statusbar rotate-0 pl-0 pb-6 ml-0 pl-0 sm:rotate-90">
        {[...Array(8).keys()].map((num) => (
          <span
            className={`stepIndicator${num === status ? ' active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;
