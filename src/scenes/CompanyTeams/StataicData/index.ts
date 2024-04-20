import {ReactComponent as EmptyDataIcon} from '../../../Asset/Svgs/EmptyData/EmptyData.svg';
import {ReactComponent as HistoryIcon} from './Icons/HistoryIcon.svg';
import meh from '../../../Asset/Svgs/Emojys/meh.png';
import sad from '../../../Asset/Svgs/Emojys/sad.png.png';
import smil from '../../../Asset/Svgs/Emojys/smil.png.png';
import {SelectOptionFace} from '../Interfaces/interfaces';
import React from 'react';
import * as yup from 'yup';

// 
// با ریسک عدم دستیابی مواجه هستیم اما تمام تلاش خود را خواهیم کرد.
// 

const currentStateOptions:SelectOptionFace[]=[

    {
        key:'پایان یافته',
        value:'Finished'
    }
    ,
    {
        key:'در مسیر مناسب',
        value:'OnTheRightTrack'
    }
    ,
    {
        key:'نیازمند توجه',
        value:'NeedAttention'
    }
    ,
    {
        key:'خارج از مسیر مناسب',
        value:'OfTheRightTrack'
    },
    {
        key:'بدون وضعیت',
        value:'NoStatus'
    }
]

const nextStateOptions:SelectOptionFace[]=[
{
    key:'انتظار داریم به نتیجه مناسب برسیم',
    value:'WeExpectToGetTheRightResult'
}
,
{
    key:' با ریسک عدم دستیابی مواجه هستیم اما تمام تلاش خود را خواهیم کرد ',
    value:'WeAreFacingTheRiskOfNotGettingItButWeWillDoOurBest'
}
,
{
    key:'اعتقاد نداریم به نتیجه ای برسیم مگر اینکه رویکرد جدید اتخاذ کنیم.',
    value:'WeDoNotBelieveThatWeWillReachTheResultUnlessWeAdoptNewApp'
}
];

const StatusIcon=(props:any):any=>{
let {index}=props;
switch (index) {
    case 0:
        return 

        break;


}
}

const straddKrSchema = yup.object().shape({
    newValue:yup.string().required(''),
    tensileScore:yup.string().required(''),
    problems:yup.string().required(''),
    nextState:yup.string().required(''),
    currentState:yup.string().required(''),
 });

 const intaddKrSchema = yup.object().shape({
    newValue:yup.number().required(''),
    // tensileScore:yup.string().required(''),
    problems:yup.string().required(''),
    nextState:yup.string().required(''),
    currentState:yup.string().required(''),
 });




export{
    EmptyDataIcon,
    HistoryIcon,
    currentStateOptions,
    nextStateOptions,
    // StatusIcon,
    straddKrSchema,
    intaddKrSchema

}