import {ReactComponent as HeldIcon} from '../StaticData/Svg/HeldIcon.svg';
import {ReactComponent as PerformingIcon} from '../StaticData/Svg/PerformingIcon.svg';
import {ReactComponent as ReadyPerformIcon} from '../StaticData/Svg/ReadyPerformIcon.svg';
import * as yup from 'yup';

const addMeetingSchema = yup.object().shape({
    // periodId:yup.string().required(''),
    teamIds:yup.array().required(),
    meetingRepeatType:yup.string().required(),
    meetingDate:yup.string().required(),
    fromTime:yup.string().required(''),
    toTime:yup.string().required(''),

 });




export{
    HeldIcon,
    PerformingIcon,
    ReadyPerformIcon,
    addMeetingSchema
    
}