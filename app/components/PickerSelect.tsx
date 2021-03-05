import React, {useRef} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ArrowRightIcon} from '../components/svg/icons/ArrowRight';
import {withTouchable} from '../HOC/withTouchable';
import {Colors, rems} from '../config';
import {
  MapKeysToReadonlyArrayValues,
  PickerSelectKeys,
  ExtractReadonlyArrayValues,
} from '../utility/types';

const TouchableArrowRightIcon = withTouchable(ArrowRightIcon);

interface PickerSelectProps {
  data: Array<MapKeysToReadonlyArrayValues<PickerSelectKeys, any>>;
  item: ExtractReadonlyArrayValues<any>;
  onValueChanged: (value: any) => void;
  label: string;
  placeholder: string;
}

export const PickerSelect: React.FC<PickerSelectProps> = ({
  data,
  item,
  onValueChanged,
  label,
  placeholder,
}) => {
  const ref = useRef<RNPickerSelect>(null!);

  const InputAccessoryView = () => {
    return (
      <View style={inputAccessoryViewStyles.modalViewMiddle}>
        <TouchableWithoutFeedback
          onPress={() => {
            ref.current?.togglePicker(true);
          }}>
          <Text style={inputAccessoryViewStyles.done}>Отмена</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            ref.current?.togglePicker(true);
          }}>
          <Text style={inputAccessoryViewStyles.done}>Готово</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.selectPickerContainer}>
        <Text style={styles.label}>{label}</Text>
        <RNPickerSelect
          value={item}
          onValueChange={(value) => onValueChanged(value)}
          items={data}
          InputAccessoryView={InputAccessoryView}
          ref={ref}
          style={pickerSelectStyles}
          placeholder={{
            label: `${placeholder}...`,
            value: null,
            color: '#9EA0A4',
          }}
        />
      </View>

      <View style={styles.iconContainer}>
        <TouchableArrowRightIcon
          onPress={() => {
            ref.current?.togglePicker(true);
          }}
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  label: {
    color: Colors.labelColor,
    fontSize: rems[13],
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.pickerSelectBorderColor,
    borderBottomWidth: 1,
  },
  selectPickerContainer: {
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
  },
});

const inputAccessoryViewStyles = EStyleSheet.create({
  modalViewMiddle: {
    height: rems[50],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#dedede',
    zIndex: 2,
  },
  done: {
    color: Colors.primaryColor,
    fontWeight: '500',
    fontSize: rems[17],
    paddingTop: 1,
    paddingRight: 11,
  },
});

const pickerSelectStyles = EStyleSheet.create({
  inputIOS: {
    fontSize: rems[16],
    color: '#373A3F',
  },
  inputAndroid: {
    fontSize: rems[16],
    color: '#373A3F',
  },
  inputIOSContainer: {
    marginTop: 5,
    marginBottom: 10,
  },
  inputAndroidContainer: {
    marginTop: 3,
    marginBottom: 10,
  },
});
