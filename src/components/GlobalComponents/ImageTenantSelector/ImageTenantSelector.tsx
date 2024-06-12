import React from "react";
import { Grid, Box, Typography, useTheme, Button, Stack, IconButton } from "@mui/material";
// import { tokens } from "../../../../theme";
import { useDispatch } from "react-redux";

import { useState, useEffect,useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useGetTenantPicture,useAddTenantPicture } from "../../../scenes/CompanyManagment/Hooks";
import Delete from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";


const ImageTenantSelector = ({
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
  setChangeImgData,
  setShowToastMessage

}:any) => {
  const [selectedFile, setSelectedFile] = useState({
    picture: null,
    imageName: '',
    title: '',
    url: '',
  });
  const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
  const{data:personPictureData}=useGetTenantPicture(tenantId);
  const afterChangeImage=()=>{
  setSelectedFile({
    picture: null,
    imageName: '',
    title: '',
    url: '',
  })
  }
  const{mutate:addPersonImg,isLoading,data}=useAddTenantPicture(afterChangeImage);
  const[authorizedFiles,setAuthorizedFiles]=useState<any>(null)
  

  const existToken = localStorage.getItem('accessToken');
  // const [unauthorizedFiles, setUnauthorizedFiles] = useState(null);
  const theme = useTheme();
  const fileRef:any =useRef<any>(null);
 

  const handleSetImages = (imgs:any) => {
   
 
    const {data } = imgs;
    let file=data[0];


  if (file) {
    // console.log(file)
    if ((file.type.includes("image/") &&["png"].includes(file.type.split("/")[1])) && file.size<=40000 ) 
    
      {
        let imgFile:any={
          picture: file,
          imageName: file.name,
          title: file.name,
          url: URL.createObjectURL(file),
        };
        setSelectedFile(imgFile);
        // authorizedFiles.push(file);
      }
      else{
        setAuthorizedFiles('unuuuuu')
      }
  }
 
 
  };

  

  const convertToBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.picture);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async () => {
if (selectedFile.picture!==null) {
  try {
    const base64String = await convertToBase64(selectedFile);
    let body={
      tenantId:tenantId,
      extension:'.png',
      PictureBase64String :base64String
    }
    addPersonImg(body)



  } catch (error) {
    console.error('Error uploading file:', error);
  }
  
}




  };

  useEffect(() => {
    
  if (data) {
    setChangeImgData(data)
    setShowToastMessage(true)
  }
   
  }, [data])
  

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

       

          <Button  disabled={selectedFile.picture===null || isLoading}  

          
          
          onClick={handleUpload} endIcon={<SaveIcon/>}  >
            ذخیره
          </Button>
     
          <Button
            variant={AddButtonVariant ? AddButtonVariant : ""}
            color={addButtonColor ? addButtonColor : "contained"}
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

          {selectedFile.picture!==null ? (
            <>
              <Stack
                direction={"row"}
                justifyContent={"start"}
                flexWrap={"wrap"}
                overflow={overflow ? overflow : "hidden"}
                width={"100%"}
                py={2}
              >
                <Box   >
                  <img src={selectedFile.url} width={'90px'} 
                  style={{borderRadius:'50%',boxShadow:'20px'}}  />
                </Box>

                <Box>
                  <IconButton onClick={()=>{
                    setSelectedFile({
                      picture: null,
                      imageName: '',
                      title: '',
                      url: '',
                    })
                  }}   >
                    <Delete/>
                  </IconButton>
                </Box>
             
              </Stack>
            </>
          ) : authorizedFiles !== null ? (
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
              <Typography color={"red"} variant="button" >
                {" "}
                فایل غیر مجاز است
                
              </Typography>
              <ErrorOutlineIcon color="error"  />
            </Box>
          ) : (
            <>
              <Stack
                direction={directionImageWrap ? directionImageWrap : "column"}
                rowGap={2}
                alignItems={"center"}
                py={1}
              >
                {/* <ImageUploaderLogo width={"80px"} height={"80px"} /> */}
                <Typography color={"gray"} fontSize={"12px"}>
                  فایل های مجاز:PNG
                </Typography>
                {disableSizeText ? (
                  ""
                ) : (
                  <Typography
                    color={"gray"}
                    className="font-num"
                    fontSize={"12px"}
                  >
                    حداکثر حجم: 200کیلو بایت
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

export default ImageTenantSelector;

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