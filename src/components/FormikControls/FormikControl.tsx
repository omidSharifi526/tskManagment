import React from 'react'
import TextFieldF from './TextFiled/TextFieldF';
import SelectF from './Select/SelectF';
import DateTimePicker from './DatePicker/DatePicker';
import TimePickerF from './TimePicker/TimePicker';
import MultiSelect from './MultiSelect/MultiSelect';
// import TextArea from './TextArea/TextArea';
// import SelectDd from './SelectDd/SelectDd';
// import DateTimePicker from './DateTimePicker/DateTimePicker';
// import CheckBox from './CheckBox/CheckBox';
// import SingleCheckBox from './SingleCheckBox/SingleCheckBox';
// import File from './File/File';
// import TimePicker from './TimePicker/TimePicker';
// import AsyncSelectDd from './AsyncSelectDd/AsyncSelectDd';
// import AutoComplete from '../FormikControl/AutoComplete/AutoComplete';
// import InputR from './ReduxControl/InputR/InputR'


const FormikControl = (props:any) => {
    const{control,...rest}=props;
   
    switch (control) {
        case 'textField':
            return <TextFieldF {...rest} />
       break
        // case 'textArea':
        //     return <TextArea {...rest} />
        // break

        case 'select':
            return <SelectF {...rest}/>
        break;

        // case  'radio':
        //     return null
        //     break;
            
        // case  'checkbox':
        //     return <CheckBox {...rest} /> 
        //     break;

        case 'date':
        return <DateTimePicker {...rest} />
        break;


        case 'multiSelect':
        return <MultiSelect {...rest} />
        break;


        // case 'file':
        //     return <File {...rest} />
        // break ;

        case 'timePicker':
            return <TimePickerF {...rest} />
        break;

        // case 'auto':
        //  return <AutoComplete {...rest} />
        // break;

        // case 'inputR':
        //     return <InputR {...rest} />
        //     break;

        default:
            return <h1>Invalid Values..!</h1>;
        break;
    }

}

export default FormikControl
