import React from "react";
import { Grid, Box, Typography, useTheme, Button, Stack } from "@mui/material";
// import { tokens } from "../../../../theme";
import { useDispatch } from "react-redux";
// import { setImageFilesR } from "../../OrderSlice/OrderSlice";
// import { setOrderImagesR } from "../../../OnlineOrder/OrderOnlineSlice/OrderOnlineSlice";
// import { ImageUploaderLogo } from "./Statics/index";
// import uuid from "react-uuid";
// import ImagePreview from "../ImagePreview/ImagePreview";
import { useState, useEffect,useRef } from "react";
import axios from "axios";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";


const ImageSelector = ({
  imageSelectedType,
  title,
  setImages,
  images,
  buttonTitle,
  imageWidth,
  imageHeight,
  imageWraperHeight,
  overflow,
  directionImageWrap,
  disableSizeText,
  addButtonColor,
  AddButtonVariant,
  fillPadd,
  setDeleteImageId,
  editMode,
  setSampleInformationImages,deleteImageHock
}:any) => {
  const [orderImages, setOrderImages] = useState([]);
  const existToken = localStorage.getItem('accessToken');
  const [unauthorizedFiles, setUnauthorizedFiles] = useState(null);
  const theme = useTheme();
  const fileRef:any =useRef<any>(null);
  const [selectedFile, setSelectedFile] = useState(null);
//   const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (images && images.length === 0) {
      setUnauthorizedFiles(null);
    }
  }, [images]);

  const handleSetImages = (imgs:any) => {
    var formData = new FormData();
 
    const {data } = imgs;
    let file=data[0];
    setSelectedFile(file);

    // headers: {}


    const imagesArray = Array.from(data);
    const authorizedFiles:any[] = [];
    const unauthorizedFiles = [];

    // const convertToBase64 = (file) => {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve(reader.result);
    //     reader.onerror = (error) => reject(error);
    //   });
    // };

    // for (let i = 0; i < imagesArray.length; i++) {
    //   const file:any = imagesArray[i];
    //   if (
    //     (file.type.includes("image/") &&
    //       ["png", "jpeg", "jpg", "svg+xml"].includes(
    //         file.type.split("/")[1]
    //       )) ||
    //     file.name.endsWith(".svg")
    //   ) {
    //     authorizedFiles.push(file);
    //   } else {
    //     unauthorizedFiles.push(file);
    //     // setUnauthorizedFiles(unauthorizedFiles);
    //   }
    // }

    // if (imagesArray.length > 0 && unauthorizedFiles.length === 0) {
    //   setUnauthorizedFiles(null);
    //   let images = imagesArray.map((file:any) => {
    //     return {
    //     //   id: uuid(),
    //       picture: file,
    //       imageSelectedType: imageSelectedType,
    //       imageName: file.name,
    //       title: file.name,
    //       url: URL.createObjectURL(file),
    //       // type:editMode?'added':null
    //     };
    //   });
    //   setImages((prev:any)=>[...prev ,...images]);
    // }
  };

  useEffect(() => {
    setOrderImages(images);
    // console.log(images);
  }, []);

  const convertToBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    try {
      const base64String = await convertToBase64(selectedFile);
      console.log(base64String);

      axios.post('https://api.myokr.ir/Api/Upload/Upload', base64String, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${existToken}`
        }
    })
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Grid
      container
      pb={fillPadd ? fillPadd : 0}
      pt={1}
      px={1}
      sx={{
        borderRadius: "8px",
        background: theme.palette.mode === "dark" ? "#1E232D" : "#fff",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0px 4px 20px 0px rgba(125, 128, 138, 0.16)"
            : "0px 4px 20px 0px rgba(125, 128, 138, 0.16)",
      }}
    >
      <Grid item xs={12} md={12} py={1}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="caption"
            color="#3592FB"
            fontSize={"12px"}
            px={2}
          >
            {title}
          </Typography>
          <Button onClick={handleUpload}  >
            uploadFile
          </Button>
          <Button
            variant={AddButtonVariant ? AddButtonVariant : ""}
            color={addButtonColor ? addButtonColor : ""}
            sx={{
              px: "16px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 400,
              background: "transparent",
              color: "#1E6AFD",
              boxShadow: "0",
              "&:hover": {
                color: "#fff",
                background: "#1E6AFD",
              },
            }}
            onClick={() => {
              fileRef.current.click();
            }}
          >
            {" "}
            {imageSelectedType === 1 ? "انتخاب فایل" : "افزودن تصویر "}
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Stack
          p={"10px"}
          pb={images?.length > 0 ? "15px" : ""}
          borderRadius={3}
          bgcolor={theme.palette.mode === "dark" ? "#292B32" : "#F6F6F6"}
          direction={"column"}
          justifyContent={"start"}
          alignItems={"center"}
          rowGap={1}
          height={imageWraperHeight && imageWraperHeight}
        >
          <input
            hidden
            ref={fileRef}
            type="file"
            multiple={imageSelectedType === 1 ? false : true}
            accept="image/png , image/jpeg , image/jpg  image/svg+xml  "
            onChange={(event) => {
              handleSetImages({ data: event.target.files, imageSelectedType });
            }}
          />

          {images?.length > 0 && unauthorizedFiles === null ? (
            <>
              <Stack
                direction={"row"}
                justifyContent={"start"}
                flexWrap={"wrap"}
                overflow={overflow ? overflow : "hidden"}
                width={"100%"}
                height={"220px"}
              >
                {images &&
                  images.map((image:any, i:number) => {
                   
                    return (
                        <></>
                    //   <ImagePreview
                    //     imageWidth={imageWidth}
                    //     imageHeight={imageHeight}
                    //     setDeleteImageId={setDeleteImageId?setDeleteImageId:null}
                    //     file={image}
                    //     key={i}
                    //     type={3}
                    //     setUpdatedImages={setImages}
                    //     images={images}
                    //     setSampleInformationImages={setSampleInformationImages}
                    //     deleteImageHock={deleteImageHock}
                    //   />
                    );
                  })}
              </Stack>
            </>
          ) : unauthorizedFiles !== null ? (
            <Box
              textAlign={"center"}
              flexDirection={"column"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}
            >
              {/* <DamageFileIcon style={{ width: "100px" }} /> */}
              <Typography color={"red"} variant="button">
                {" "}
                فایل غیر مجاز است
              </Typography>
            </Box>
          ) : (
            <>
              <Stack
                direction={directionImageWrap ? directionImageWrap : "column"}
                rowGap={2}
                alignItems={"center"}
                py={1}
              >
                upload
                {/* <ImageUploaderLogo width={"80px"} height={"80px"} /> */}
                <Typography color={"gray"} fontSize={"12px"}>
                  فایل های مجاز:PNG,SVG,JPG,JPGE
                </Typography>
                {disableSizeText ? (
                  ""
                ) : (
                  <Typography
                    color={"gray"}
                    className="font-num"
                    fontSize={"12px"}
                  >
                    حداکثر حجم: 500 مگابایت
                  </Typography>
                )}
              </Stack>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ImageSelector;

/**========================================================================
 *               1402/10/04    :    user=javadBoroji
 *        TODO: change button :  {type === 1 ? "انتخاب فایل": "افزودن تصویر "}
 *
 *        TODO: add New Props : imageWidth ,imageHeight  for <ImagePreview/> => preveiwContainer
 *              description: برای متغییر بودن سایز عکس ها در فرم های مختلف
 *
 *        TODO: add New Props : overflow  for  <Stack />
 *              description:برای این اگر تعداد عکس ها بیشتر شد اسکرول بخورد
 *        TODO: add New Props :imageWraperHeight
 *              description: برای داینامیک کردن ارتفاع باکس
 *
 *
 *========================================================================**/

/**========================================================================
 *                1402/10/05   :     user=javadBoroji
 *             TODO: add New Props: directionImageWrap
 *              description: برای مدیریت کردن توضییحات قبل از آپلود عکس
 *                             direction:column|row
 *            TODO: add New Props: disableSizeText
 *                description :برای زمانی که بخواهیم متن حجم فایل را نمایش ندهیم
 *
 *
 *========================================================================**/

/**========================================================================
 *                1402/10/06   :     user=omid
 *             TODO: add New Props: addButtonColor
 *              description: برای مدیریت رنگ دکمه اصلی
 *                             addButtonColor:info|primary
 *            TODO: add New Props: AddButtonVariant
 *                description : برای مدیریت حالت دکمه اصلی
 *
 *
 *========================================================================**/

/**========================================================================
 *                1402/10/23   :     user=omid
 *             TODO: add New Props: fillPadd
 *              description: برای تنظیم ارتفاع کامپوننت با ستون مجاور
 *                             fillPadd : type= number
 *
 *
 *
 *========================================================================**/
/**========================================================================
 *                             1402/12/14       user=javad
 * 
 *            TODO:setImage save prev state not remove
 *            setImages((prev)=>[...prev ,images]);
 *  
 *  
 *========================================================================**/
/**========================================================================
 *                             1402/02/16       user=javad
 * 
 *            TODO:deleteImageHock props for function delete Image dynamik
 *            description: اگر دیلیلت مجزا باشد هوک مربوط به دیلیت را پاس میدهیم و فانکشن آن فراخوانی می شود
 *  
 *  
 *========================================================================**/