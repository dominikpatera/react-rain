import {
  UserSettingsThemeType,
  UserSettingsUnitsType,
} from '../../types/userSettings.types';
import { Wrapper, Option } from './UnitsPicker.styles';

const UnitsPicker: React.FC<UnitsPickerProps> = props => {
  return (
    <Wrapper theme={props.theme}>
      <Option
        active={props.selectedUnits === 'metric'}
        onClick={props.onUnitsChange.bind(null, 'metric')}
        theme={props.theme}
      >
        °C
      </Option>
      <Option
        active={props.selectedUnits === 'imperial'}
        onClick={props.onUnitsChange.bind(null, 'imperial')}
        theme={props.theme}
      >
        °F
      </Option>
    </Wrapper>
  );
};

type UnitsPickerProps = {
  selectedUnits: UserSettingsUnitsType;
  onUnitsChange: (setUnitsTo: UserSettingsUnitsType) => void;
  theme: UserSettingsThemeType;
};

export default UnitsPicker;
