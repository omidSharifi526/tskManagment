import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { ReactComponent as ObjectiveVector } from '../../StaticData/Svgs/ObjectiveVector.svg';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import CreateObjective from '../../Forms/CreateObjective/CreateObjective';
const AllOkRs = () => {
  const [showAddObjective, setShowAddObjective] = useState<boolean>(false);
  const initialAddObjective = (): void => {
    setShowAddObjective(prev => !prev)
  }
  return (
    <>
      <Grid container  >
        <Grid item xs={12}>

        </Grid>

        <Grid item xs={12}>
          <Box width={'100%'} textAlign={'center'} p={2}   >
            <Box>
              <ObjectiveVector />
            </Box>
            <Box>
              <Typography textAlign={'center'} variant='body2'   >
                هنوز هدفی در این دوره‌‌زمانی تعریف نشده است.
              </Typography>
            </Box>
            <Box mt={2} p={1} width={'15%'} mx={'auto'} textAlign={'center'}  >
              <DyButton
                caption={'هدف جدید'}
                onClick={initialAddObjective}
                color={'red'}
                disabled={false}
                variant={'contained'}
                bgColor={'#00387C'}
              />
              {/* caption,onClick,color,disbled,variant,type,bgColor */}
            </Box>
          </Box>
        </Grid>
        {/* showModal,setShowModal,title,children,KRHLoading */}
        {
          <ModalLyt
            showModal={showAddObjective}
            setShowModal={setShowAddObjective}
            title={'هدف جدید'}
          >
            <CreateObjective/>

          </ModalLyt>

        }
      </Grid>

    </>
  )
}

export default AllOkRs