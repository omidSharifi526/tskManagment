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
   
   
      const phoneNumberSchema = yup.object().shape({
        phoneNumber: yup.string().min(11)
      });

      const codeNumberSchema = yup.object().shape({
        code: yup.string().min(4)
      });

      const passValidationSchema = yup.object().shape({
        newPassword: yup.string()
          .required(''),
          confirmNewPassword: yup.string()
          .required('')
          .oneOf([yup.ref('newPassword')], '')
      });

    export{
        addTeamsinintialValues,
        // addStaffInitialValues,
        addUserSchema,
        addTeamSchema,
        phoneNumberSchema,
        codeNumberSchema,
        passValidationSchema
    }