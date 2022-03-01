const CityWeatherWidget: React.FC<CityWeatherWidgetProps> = props => {
  return (
    <div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt={props.icon}
        />
      </div>
      <div>
        {props.name} {props.temperature}
      </div>
    </div>
  );
};

type CityWeatherWidgetProps = {
  name: string;
  icon: string;
  temperature: number;
};

export default CityWeatherWidget;
