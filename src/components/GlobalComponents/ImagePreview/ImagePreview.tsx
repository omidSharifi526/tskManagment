import React, { useEffect, useState, lazy } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
// import { deleteImageR } from "../../OrderSlice/OrderSlice";
import { useDispatch, useSelector } from "react-redux";
// import { tokens } from "../../../../theme";
// import AlertDialogSlide from "../DeleteDialog/DeleteDialog";
// import DeleteMessage from "../../../global/DeleteMessage/DeleteMessage";
// import { filterOrderImagesR } from "../../../OnlineOrder/OrderOnlineSlice/OrderOnlineSlice";
// import { useDeleteOrderImage } from "../../../Orders/Hooks/index";

// const LazyFullPhotoDisplay = lazy(() =>
//   import("../FullPhotoDisplay/FullPhotoDisplay")
// );

const ImagePreview = ({
  file,
  type,
  setUpdatedImages,
  images,
  imageWidth,
  imageHeight,
  setDeleteImageId,
  setSampleInformationImages,
  deleteImageHock
}:any) => {
  const dispatch = useDispatch();
  const [imageDetails, setImageDetails] = useState<any>(null);
  
  const deleteSuccess = () => {
    setUpdatedImages(images.filter((img:any) => img.id !== imageDetails.id));
    if (setSampleInformationImages) {
      setSampleInformationImages(images.filter((img:any) => img.id !== imageDetails.id))
    }
  };

  const deleteFailed = () => {
    console.log("falied");
  };
//   const { mutate: initialDeleteOrderImage } = useDeleteOrderImage(
//     deleteSuccess,
//     deleteFailed
//   );
  const { storType } = file;

  const sampleInformationImages = useSelector(
    (state:any) => state.order.sampleInformation.uploadImages
  );
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
 
  // console.log(file)

  // const [fullPhotoDisplay,setFullPhotDisply]=useState(false)
  const theme = useTheme();
  const themeMod = theme.palette.mode;
//   const colors = tokens(theme.palette.mode);

  const [showMore, setShowMore] = useState(false);

  const handleMouseEnter = (e:any) => {
    setShowMore(true);
  };

  const handleMouseLeave = (e:any) => {
    setShowMore(false);
  };
  const preveiwContainer = {
    width: imageWidth ? imageWidth : "40%",
    height: imageHeight ? imageHeight : "100%",
    position: "relative",
    cursor: "pointer",
    transition: "1s all ease ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    margin: "0 5px",
  };

  const showMoreStyle = {
    width: "100%",
    height: "100%",
    opacity: "80%",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    backgroundColor: "black",
    zIndex: 10,
    transition: "1s all ease ",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    borderRadius: "5px",
  };

  const initialDeletImage = () => {
    let { id, imageSelectType, storType }:any = file; 
     console.log(file)
    // setImageDetails({ id: id, type: imageSelectType,storType:storType });
    setShowDeleteDialog(true);
  };





  const handleImageDelete = () => {
    let existImages = [...images];
    let { id }:any = imageDetails;
    if (setDeleteImageId) {
      setDeleteImageId((prev:any) => {
        if (!prev.includes(id)) {
          return [...prev, id];
        } else {
          return prev;
        }
      });
    }
    setUpdatedImages(existImages.filter((img) => img.id !== id));
    setShowMore(false);


    if (storType==='saved') {
    //   initialDeleteOrderImage(id);
      if(deleteImageHock){

        deleteImageHock(id)
      }
      
    } else {
      setUpdatedImages(existImages.filter((img) => img.id !== id));
    setShowMore(false);
    }






    
  };






  const cancelDelete = () => {
    setShowMore(false);
  };

  const [imageFull, setimageFull] = useState(false);
  const viewImage = () => {
    setimageFull(true);
  };



  return (
    <Grid
      display="flex"
      flexDirection="column"
      sx={preveiwContainer}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
    >
      {storType === "saved" ? (
        <img
          src={`data:image/jpeg;base64,${file.url}`}
          width="90%"
          height="95%"
          alt="none"
        />
      ) : (
        <img
          src={file.url}
          width="100%"
          height="95%"
          style={{ objectFit: "cover" }}
          alt="none"
        />
      )}

      {showMore && (
        <Grid sx={showMoreStyle}>
          <IconButton color="error" size="small" onClick={initialDeletImage}>
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton onClick={() => viewImage()}>
            <i className="icon-Eye" style={{ fontSize: "20px" }}></i>
          </IconButton>
        </Grid>
      )}

      {/* {showDeleteDialog && (
        <DeleteMessage
          showDeleteMessage={Boolean(showDeleteDialog)}
          setShowDeleteMessage={setShowDeleteDialog}
          agree={handleImageDelete}
          cancel={cancelDelete}
        />
      )}
      {imageFull && (
        <Box
          sx={{
            background: themeMod === "dark" ? "#161B25" : "#F7FBFF",
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "9999",
          }}
        >
          <Button
            sx={{ display: "flex", margin: "0 0 0 auto" }}
            onClick={() => setimageFull(false)}
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muirtl-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 20 20"
              data-testid="CloseIcon"
              style={{ color: "red" }}
            >
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </Button>
          <Box display={"flex"} overflow={"hidden"} height={"100%"}>
            {storType === "saved" ? (
              <img
                src={`data:image/jpeg;base64,${file.url}`}
                width="90%"
                height="95%"
                alt="none"
              />
            ) : (
              <img
                src={file.url}
                width="100%"
                height="95%"
                style={{ objectFit: "cover" }}
                alt="none"
              />
            )}
          </Box>
        </Box>
      )} */}
    </Grid>
  );
};

export default ImagePreview;

/**========================================================================
 *               1402/10/04    :    user=javadBoroji
 *
 *        TODO: add New Props : imageWidth ,imageHeight  for <ImagePreview/> => preveiwContainer
 *              description: برای متغییر بودن سایز عکس ها در فرم های مختلف
 *========================================================================**/
/**========================================================================
 *               1402/10/22    :    user=javadBoroji
 *
 *        TODO: add ViewImage
 *              description: با زدن بروی آیکن چشم عکس fullScreen می شود
 *========================================================================**/