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

    


      const addUserSchema = yup.object().shape({
        firstName:yup.string().required(),
        lastName:yup.string().required(),
        jobType:yup.string().required(''),
        phoneNumber:yup.string().required(''),
      
      });
      const addTeamSchema = yup.object().shape({
        name:yup.string().required(),
        managerId:yup.string().required(),
        personIds:yup.array().required()
        // jobType:yup.string().required(''),
        // phoneNumber:yup.string().required(''),
      
      });

    export{
        addTeamsinintialValues,
        // addStaffInitialValues,
        addUserSchema,
        addTeamSchema
    }