import React, { useState, useEffect } from 'react';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import { Box, Grid } from '@mui/material';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { CreateKeyResult } from '../../Forms/CreateKeyResult/CreateKeyResult';
import AddTeam from '../../../CompanyManagment/Forms/AddTeam/AddTeam';
import AddStaff from '../../../CompanyManagment/Forms/AddStaff/AddStaff';
import AddMession from '../../Forms/AddMession/AddMession';
import AddContract from '../../Forms/AddContract/AddContract';
import AddCompany from '../../Forms/AddCompay/AddCompany';
import ResetPassword from '../../Forms/ResetPassword/ResetPassword';
const PersonalOkRs = () => {


  const [showCreateKr, setShowCreateKr] = useState<Boolean | null>(false);
  const [showAddStaff, setShowAddStaff] = useState<Boolean | null>(false);
  const [showAddTeam, setShowAddTeam] = useState<Boolean | null>(false);
  const [showAddMession, setShowAddMession] = useState<Boolean | null>(false);
  const [showAddContract, setShowAddContract] = useState<Boolean | null>(false);
  const [showAddCompany, setshowAddCompany] = useState<Boolean | null>(false);
  const [showResetPassword, setShowResetPassword] = useState<boolean | null>(false)
  const initialCreateKr = (): void => {
    setShowCreateKr(prev => !prev)
  }

  const initialAddStaff = () => {
    setShowAddStaff(prev => !prev)
  }

  const initialAddTeam = () => {
    setShowAddTeam(prev => !prev)
  }

  const initialAddMession = () => {
    setShowAddMession(prev => !prev)
  }

  const initialAddContract = () => {
    setShowAddContract(prev => !prev)
  }

  const initialAddNewCompany = () => {
    setshowAddCompany(prev => !prev)
  }

  const initialResetPassword = () => {
    setShowResetPassword(prev => !prev)
  }
  return (
    <>
      <Grid container >
        <Grid item xs={12} md={2} >
          <DyButton
            caption={'تعریف نتیجه کلیدی'}
            onClick={initialCreateKr}
            color={'red'}
            disbled={false}
            variant={'contained'}
            type={'button'}
            bgColor={'#00387C'}
          />
        </Grid>
        {
          showCreateKr && <ModalLyt
            showModal={showCreateKr}
            setShowModal={setShowCreateKr}
            title={'ایجاد پرسنل'}  >
            {/* <CreateKeyResult /> */}
          </ModalLyt>
        }
        

        <Grid item xs={12} md={2} mx={2}>
          <DyButton
            caption={' ثبت  پرسنل'}
            onClick={initialAddStaff}
            color={'red'}
            disbled={false}
            variant={'contained'}
            type={'button'}
            bgColor={'#00387C'}
          />
          {

            showAddStaff && <ModalLyt
              showModal={showAddStaff}
              setShowModal={setShowAddStaff}
              title={'ایجاد نتیجه کلیدی'}  >
              <AddStaff />
            </ModalLyt>

          }
        </Grid>

        <Grid item xs={12} md={2} mx={2}>
          <DyButton
            caption={' ثبت  تیم'}
            onClick={initialAddTeam}
            color={'red'}
            disbled={false}
            variant={'contained'}
            type={'button'}
            bgColor={'#00387C'}
          />
          {

            showAddTeam && <ModalLyt
              showModal={showAddTeam}
              setShowModal={setShowAddTeam}
              title={'ایجاد تیم'}  >
              <AddTeam />
            </ModalLyt>

          }
        </Grid>


        <Grid item xs={12} md={2} mx={2}>
          <DyButton
            caption={' ثبت  ماموریات'}
            onClick={initialAddMession}
            color={'red'}
            disbled={false}
            variant={'contained'}
            type={'button'}
            bgColor={'#00387C'}
          />
          {

            showAddMession && <ModalLyt
              showModal={showAddMession}
              setShowModal={setShowAddMession}
              title={'ایجاد ماموریت'}  >
              <AddMession />
            </ModalLyt>

          }
        </Grid>

        <Grid item xs={12} md={2} mx={2}>
          <DyButton
            caption={' ثبت  قرارداد'}
            onClick={initialAddContract}
            color={'red'}
            disbled={false}
            variant={'contained'}
            type={'button'}
            bgColor={'#00387C'}
          />
          {

            showAddContract && <ModalLyt
              width={8}
              showModal={showAddContract}
              setShowModal={setShowAddContract}
              title={'ایجاد قرارداد جدید'}  >
              <AddContract />
            </ModalLyt>

          }
        </Grid>


        <Grid item xs={12} md={2} mt={2}>
          <DyButton
            caption={' ثبت شرکت جدید'}
            onClick={initialAddNewCompany}
            color={'red'}
            disbled={false}
            variant={'contained'}
            type={'button'}
            bgColor={'#00387C'}
          />
          {

            showAddCompany && <ModalLyt
              width={8}
              showModal={showAddCompany}
              setShowModal={setshowAddCompany}
              title={'ایجاد شرکت جدید'}  >
              <AddCompany />
            </ModalLyt>

          }
        </Grid>

        <Grid item xs={12} md={2} mt={2} mx={2}>
          <DyButton
            caption={'تغییر رمز عبور'}
            onClick={initialResetPassword}
            color={'red'}
            disbled={false}
            variant={'contained'}
            type={'button'}
            bgColor={'#00387C'}
          />
          {

            showResetPassword && <ModalLyt
              width={8}
              showModal={showResetPassword}
              setShowModal={setShowResetPassword}
              title={'تغییر رمز عبور'}  >
              <ResetPassword />
            </ModalLyt>

          }
        </Grid>



      </Grid>


    </>
  )
}

export default PersonalOkRs