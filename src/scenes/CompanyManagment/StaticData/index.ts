import React from "react"
import { addTeamsFace,addUserFace } from "../Interfaces/Interfaces"
import * as yup from 'yup';


const addTeamsinintialValues:addTeamsFace={
    name:'',
    personIds:[],
    fromDate:null,
    managerId:'',
    tenantId:'',
    toDate:null
    
    }

    const addStaffInitialValues:addUserFace={
     firstName:'',
     lastName:'',
    //  createById:'',
     jobType:'',
     phoneNumber:'',
     tenantId:''
      }


      const addUserSchema = yup.object().shape({
        firstName:yup.string().required(),
        lastName:yup.string().required(),
        jobType:yup.string().required(''),
        phoneNumber:yup.string().required(''),
      
      });

    export{
        addTeamsinintialValues,
        addStaffInitialValues,
        addUserSchema
    }